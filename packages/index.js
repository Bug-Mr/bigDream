import tButton from './button';
import tInput from './input';

const install = (app) => {
  app.use(tButton);
  app.use(tInput);
};
const baseDmui = {
  install,
};
export { tButton, tInput };

export default baseDmui;
