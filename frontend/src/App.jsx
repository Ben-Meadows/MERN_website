import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Valentines } from './pages/Valentines';
import ProtectedRoute from './components/ProtectedRoute';
import YesPage from './pages/YesPage'; // Import YesPage

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
        <Route path="/yes" element={
          <ProtectedRoute>
            <YesPage /> {/* Protected YesPage Route */}
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
