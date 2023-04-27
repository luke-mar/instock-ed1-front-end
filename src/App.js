import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import WarehouseList from './components/WarehouseList';

function App() {
  return (
    <body>
      <header>
        Hello World!
      </header>
      <main>
        <BrowserRouter>
        <Routes>
          <Route path="/warehouses" element={<WarehouseList />} />
          </Routes>
        </BrowserRouter>
        </main>
    </body>
  
  );
}

export default App;
