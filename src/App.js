import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Warehouses from "./pages/Warehouses/Warehouses";
import Footer from "./components/Footer/Footer";
import InventoryList from "./components/InventoryList/InventoryListG";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import WarehouseList from "./components/WarehouseList/WarehouseListG";
import AddInventory from "./components/AddInventory/AddInventory";
import EditInventory from "./components/EditInventory/EditInventory";

function App() {
    return (
        <>
            <Header />
            <div className="all">
                <Routes>
                    <Route path="/" element={<WarehouseList />} />
                    <Route path="/warehouses" element={<WarehouseList />} />
                    <Route path="/warehouses/:id" element={<WarehouseDetails />} />
                    <Route path="/addwarehouse" element={<AddWarehouse />} />
                    <Route path="/inventories" element={<InventoryList />} />
                    <Route path="/inventories/:id" element={<InventoryList />} />
                    <Route path="/addinventory" element={<AddInventory />} />
                    <Route path="/editinventory" element={<EditInventory />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
