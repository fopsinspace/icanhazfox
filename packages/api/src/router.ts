import { router } from './trpc';

import hello from './procedures/hello';
import signUp from './procedures/signup';

export const appRouter = router({
  hello,
  signUp
});

export type AppRouter = typeof appRouter;
