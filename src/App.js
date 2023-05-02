import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
// import Warehouses from "./pages/Warehouses/Warehouses";
import Footer from "./components/Footer/Footer";
import InventoryList from "./components/InventoryList/InventoryListG";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import { useState } from "react";
import WarehouseList from "./components/WarehouseList/WarehouseListG";
import AddInventory from "./components/AddInventory/AddInventory";
import EditInventory from "./components/EditInventory/EditInventory";
import InventoryDetail from "./components/InventoryDetail/InventoryDetail";

function App() {
    const [warehouseToEdit, setWarehouseToEdit] = useState(null);
    const [inventoryToEdit, setInventoryToEdit] = useState(null);
    const [editCount, setEditCount] = useState(0);
    function changeEdit(){
        setEditCount(editCount+1);
    }
    return (
        <>
            <Header />
            <div className="all">
                <Routes>
                    <Route path="/" element={<WarehouseList setWarehouseToEdit={setWarehouseToEdit}/>} />
                    <Route path="/warehouses" element={<WarehouseList setWarehouseToEdit={setWarehouseToEdit} editCount={editCount}/>} />
                    <Route path="/warehouses/:id" element={<WarehouseDetails setWarehouseToEdit={setWarehouseToEdit} setEditCount={changeEdit} editCount={editCount}/>} />
                    <Route path="/addwarehouse" element={<AddWarehouse />} />
                    <Route path="/editwarehouse" element={<EditWarehouse warehouseToEdit={warehouseToEdit}/>} />
                    <Route path="/editwarehouse/:id" element={<EditWarehouse warehouseToEdit={warehouseToEdit} setEditCount={changeEdit}/>} />

                    <Route path="/inventories" element={<InventoryList setInventoryToEdit={setInventoryToEdit} setEditCount={changeEdit} editCount={editCount}/>} />
                    <Route path="/inventories/:id" element={<InventoryDetail />} />
                    <Route path="/addinventory" element={<AddInventory setEditCount={changeEdit}/>} />
                    <Route path="/inventories/:id/editinventory" element={<EditInventory setInventoryToEdit={inventoryToEdit} setEditCount={changeEdit}/>} />

                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
