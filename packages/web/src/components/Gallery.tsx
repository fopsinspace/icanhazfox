import Image from './Image';

export default function Gallery() {
  return (
    <div className="h-full flex gap-x-12">
      <div className="w-1/3 flex flex-col gap-y-12">
        <Image image="test.jpg" />
      </div>
      <div className="w-1/3 flex flex-col gap-y-12"></div>
      <div className="w-1/3"></div>
    </div>
  );
}
