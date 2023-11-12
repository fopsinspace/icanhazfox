import { router } from './trpc';

import hello from './procedures/hello';
import signUp from './procedures/signup';
import signIn from './procedures/signin';

export const appRouter = router({
  hello,
  signUp,
  signIn,
});

export type AppRouter = typeof appRouter;
