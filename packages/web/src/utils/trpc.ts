import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "api/out/router";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8787/_trpc",
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: "include",
        });
      },
    }),
  ],
});
