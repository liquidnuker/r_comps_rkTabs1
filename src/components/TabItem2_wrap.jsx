// wrapper
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => import('./TabItem2.jsx')
});