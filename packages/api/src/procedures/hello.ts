import { procedure } from '../trpc';

export default procedure.query(({ ctx }) => {
  return new Promise((resolve, reject) => {
    ctx.resHeaders.set('amog', Math.random() > 0.5 ? 'impostor' : 'crewmate');
    ctx.resHeaders.set('Set-Cookie', 'kms=yes')
    setTimeout(Math.random() > 0.5 ? resolve : reject, 800);
  });
});
