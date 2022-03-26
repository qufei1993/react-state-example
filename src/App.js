import AppProviders from './contexts';
import Todos from './components/todos';

import './App.css';

const App = () => (
  <AppProviders>
    <Todos />
  </AppProviders>
);

export default App;
