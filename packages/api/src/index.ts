import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from './router';

interface Env extends Record<string, unknown> {
  DB: D1Database;
}

export default {
  async fetch(request: Request, env: Env) {
    return fetchRequestHandler({
      endpoint: '/_trpc',
      req: request,
      router: appRouter,
      createContext: ({ req, resHeaders }) => ({
        req,
        resHeaders,
      }),
    });
  },
};
