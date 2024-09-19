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
    getUser: async () => {
      return {
        name: 'hello',
      };
    },
    updateUser: async () => {
      return {
        success: true,
        message: 'updated!',
      };
    },
    deleteUser: async () => {
      return {
        success: true,
        message: 'deleted!',
      };
    },
  });
