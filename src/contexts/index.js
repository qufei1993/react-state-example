import { TodoProvider } from './TodoContext';

const AppProviders = ({ children }) => {
  return <TodoProvider>
    { children }
  </TodoProvider>
}

export default AppProviders;