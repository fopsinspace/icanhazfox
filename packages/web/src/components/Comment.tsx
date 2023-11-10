import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { IconDotsVertical, IconFlag3 } from "@tabler/icons-react";

export interface CommentProps {
  author: { name: string; avatar: string };
  comment: string;
  created: Date;
}

export default function Comment(props: CommentProps) {
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between">
        <a
          className="flex items-center gap-2 font-semibold hover:underline"
          href={`/user/${props.author.name}`}
        >
          <img src={props.author.avatar} className="h-6 w-6 rounded-full" />
          <span>{props.author.name}</span>
        </a>

        <div className="flex items-center">
          <span className="text-neutral-500">
            {props.created.toLocaleDateString(navigator?.language ?? "en-GB", {
              day: "numeric",
              weekday: "short",
              month: "long",
              hour: "2-digit",
              minute: "2-digit",
              // TODO: Setup post date
              year: new Date().getFullYear() != 2023 ? "numeric" : undefined,
            })}
          </span>

          <Dropdown.Root>
            <Dropdown.Trigger asChild>
              <button
                className="ml-2 h-8 w-8 rounded-full p-1 outline-none hover:bg-neutral-600 hover:bg-opacity-30"
                aria-label="Comment Options"
              >
                <IconDotsVertical />
              </button>
            </Dropdown.Trigger>

            <Dropdown.Portal>
              <Dropdown.Content
                side="bottom"
                align="end"
                className="text rounded-lg bg-neutral-700 py-2"
              >
                <Dropdown.Item className="flex cursor-pointer items-center gap-2 px-2 py-2 outline-none hover:bg-neutral-600">
                  <IconFlag3 size="18" /> Report
                </Dropdown.Item>

                <Dropdown.Arrow className="fill-neutral-700" />
              </Dropdown.Content>
            </Dropdown.Portal>
          </Dropdown.Root>
        </div>
      </div>

      <span>{props.comment}</span>
    </div>
  );
}
