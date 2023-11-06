import { initTRPC } from '@trpc/server';

interface Context {
  req: Request;
  resHeaders: Headers;
}

const { router, procedure } = initTRPC.context<Context>().create();

export { router, procedure, type Context };
