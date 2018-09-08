// wrapper
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => import('./RkTabs1.jsx')
});