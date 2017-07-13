// wrapper
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => System.import('./RkTabs1.jsx')
});