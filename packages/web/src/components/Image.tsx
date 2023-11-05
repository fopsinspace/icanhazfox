import * as Dialog from '@radix-ui/react-dialog';
import { IconHeart, IconX } from '@tabler/icons-react';
import { useState } from 'react';

export interface ImageProps {
  id: string;
  name: string;
  src: string;
  isAnimated?: boolean;
  author: {
    name: string;
    avatar: string;
  };
}

export default function Image(props: ImageProps) {
  const [isLiked, setLiked] = useState<boolean>(false);

  return (
    <div className="w-full h-auto relative rounded-2xl overflow-hidden">
      <Dialog.Root>
        <Dialog.Trigger>
          {props.isAnimated ? (
            <video
              src={props.src}
              autoPlay
              controls={false}
              loop
              muted // otherwise chrome won't play the video without user interaction
              className="w-full h-full object-cover"
            />
          ) : (
            <img src={props.src} className="w-full h-full object-cover" />
          )}

          <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="backdrop-blur-md backdrop-brightness-90 fixed top-0 left-0 right-0 bottom-0 grid place-items-center overflow-y-auto p-24">
            <Dialog.Content className="min-w-full bg-neutral-200 dark:bg-neutral-800 rounded-xl p-12">
              {/* TODO: Support for animated content */}
              {/* Also, don't mute the video. The user needs to have interacted to show this, so audio will work. */}
              <img src={props.src} className="w-1/3" loading="lazy" />

              <Dialog.Close
                aria-label="Close"
                className="absolute top-28 right-28"
              >
                <IconX className="text-neutral-800 dark:text-neutral-300" />
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Author Information */}
      <span className="absolute bottom-4 left-4 flex gap-4">
        <div className="flex flex-col items-start gap-2">
          <span className="font-semibold">{props.name}</span>

          <span className="text-xs font-semibold flex gap-1.5">
            <img src={props.author.avatar} className="w-4 h-4 rounded-full" />
            <span>{props.author.name}</span>

            <span className="before:content-[''] before:bg-current before:w-1 before:h-1 before:block before:rounded-full flex items-center gap-1">
              {Math.floor(Math.random() * 10_000).toLocaleString()} Views
            </span>
          </span>
        </div>
      </span>

      {/* Heart Icon */}
      <div className="absolute bottom-8 right-4 flex items-center gap-2">
        <span>{Math.floor(Math.random() * 5_000).toLocaleString()}</span>

        <button
          className={`hover:bg-neutral-600 hover:bg-opacity-30 rounded-full p-2 ${
            isLiked ? 'text-red-500' : 'text-current'
          }`}
          onClick={() => setLiked(!isLiked)}
        >
          <IconHeart
            // size="28"
            fill={isLiked ? 'currentColor' : 'transparent'}
          />
        </button>
      </div>
    </div>
  );
}
