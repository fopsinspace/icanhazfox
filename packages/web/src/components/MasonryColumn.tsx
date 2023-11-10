import Post, { type PostProps } from "./Post";

export default function MasonryColumn({ images }: { images: PostProps[] }) {
  return (
    <div className="flex flex-col gap-6">
      {images.map((image) => (
        <Post key={image.id} {...image} />
      ))}
    </div>
  );
}
