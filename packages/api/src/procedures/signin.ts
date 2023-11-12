import { procedure } from '../trpc';
import { AuthInput } from './signup';

export default procedure.input(AuthInput).mutation(async ({ ctx: { auth, resHeaders }, input }) => {
  const key = await auth.useKey('username', input.username.toLowerCase(), input.password);
  const session = await auth.createSession({
    userId: key.userId,
    attributes: {},
  });
  const cookie = auth.createSessionCookie(session);
  resHeaders.set('Set-Cookie', cookie.serialize());

  return null;
});
