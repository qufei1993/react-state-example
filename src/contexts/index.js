import { ThemeProvider } from './ThemeContext';

const AppProviders = ({ children }) => {
  return <ThemeProvider>
    { children }
  </ThemeProvider>
}
export default AppProviders;
