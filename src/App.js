import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import TestDelete from './components/TesteDelete/TestDelete';


function App() {
  return (
    <>
      <Header />
        {/* <DeleteWarehouses/> */}
     <TestDelete/>
    </>
  );
}

export default App;
