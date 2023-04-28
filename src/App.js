import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import WarehouseList from "./components/WarehouseList";
import InventoryList from "./components/InventoryList";
import Header from "./components/Header";
import TestDelete from "./components/TesteDelete/TestDelete";

function App() {
    return (
        <>
            <Header />
            <Routes>
              <Route path="/warehouses" element={<WarehouseList />} />
              <Route path="/inventories" element={<InventoryList />} />
            </Routes>
            {/* <DeleteWarehouses/> */}
        </>
    );
}

export default App;
