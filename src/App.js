import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteWarehouses from './components/DeleteWarehouses/DeleteWarehouses';
import TestDelete from './components/TesteDelete/TestDelete';

function App() {
  return (
    <>
      <header>
        {/* <DeleteWarehouses/> */}
     <TestDelete/>
      </header>
    </>
  );
}

export default App;
