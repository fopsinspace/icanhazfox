import { eventHandler } from 'h3';
import type { Route } from '../types/route.js';

export default {
  path: '/',
  handler: eventHandler(() => 'Hello world!'),
} satisfies Route;
