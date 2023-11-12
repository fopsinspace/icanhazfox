import { useEffect } from "react";
import { trpc } from "../../utils/trpc";

export default function TestPage() {
  // const {data, error, isLoading} = trpc.hello.useSWR();

  useEffect(() => {
    trpc.hello.query()
  }, [])

  return (
    <>
    <h1>trpc test</h1>
    <pre>
      {/* {isLoading ? 'loading...' : data} */}
    </pre>
    </>
  )
}
