import { TRPCError } from "@trpc/server";
import { procedure } from "../trpc";

export default procedure
  .query(async ({ctx: {auth, req}}) => {
    const authRequest = auth.handleRequest(req);
    const session = await authRequest.validate();
    if (session) return session.user;
    throw new TRPCError({
      code: 'FORBIDDEN'
    })
  })
