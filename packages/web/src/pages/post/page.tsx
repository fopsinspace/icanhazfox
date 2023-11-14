import { useState } from "react";
import { Link, useRoute } from "wouter";
import {
  IconAlbum,
  IconDownload,
  IconFlag3,
  IconHeart,
  IconShare3,
} from "@tabler/icons-react";
import Tag from "../../components/Tag";
import * as Form from "@radix-ui/react-form";
import Comment, { type CommentProps } from "../../components/Comment";

const comments: CommentProps[] = [
  {
    author: {
      name: "User123",
      avatar: "https://placehold.co/32x32.png",
    },
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    created: new Date(),
  },
  {
    author: {
      name: "JaneDoe",
      avatar: "https://placehold.co/32x32.png",
    },
    comment:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    created: new Date(),
  },
  {
    author: {
      name: "JohnSmith",
      avatar: "https://placehold.co/32x32.png",
    },
    comment:
      "Suspendisse potenti. Fusce ullamcorper, ipsum a euismod aliquet, ligula mi tincidunt ex, vel malesuada velit quam at est.",
    created: new Date(),
  },
  {
    author: {
      name: "User123",
      avatar: "https://placehold.co/32x32.png",
    },
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    created: new Date(),
  },
  {
    author: {
      name: "JaneDoe",
      avatar: "https://placehold.co/32x32.png",
    },
    comment:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    created: new Date(),
  },
  {
    author: {
      name: "JohnSmith",
      avatar: "https://placehold.co/32x32.png",
    },
    comment:
      "Suspendisse potenti. Fusce ullamcorper, ipsum a euismod aliquet, ligula mi tincidunt ex, vel malesuada velit quam at est.",
    created: new Date(),
  },
  {
    author: {
      name: "User123",
      avatar: "https://placehold.co/32x32.png",
    },
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    created: new Date(),
  },
  {
    author: {
      name: "JaneDoe",
      avatar: "https://placehold.co/32x32.png",
    },
    comment:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    created: new Date(),
  },
  {
    author: {
      name: "JohnSmith",
      avatar: "https://placehold.co/32x32.png",
    },
    comment:
      "Suspendisse potenti. Fusce ullamcorper, ipsum a euismod aliquet, ligula mi tincidunt ex, vel malesuada velit quam at est.",
    created: new Date(),
  },
];

export default function PostPage() {
  const post = undefined as any;
  const [isLiked, setLiked] = useState<boolean>(false);

  return (
    <div className="flex h-full w-full gap-6">
      <div className="block w-2/5">
        <div className="sticky top-36">
          {post.isAnimated ? (
            <video
              src={post.src}
              id={`post-${post.id}`}
              autoPlay
              controls
              loop
              className="w-full rounded-lg"
            />
          ) : (
            <img
              src={post.src}
              id={`post-${post.id}`}
              loading="eager"
              className="mb-2 w-full rounded-lg"
            />
          )}

          <div className="mt-4 flex justify-between bg-neutral-900">
            <div>
              {/* Like Button */}
              <button
                className={`rounded-full p-2 hover:bg-neutral-600 hover:bg-opacity-30 ${
                  isLiked ? "animate-heart text-red-500" : "text-current"
                }`}
                onClick={() => setLiked((liked) => !liked)}
              >
                <IconHeart fill={isLiked ? "currentColor" : "transparent"} />
              </button>

              {/* Save to Collection */}
              <button
                className={`rounded-full p-2 hover:bg-neutral-600 hover:bg-opacity-30 ${
                  isLiked ? "animate-heart text-indigo-500" : "text-current"
                }`}
              >
                <IconAlbum />
              </button>

              {/* Download Button */}
              <button className="rounded-full p-2 hover:bg-neutral-600 hover:bg-opacity-30 active:text-yellow-500">
                <IconDownload />
              </button>
            </div>
            <div>
              {/* Share Button */}
              <button className="rounded-full p-2 hover:bg-neutral-600 hover:bg-opacity-30 active:text-teal-500">
                <IconShare3 />
              </button>

              {/* Report Button */}
              <button className="rounded-full p-2 hover:bg-neutral-600 hover:bg-opacity-30 active:text-red-500">
                <IconFlag3 />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-full w-3/5 flex-col items-start gap-4 overflow-hidden">
        <span className="wrap sticky top-0 flex w-full justify-between text-xl">
          <span className="line-clamp-1 w-5/6 font-medium" title={post.caption}>
            {post.caption}
          </span>

          <span className="font-normal">
            {new Date().toLocaleDateString(navigator?.language ?? "en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </span>

        <div className="flex w-full items-center gap-8">
          <Link
            to={`/user/${post.author.name}`}
            className="flex items-center gap-2 hover:underline"
          >
            <img src={post.author.avatar} className="h-8 w-8 rounded-full" />
            <span className="font-bold">{post.author.name}</span>
          </Link>

          {/* Tags */}
          <div className="">
            {[
              "Nulla",
              "aliqua",
              "fugiat",
              "enim",
              "sunt",
              "tempor",
              "consectetur",
              "sint",
              "occaecat",
              "labore",
              "adipisicing",
              "magna",
            ].map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        </div>

        <hr className="w-full border-neutral-600" />

        {/* Comments */}
        <div className="w-full">
          <h3 className="text-xl font-bold">50 Comments</h3>

          <Form.Root className="mt-4 w-full">
            <Form.Field name="comment">
              <Form.Control asChild>
                <textarea
                  placeholder="Add a comment..."
                  onInput={(e) => {
                    e.currentTarget.style.height = "";
                    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                  }}
                  className="min-h-fit w-full resize-none overflow-hidden rounded-lg border border-neutral-500 bg-neutral-700 p-2 outline-none"
                  required
                  maxLength={255}
                />
              </Form.Control>

              <Form.Message match="tooLong">Comment is too long</Form.Message>
            </Form.Field>

            <Form.Submit className="rounded-xl bg-neutral-700 px-4 py-2">
              Comment
            </Form.Submit>
            <span className="ml-4 inline-flex gap-2">
              Posting as
              <a
                className="flex items-center gap-2 font-semibold hover:underline"
                href={`/user/JohnDoe`}
              >
                <img
                  src="https://placehold.co/32x32"
                  className="h-6 w-6 rounded-full"
                />
                <span>JohnDoe</span>
              </a>
            </span>
          </Form.Root>

          <div className="mt-6 flex flex-col gap-8">
            {[...comments, ...comments].map((comment, index) => (
              <Comment key={index} {...comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
