import { IconHeart } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface PostProps {
  id: string;
  caption?: string;
  src: string;
  isAnimated?: boolean;
  author: {
    name: string;
    avatar: string;
  };
  views: number;
  likes: number;
}

/* if (open) navigate(`/post/${props.id}`, { preventScrollReset: true });
else navigate(originalPath, { preventScrollReset: true }); */

export default function Post(props: PostProps) {
  const [isLiked, setLiked] = useState<boolean>(false);

  return (
    <div className="relative h-auto w-full overflow-hidden rounded-2xl">
      {/* Post */}
      <Link to={`/post/${props.id}`}>
        {props.isAnimated ? (
          <video
            src={props.src}
            autoPlay
            controls={false}
            loop
            muted // otherwise chrome won't play the video without user interaction
            className="h-full w-full object-cover"
          />
        ) : (
          <img src={props.src} className="h-full w-full object-cover" />
        )}

        <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
      </Link>

      {/* Author Information */}
      <span className="absolute bottom-4 left-4 flex gap-4">
        <div className="flex flex-col items-start gap-2">
          <span className="line-clamp-1 w-2/3 overflow-hidden text-ellipsis font-semibold">
            {props.caption}
          </span>

          <span className="flex gap-1.5 text-xs font-semibold">
            <img src={props.author.avatar} className="h-4 w-4 rounded-full" />
            <span>{props.author.name}</span>

            <span className="flex items-center gap-1 before:block before:h-1 before:w-1 before:rounded-full before:bg-current before:content-['']">
              {props.views.toLocaleString("en-US", { notation: "compact" })}{" "}
              Views
            </span>
          </span>
        </div>
      </span>

      {/* Heart Icon */}
      <div className="absolute bottom-8 right-4 flex items-center gap-2">
        <span>
          {props.likes.toLocaleString("en-US", { notation: "compact" })}
        </span>

        <button
          className={`rounded-full p-2 hover:bg-neutral-600 hover:bg-opacity-30 ${
            isLiked ? "animate-heart text-red-500" : "text-current"
          }`}
          onClick={() => setLiked(!isLiked)}
        >
          <IconHeart
            // size="28"
            fill={isLiked ? "currentColor" : "transparent"}
          />
        </button>
      </div>
    </div>
  );
}
