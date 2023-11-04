import { createServer } from 'node:http';
import { createApp, eventHandler, toNodeListener } from 'h3';
import { readdirSync } from 'node:fs';
import type { Route } from './types/route.js';
import logger from './utils/logger.js';

const app = createApp();
const mainLogger = logger.child({ module: 'main' });

await readdirSync('routes').reduce(async (prev, route) => {
  await prev;

  try {
    const routeInstance: Route = (await import(`./routes/${route}`)).default;
    app.use(routeInstance.path, routeInstance.handler);
    mainLogger.info(`Loaded route ${route}.`);
  } catch (e) {
    mainLogger.error(e, `Failed to load route ${route}.`);
  }
}, Promise.resolve());

const port = process.env.port || 3000;

createServer(toNodeListener(app)).listen(port);

mainLogger.info(`http://localhost:${port}`);
