import * as Dialog from '@radix-ui/react-dialog';
import { IconHeart, IconX } from '@tabler/icons-react';
import { useState } from 'react';

export default function Image(props: { image: string }) {
  const [isLiked, setLiked] = useState<boolean>(false);

  return (
    <div className="w-full h-[30rem] relative p-4 rounded-2xl overflow-hidden">
      <Dialog.Root>
        <Dialog.Trigger>
          <img
            src={props.image}
            className="absolute w-full h-full top-0 left-0 object-cover"
          />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="backdrop-blur-md backdrop-brightness-90 fixed top-0 left-0 right-0 bottom-0 grid place-items-center overflow-y-auto p-24">
            <Dialog.Content className="min-w-full bg-neutral-200 dark:bg-neutral-800 rounded-xl p-12">
              <img src={props.image} className="w-1/3" loading="lazy" />
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
        <img
          src="https://placehold.co/64x64.png"
          className="rounded-full w-14 h-14 row-span-2"
        />

        <div className="flex flex-col items-start gap-2">
          <span className="font-semibold">Some Author</span>
          <div className="text-xs font-semibold">
            <span className="py-0.5 px-2 bg-green-500 text-white rounded-xl">
              SFW
            </span>
          </div>
        </div>
      </span>

      {/* Heart Icon */}
      <button
        className={`absolute bottom-4 right-4 p-2 hover:bg-neutral-600 hover:bg-opacity-30 rounded-full ${
          isLiked ? 'text-red-500' : 'text-current'
        }`}
        onClick={() => setLiked(!isLiked)}
      >
        <IconHeart fill={isLiked ? 'currentColor' : 'transparent'} />
      </button>
    </div>
  );
}
