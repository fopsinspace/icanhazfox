import { type PostProps } from "./Post";
import MasonryColumn from "./MasonryColumn";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { posts } from "../data";

export default function Gallery() {
  const dimensions = useWindowDimensions();
  const screenW = dimensions?.width || Infinity;

  let totalColumns: number;
  if (screenW > 1024) totalColumns = 4;
  else if (screenW > 768) totalColumns = 3;
  else if (screenW > 640) totalColumns = 2;
  else totalColumns = 1;

  const columnImages: PostProps[][] = Array.from(
    { length: totalColumns },
    (_, column) => posts.filter((_, index) => index % totalColumns == column),
  );

  return (
    <div className="grid h-full grid-cols-1 gap-x-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {columnImages.map((column, index) => {
        if (screenW > 640 || (index == 0 && screenW != Infinity)) {
          return <MasonryColumn key={index} images={column} />;
        } else {
          return null;
        }
      })}
    </div>
  );
}
