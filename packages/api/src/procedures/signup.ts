import { TRPCError } from '@trpc/server';
import { procedure } from '../trpc';
import { z } from 'zod';

export default procedure
  .input(
    z.object({
      username: z.string().min(3).max(12),
      password: z.string().min(8).max(64), // https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
    }),
  )
  .mutation(async ({ ctx: { auth, db, resHeaders }, input }) => {
    const existingUser = await db.query.user.findFirst({
      where: (user, { eq }) => eq(user.username, input.username.toLowerCase()),
    });

    if (existingUser) {
      throw new TRPCError({
        code: 'CONFLICT',
        message: 'username already taken',
      });
    }

    const user = await auth.createUser({
      key: {
        password: input.password,
        providerId: 'username',
        providerUserId: input.username.toLowerCase(),
      },
      attributes: {
        avatar: null,
        username: input.username,
      },
    });

    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });

    const cookie = auth.createSessionCookie(session).serialize();

    resHeaders.set('Location', '/');
    resHeaders.set('Set-Cookie', cookie);

    return null;
  });
