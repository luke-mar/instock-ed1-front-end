import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import WarehouseList from './components/WarehouseList';
import Header from './components/Header';
import TestDelete from './components/TesteDelete/TestDelete';


function App() {
  return (
    <>
      <Header />
      <Route path="/warehouses" element={<WarehouseList />} />
        {/* <DeleteWarehouses/> */}
     <TestDelete/>
    </>

  );
}

export default App;
