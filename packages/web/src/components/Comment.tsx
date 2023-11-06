import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { IconDotsVertical, IconFlag3 } from '@tabler/icons-react';

export interface CommentProps {
  author: { name: string; avatar: string };
  comment: string;
  created: Date;
}

export default function Comment(props: CommentProps) {
  return (
    <div className="grid gap-2 pt-4 border-t border-t-neutral-600">
      <div className="flex justify-between items-center">
        <a className="flex gap-2 font-semibold items-center hover:underline" href={`/user/${props.author.name}`}>
          <img src={props.author.avatar} className="rounded-full w-6 h-6" />
          <span>{props.author.name}</span>
        </a>

        <div className="flex items-center">
          <span className="text-neutral-500">
            {props.created.toLocaleDateString(navigator?.language ?? 'en-GB', {
              day: 'numeric',
              weekday: 'short',
              month: 'long',
              hour: '2-digit',
              minute: '2-digit',
              // TODO: Setup post date
              year: new Date().getFullYear() != 2023 ? 'numeric' : undefined,
            })}
          </span>

          <Dropdown.Root>
            <Dropdown.Trigger asChild>
              <button
                className="p-1 hover:bg-neutral-600 hover:bg-opacity-30 rounded-full w-8 h-8 ml-2"
                aria-label="Comment Options"
              >
                <IconDotsVertical />
              </button>
            </Dropdown.Trigger>

            <Dropdown.Portal>
              <Dropdown.Content side="bottom" align="end" className="bg-neutral-700 py-2 rounded-lg text">
                <Dropdown.Item className="flex gap-2 items-center hover:bg-neutral-600 px-2 py-2 cursor-pointer">
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
