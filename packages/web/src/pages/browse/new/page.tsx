import Gallery from "../../../components/Gallery";

export default function BrowseNewPage() {
  return (
    <main>
      <nav className="mb-12 flex items-center gap-x-4">
        <a
          href="/browse/new"
          className="select-none rounded-full border border-neutral-300 bg-neutral-200 px-4 py-2 font-medium dark:border-neutral-700 dark:bg-neutral-600"
        >
          New
        </a>
        <a href="/browse/following">Following</a>
      </nav>

      <Gallery />
    </main>
  );
}
