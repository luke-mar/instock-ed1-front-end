import { Route, Routes, } from "react-router-dom";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import { useState } from "react";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";


const Warehouses = ({setWarehouseToEdit}) => {

    return (
        <>
            <Routes>
                <Route path="/" element={<WarehouseList setWarehouseToEdit={setWarehouseToEdit}/>} />
                <Route path="/warehouses" element={<WarehouseList setWarehouseToEdit={setWarehouseToEdit}/>} />
                <Route path="/warehouses/:id" element={<WarehouseDetails />}/>
            </Routes>
        </>
    );
};

export default Warehouses;
