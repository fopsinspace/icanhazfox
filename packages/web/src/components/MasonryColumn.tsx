import Image, { type ImageProps } from './image/Image';

export default function MasonryColumn({ images }: { images: ImageProps[] }) {
  return (
    <div className="flex flex-col gap-6">
      {images.map((image) => (
        <Image key={image.id} {...image} />
      ))}
    </div>
  );
}
