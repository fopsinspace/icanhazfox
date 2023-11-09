import { initTRPC } from '@trpc/server';
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import type * as schema from './schemas';
import type { Auth } from './lucia';

interface Context {
  req: Request;
  resHeaders: Headers;
  db: DrizzleD1Database<typeof schema>;
  auth: Auth;
}

const { router, procedure } = initTRPC.context<Context>().create();

export { router, procedure, type Context };
