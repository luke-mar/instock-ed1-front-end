import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TestDelete from "./components/TesteDelete/TestDelete";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
    return (
        <>

                {/* <DeleteWarehouses/> */}
                <WarehouseDetails />
                <TestDelete />

        </>
    );
}

export default App;
