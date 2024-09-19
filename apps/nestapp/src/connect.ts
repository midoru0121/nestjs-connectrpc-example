import type { ConnectRouter } from '@connectrpc/connect';
import { DemoService } from '@repo/connectrpc';

export default (router: ConnectRouter) =>
  router.service(DemoService, {
    createUser: async () => {
      return {
        success: true,
        message: 'created!',
      };
    },
  });
