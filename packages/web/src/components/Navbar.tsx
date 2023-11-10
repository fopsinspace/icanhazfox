import { IconSearch, IconUserCircle } from "@tabler/icons-react";

const pages: Record<string, string[]> = {
  Browse: ["/", "/post/*"],
};

export const navbarHeight = "16";

export default function Navbar() {
  return (
    <header
      className={`z-50 flex h-${navbarHeight} sticky top-0 items-center justify-between bg-neutral-900 p-12 shadow-lg`}
    >
      <h1 className="font-display text-3xl font-bold">
        {Object.keys(pages).find((name) =>
          pages[name].some((path) => location.pathname.match(path)),
        )}
      </h1>

      <div className="flex items-center gap-x-8">
        <IconSearch />
        <IconUserCircle />
      </div>
    </header>
  );
}
