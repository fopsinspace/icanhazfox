import * as Form from "@radix-ui/react-form";
import { type FormEvent, useEffect, useState } from "react";
import { zxcvbn } from "../../utils/zxcvbn";
import { ZxcvbnResult } from "@zxcvbn-ts/core";
import { trpc } from "../../utils/trpc";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [zxcvbnResult, setzxcvbnResult] = useState<ZxcvbnResult | undefined>(
    undefined,
  );
  const [mutating, setMutating] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();

    setMutating(true);
    trpc.signUp.mutate({username, password}).then(() => {setMutating(false)})
  }

  useEffect(() => {
    if (!password || !password.length) return;

    setzxcvbnResult(zxcvbn(password));
  }, [password]);

  return (
    <main className="flex flex-row items-center gap-x-16">
      <div className="hidden max-h-screen w-full overflow-hidden xl:block">
        <div className="grid h-full -translate-x-60 -translate-y-8 rotate-12 grid-flow-row grid-cols-3 gap-8">
          <div className="h-[50dvh] w-full rounded-lg bg-neutral-300" />
          <div className="h-[50dvh] w-full rounded-lg bg-neutral-300" />
          <div className="h-[50dvh] w-full rounded-lg bg-neutral-300" />
          <div className="h-[50dvh] w-full rounded-lg bg-neutral-300" />
          <div className="h-[50dvh] w-full rounded-lg bg-neutral-300" />
          <div className="h-[50dvh] w-full rounded-lg bg-neutral-300" />
        </div>
      </div>

      <div className="w-full p-8">
        <h1 className="mb-4 text-3xl font-bold">Sign Up</h1>
        {mutating ? (
          <div>mutating...</div>
        ) : (
        <Form.Root className="max-w-fit" onSubmit={submit}>
          <Form.Field name="username">
            <Form.Label asChild>
              <h5 className="mb-1">username</h5>
            </Form.Label>
            <Form.Control asChild>
              <input
                type="text"
                className="block rounded-md border-2 border-neutral-300 bg-transparent px-4 py-2 font-medium"
                onInput={(e) => {setUsername(e.currentTarget.value)}}
                value={username}
                required
              />
            </Form.Control>
          </Form.Field>
          <hr className="h-4 border-none" />
          <Form.Field name="password">
            <Form.Label asChild>
              <h5 className="mb-1">password</h5>
            </Form.Label>
            <Form.Control asChild>
              <input
                type="password"
                onInput={(e) => {
                  setPassword(e.currentTarget.value);
                }}
                value={password}
                className="block rounded-md border-2 border-neutral-300 bg-transparent px-4 py-2"
                required
              />
            </Form.Control>
            {(password.length > 0 && zxcvbnResult) && (
              <>
                <hr
                  className={`mt-4 border-2 transition-all ease-out-circ duration-300 ${
                    zxcvbnResult.score === 0 ? "w-0 border-red-500" : ""
                  } ${
                    zxcvbnResult.score === 1 ? "w-1/4 border-orange-500" : ""
                  } ${
                    zxcvbnResult.score === 2 ? "w-2/4 border-yellow-500" : ""
                  } ${
                    zxcvbnResult.score === 3 ? "w-3/4 border-green-500" : ""
                  } ${
                    zxcvbnResult.score === 4 ? "w-full border-green-600" : ""
                  }`}
                />
                <span>
                  <b>strength: </b>
                  {zxcvbnResult.score === 0 ? "poor" : ""}
                  {zxcvbnResult.score === 1 ? "bad" : ""}
                  {zxcvbnResult.score === 2 ? "moderate" : ""}
                  {zxcvbnResult.score === 3 ? "good" : ""}
                  {zxcvbnResult.score === 4 ? "strong" : ""}
                </span>
              </>
            )}
          </Form.Field>
          <Form.Submit asChild>
            <button className="mt-4 bg-neutral-300 text-black w-full py-2 px-4 rounded-md">submit</button>
          </Form.Submit>
        </Form.Root>
        )}
      </div>
    </main>
  );
}
