import {
  FastifyAdapter,
  type NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { fastifyConnectPlugin } from '@connectrpc/connect-fastify';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import routes from './connect';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { cors: true },
  );
  await app.register(fastifyConnectPlugin, {
    routes,
  });

  await app.listen(3000);
}
bootstrap();
