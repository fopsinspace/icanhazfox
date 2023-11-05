import * as Dialog from '@radix-ui/react-dialog';
import { IconX } from '@tabler/icons-react';

export default function Image() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="w-full h-[30rem] bg-zinc-100 rounded-xl" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="backdrop-blur-md backdrop-brightness-90 fixed top-0 left-0 right-0 bottom-0 grid place-items-center overflow-y-auto p-24">
          <Dialog.Content className="min-w-full bg-white rounded-xl p-12">
            <img src="/test.jpg" className="w-1/3" loading="lazy" />
            <Dialog.Close
              aria-label="Close"
              className="absolute top-28 right-28"
            >
              <IconX />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
