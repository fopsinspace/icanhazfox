import { Hono } from 'hono';
import { trpc } from './utils/trpc';

const app = new Hono()

app.get('/', (c) => {
  const r2 = c.env?.R2;
  if (!r2) return c.text('r2 not detected');
  return c.text('ok')
})

app.get('/upload', async (c) => {
  const req = c.req.raw;
  const cookies = req.headers.get('Cookie');
  console.log(cookies)
  if (!cookies) return c.status(403)
  await trpc.cookieValidate.query({header: cookies})
  return c.text('ok')
})

export default app
