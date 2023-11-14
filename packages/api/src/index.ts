import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from './router';
import { drizzle } from 'drizzle-orm/d1';
import { initializeLucia } from './lucia';
import * as schema from './schemas';
import { corsResponse, headers } from './utils/cors';
import { createStorage } from 'unstorage';
import cloudflareKVBindingDriver from "unstorage/drivers/cloudflare-kv-binding";

interface Env extends Record<string, unknown> {
  DB: D1Database;
  KV: KVNamespace;
  LUCIA_ENV: 'DEV' | 'PROD';
  CORS_ORIGIN: string;
}

export default {
  async fetch(request: Request, env: Env) {
    const storage = createStorage({
      driver: cloudflareKVBindingDriver({ binding: env.KV })
    });

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
        auth: initializeLucia(env.DB, storage, env.LUCIA_ENV),
      }),
      responseMeta: () => ({
        headers: headers(env.CORS_ORIGIN),
      }),
    });
  },
};
