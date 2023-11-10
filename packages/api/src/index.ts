import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from './router';
import { drizzle } from 'drizzle-orm/d1';
import { initializeLucia } from './lucia';
import * as schema from './schemas';
import { corsResponse, headers } from './utils/cors';

interface Env extends Record<string, unknown> {
  DB: D1Database;
  LUCIA_ENV: 'DEV' | 'PROD';
  CORS_ORIGIN: string;
}

export default {
  async fetch(request: Request, env: Env) {
    if (request.method === 'OPTIONS') {
      return corsResponse(env.CORS_ORIGIN);
    }

    return fetchRequestHandler({
      endpoint: '/_trpc',
      req: request,
      router: appRouter,
      createContext: ({ req, resHeaders }) => ({
        req,
        resHeaders,
        db: drizzle(env.DB, { schema }),
        auth: initializeLucia(env.DB, env.LUCIA_ENV),
      }),
      responseMeta: () => ({
        headers: headers(env.CORS_ORIGIN),
      }),
    });
  },
};
