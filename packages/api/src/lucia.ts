import { unstorage } from '@lucia-auth/adapter-session-unstorage';
import { d1 } from '@lucia-auth/adapter-sqlite';
import { lucia } from 'lucia';
import { web } from 'lucia/middleware';
import type { Storage } from 'unstorage';

export const initializeLucia = (db: D1Database, kv: Storage, env: 'DEV' | 'PROD') =>
  lucia({
    adapter: {
      user: d1(db, {
        user: 'user',
        key: 'user_key',
        session: null,
      }),
      session: unstorage(kv),
    },
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
