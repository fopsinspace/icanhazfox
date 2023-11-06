import { procedure } from '../trpc';

export default procedure.query(() => {
  return new Promise((resolve, reject) => {
    setTimeout(Math.random() > 0.5 ? resolve : reject, 3000);
  });
});
