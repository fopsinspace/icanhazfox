import { d1 } from '@lucia-auth/adapter-sqlite';
import { lucia } from 'lucia';
import { web } from 'lucia/middleware';

export const initializeLucia = (db: D1Database, env: 'DEV' | 'PROD') =>
  lucia({
    adapter: d1(db, {
      user: 'user',
      key: 'user_key',
      session: 'user_session',
    }),
    env,
    getUserAttributes: (data) => ({
      username: data?.username,
      avatar: data?.avatar,
    }),
    middleware: web(),
    experimental: {
      debugMode: env === 'DEV',
    },
  });

export type Auth = ReturnType<typeof initializeLucia>;
