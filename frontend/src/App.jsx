import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Valentines } from './pages/Valentines';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/valentines" element={
          <ProtectedRoute>
            <Valentines />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

