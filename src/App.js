import AppProviders from './contexts';
import ToggleTheme from './components/ToggleTheme';
import './App.css';

const App = () => (
  <AppProviders>
    <ToggleTheme />
  </AppProviders>
);

export default App;
