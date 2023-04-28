import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TestDelete from './components/TesteDelete/TestDelete';
import AddWarehouse from './components/AddWarehouse/AddWarehouse';

function App() {
  return (
    <>
      <header>
        {/* <DeleteWarehouses/> */}
        < AddWarehouse />
     <TestDelete/>
      </header>
    </>
  );
}

export default App;
