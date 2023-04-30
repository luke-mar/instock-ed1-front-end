import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Warehouses from "./pages/Warehouses/Warehouses";
import Footer from "./components/Footer/Footer";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import { useState } from "react";

function App() {
    const [warehouseToEdit, setWarehouseToEdit] = useState();
    console.log("Warehouse to Edit: ",warehouseToEdit);
    return (
        <>
            <Header />
            <div className="all">
                <Routes>  
                    <Route path="/" element={<Warehouses setWarehouseToEdit={setWarehouseToEdit}/>} />
                    <Route path="/warehouses" element={<Warehouses />} />
                    <Route path="/warehouses/:id" element={<WarehouseDetails />} />
                    <Route path="/editwarehouse" element={<EditWarehouse warehouseToEdit={warehouseToEdit}/>} />

                    {/* <Route path="/inventories/:id" element={<InventoryList />} /> */}
                    {/* the above route is to be used when we have the inventory list */}
                </Routes>
            </div>
            <Footer />
            {/* <WarehouseDetails /> */}
        </>
    );
}

export default App;
