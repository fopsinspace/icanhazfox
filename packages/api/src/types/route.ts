import type { EventHandler } from 'h3';

interface Route {
  path: `/${string}`;
  handler: EventHandler;
}

export { type Route };
