import { router } from './trpc';

import hello from './procedures/hello';
import signUp from './procedures/signup';
import signIn from './procedures/signin';
import requestValidate from './procedures/requestValidate';
import cookieValidate from './procedures/cookieValidate';

export const appRouter = router({
  hello,
  signUp,
  signIn,
  requestValidate,
  cookieValidate
});

export type AppRouter = typeof appRouter;
