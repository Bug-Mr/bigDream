import mButton from './button';
import mInput from './input';

const install = (app) => {
  app.use(mButton);
  app.use(mInput);
};
const bigDream = {
  install,
};
export { mButton, mInput };

export default bigDream;
