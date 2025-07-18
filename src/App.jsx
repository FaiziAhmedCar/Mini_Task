import React from 'react';
import ProductTable from './components/ProductTable';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="p-6">
      <Nav />
      <ProductTable />
    </div>
  );
};

export default App;
