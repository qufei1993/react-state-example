import { Provider } from 'react-redux';

import store from './store';
import Routers from './routes';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Routers />
  </Provider>
);

export default App;
