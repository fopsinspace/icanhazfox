import { IconSearch, IconUserCircle } from '@tabler/icons-react';
import Gallery from '../components/Gallery';

export default function HomePage() {
  return (
    <main className="p-12">
      <header className="flex items-center justify-between mb-8">
        <h1 className="font-bold font-display text-3xl">Browse</h1>
        <div className="flex items-center gap-x-8">
          <IconSearch />
          <IconUserCircle />
        </div>
      </header>
      <nav className="mb-12 flex items-center gap-x-4">
        <a
          href="#"
          className="bg-neutral-200 dark:bg-neutral-600 px-4 py-2 rounded-full font-medium border border-neutral-300 dark:border-neutral-700 select-none"
        >
          New
        </a>
        <a href="#">Following</a>
      </nav>

      <Gallery />
    </main>
  );
}