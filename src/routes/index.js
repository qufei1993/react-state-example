import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import Todos from '../pages/todos';
import Home from '../pages/home';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
