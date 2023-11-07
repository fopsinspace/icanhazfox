import { type ImageProps } from './Image';
import Comment, { type CommentProps } from '../Comment';
import * as Dialog from '@radix-ui/react-dialog';
import * as Form from '@radix-ui/react-form';
import { IconHeart, IconAlbum, IconDownload, IconShare3, IconFlag3, IconX } from '@tabler/icons-react';
import Tag from '../Tag';

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
    <div className="bg-neutral-200 dark:bg-neutral-800 px-10 py-6 flex flex-col relative items-start text rounded-2xl top-36 xl:max-w-screen-lg">
      <div className="flex justify-between items-start w-full mb-4">
        <h3 className="font-medium text-lg">Viewing post by {props.author.name}</h3>
        <Dialog.Close aria-label="Close">
          <IconX className="text" />
        </Dialog.Close>
      </div>
      <div>
        <div className="flex flex-col justify-between h-full">
          {props.isAnimated ? (
            <video src={props.src} autoPlay controls loop className="rounded-lg" />
          ) : (
            <img src={props.src} loading="lazy" className="mb-2 rounded-lg" />
          )}

          <div className="mt-4">
            <span className="text-xl font-medium mt-auto">{props.caption}</span>
            <span className="block">
              {new Date().toLocaleDateString(navigator?.language ?? 'en-GB', {
                day: 'numeric',
                weekday: 'short',
                month: 'long',
                // TODO: Setup post date
                year: new Date().getFullYear() != 2023 ? 'numeric' : undefined,
              })}
            </span>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
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
              ].map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-6 flex gap-x-4 items-center">
              <img src={props.author.avatar} className="w-14 h-14 rounded-full" />
              <div className="flex flex-col gap-y-2">
                <span className="font-bold">{props.author.name}</span>
                <button className="w-fit bg-neutral-300 text-black px-3 py-1 rounded-full font-medium text-sm select-none">
                  Follow
                </button>
              </div>
            </div>

            <hr className="w-full border-neutral-600 my-4" />

            <div className="flex justify-between">
              <div>
                {/* Like Button */}
                <button
                  className={`hover:bg-neutral-600 hover:bg-opacity-30 rounded-full p-2 ${
                    isLiked ? 'text-red-500 animate-heart' : 'text-current'
                  }`}
                  onClick={() => setLiked((liked) => !liked)}
                >
                  <IconHeart fill={isLiked ? 'currentColor' : 'transparent'} />
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

        <div className="w-full flex flex-col items-start gap-4">
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

          <hr className="w-full border-neutral-600" />

          {/* Comments */}
          <div className="w-full">
            <h3 className="font-bold text-xl">50 Comments</h3>

            <div className="flex flex-col gap-4 mt-6">
              {[...comments, ...comments].map((comment, index) => (
                <Comment key={index} {...comment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
