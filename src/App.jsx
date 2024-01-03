import React from 'react';
import ProductPage from './components/productPage';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {/* Product Page */}
      <div className="max-w-6xl mx-auto flex items-center justify-center min-h-screen mt-0">
        <ProductPage />
      </div>
      <Footer />
    </div>
  );
};

export default App;
