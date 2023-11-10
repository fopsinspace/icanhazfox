import { LoaderFunctionArgs } from "react-router-dom";
import { posts } from "../../data";

export default async function loader({
  params,
}: LoaderFunctionArgs & { params: { postId?: string } }) {
  if (!params.postId) throw new Response("Missing Post ID", { status: 400 });

  const post = posts.find((post) => post.id == params.postId);
  if (!post) throw new Response("Unknown Post", { status: 404 });

  return post;
}
