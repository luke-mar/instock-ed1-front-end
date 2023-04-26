import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteWarehouses from './componets/DeleteWarehouses';
import TesteDelete from './componets/TestDelete';

function App() {
  return (
    <>
      <header>
        {/* <DeleteWarehouses/> */}
        <TesteDelete/>
      </header>
    </>
  );
}

export default App;
