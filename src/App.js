import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TestDelete from './components/TesteDelete/TestDelete';
import SingleWarehouseInventory from './components/SingleWarehouseInventory/SingleWarehouseInventory';

function App() {

  return (
    <>
      <SingleWarehouseInventory />
    </>
  );
}

export default App;
