import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteWarehouses from './componets/DeleteWarehouses/DeleteWarehouses';
import TestDelete from './componets/TesteDelete/TestDelete';

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
