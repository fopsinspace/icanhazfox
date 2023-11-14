import { TRPCError } from "@trpc/server";
import { procedure } from "../trpc";
import { z } from 'zod';

export default procedure.input(z.object({
  header: z.string()
})).query(async ({ctx: {auth}, input}) => {
  const sessionId = auth.readSessionCookie(input.header);
  if (!sessionId) throw new TRPCError({code: 'FORBIDDEN'})
  const session = await auth.validateSession(sessionId);
  console.log(session);
})
