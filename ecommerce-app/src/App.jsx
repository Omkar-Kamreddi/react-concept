import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen text-gray-800 bg-gray-50">

      {/* Toast */}
      <Toaster position="top-center" />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="px-4 py-6 mx-auto max-w-7xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;