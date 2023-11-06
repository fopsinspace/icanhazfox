import { type ImageProps } from './Image';
import Comment, { type CommentProps } from '../Comment';
import * as Dialog from '@radix-ui/react-dialog';
import * as Form from '@radix-ui/react-form';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { IconHeart, IconAlbum, IconDownload, IconShare3, IconFlag3, IconX } from '@tabler/icons-react';

export default function ImageDialog(
  props: ImageProps & { likeState: [boolean, React.Dispatch<React.SetStateAction<boolean>>] },
) {
  const [isLiked, setLiked] = props.likeState;

  const comments: CommentProps[] = [
    {
      author: {
        name: 'User123',
        avatar: 'https://placehold.co/32x32.png',
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      created: new Date(),
    },
    {
      author: {
        name: 'JaneDoe',
        avatar: 'https://placehold.co/32x32.png',
      },
      comment: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      created: new Date(),
    },
    {
      author: {
        name: 'JohnSmith',
        avatar: 'https://placehold.co/32x32.png',
      },
      comment:
        'Suspendisse potenti. Fusce ullamcorper, ipsum a euismod aliquet, ligula mi tincidunt ex, vel malesuada velit quam at est.',
      created: new Date(),
    },
  ];

  return (
    <Dialog.Content className="bg-neutral-200 dark:bg-neutral-800 p-8 flex relative gap-6 items-start h-full w-full text">
      <div className="flex flex-col justify-between h-full">
        {props.isAnimated ? <video src={props.src} autoPlay controls loop /> : <img src={props.src} loading="lazy" />}

        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span>
              {new Date().toLocaleDateString(navigator?.language ?? 'en-GB', {
                day: 'numeric',
                weekday: 'short',
                month: 'long',
                // TODO: Setup post date
                year: new Date().getFullYear() != 2023 ? 'numeric' : undefined,
              })}
            </span>

            <span>{props.views.toLocaleString('en-US', { notation: 'compact' })} Views</span>
          </div>

          <hr className="w-full border-neutral-600" />

          <div className="flex justify-between">
            <div>
              {/* Like Button */}
              <button
                className={`hover:bg-neutral-600 hover:bg-opacity-30 rounded-full p-2 ${
                  isLiked ? 'text-red-500 animate-heart' : 'text-current'
                }`}
                onClick={() => setLiked(!isLiked)}
              >
                <IconHeart
                  // size="28"
                  fill={isLiked ? 'currentColor' : 'transparent'}
                />
              </button>

              {/* Save to Collection */}
              <button
                className={`hover:bg-neutral-600 hover:bg-opacity-30 rounded-full p-2 ${
                  isLiked ? 'text-indigo-500 animate-heart' : 'text-current'
                }`}
              >
                <IconAlbum />
              </button>

              {/* Download Button */}
              <button className="hover:bg-neutral-600 hover:bg-opacity-30 rounded-full p-2 active:text-yellow-500">
                <IconDownload />
              </button>
            </div>

            <div>
              {/* Share Button */}
              <button className="hover:bg-neutral-600 hover:bg-opacity-30 rounded-full p-2 active:text-teal-500">
                <IconShare3 />
              </button>

              {/* Report Button */}
              <button className="hover:bg-neutral-600 hover:bg-opacity-30 rounded-full p-2 active:text-red-500">
                <IconFlag3 />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ScrollArea.Root type="always" className="overflow-hidden h-full">
        <ScrollArea.Viewport className="w-full h-full pr-4">
          <div className="flex flex-col items-start gap-4">
            <div>
              <span className="text-lg mt-auto">{props.caption}</span>
            </div>

            <hr className="w-full border-neutral-600" />

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {[
                'Nulla',
                'aliqua',
                'fugiat',
                'enim',
                'sunt',
                'tempor',
                'consectetur',
                'sint',
                'occaecat',
                'labore',
                'adipisicing',
                'magna',
              ].map((tag) => (
                <a
                  key={tag}
                  href={`/browse/tag/${tag}`}
                  className="lowercase bg-neutral-700 rounded-xl px-2 py-0.5 hover:bg-neutral-600"
                >
                  {tag}
                </a>
              ))}
            </div>

            <hr className="w-full border-neutral-600" />

            {/* Author Profile */}
            <div className="flex gap-4 w-full">
              <img src={props.author.avatar} className="rounded-full w-16 h-16" />
              <div className="grid">
                <span className="font-semibold text-lg">{props.author.name}</span>
                <span>Bio / Stats Here</span>
              </div>
            </div>

            <hr className="w-full border-neutral-600" />

            {/* Comments */}
            <div className="w-full">
              <h3 className="font-bold text-xl">50 Comments</h3>

              <Form.Root className="w-full mt-4">
                <Form.Field name="comment">
                  <Form.Control asChild>
                    <textarea
                      placeholder="Add a comment..."
                      onInput={(e) => {
                        e.currentTarget.style.height = '';
                        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                      }}
                      className="resize-none w-full min-h-fit p-2 bg-neutral-700 border border-neutral-500 rounded-lg outline-none overflow-hidden"
                      required
                      maxLength={255}
                    />
                  </Form.Control>

                  <Form.Message match="tooLong">Comment is too long</Form.Message>
                </Form.Field>

                <Form.Submit className="bg-neutral-700 rounded-xl py-2 px-4">Comment</Form.Submit>
                <span className="ml-4 inline-flex gap-2">
                  Posting as{' '}
                  <a className="flex gap-2 font-semibold items-center hover:underline" href={`/user/JohnDoe`}>
                    <img src="https://placehold.co/32x32" className="rounded-full w-6 h-6" />
                    <span>JohnDoe</span>
                  </a>
                </span>
              </Form.Root>

              <div className="flex flex-col gap-4 mt-6">
                {comments.map((comment, index) => (
                  <Comment key={index} {...comment} />
                ))}
              </div>
            </div>
          </div>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          orientation="vertical"
          className="rounded-full w-1 bg-neutral-700 flex select-none touch-none mt-4"
        >
          <ScrollArea.Thumb className="w-1 min-h-32 h-auto rounded-full bg-neutral-600 flex-1" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      <Dialog.Close aria-label="Close" className="absolute top-4 right-4">
        <IconX className="text" />
      </Dialog.Close>
    </Dialog.Content>
  );
}
