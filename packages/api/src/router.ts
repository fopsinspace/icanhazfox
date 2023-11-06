import { router } from './trpc';

import hello from './procedures/hello';

export const appRouter = router({
  hello,
});

export type Approuter = typeof appRouter;
