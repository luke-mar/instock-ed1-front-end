import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Warehouses from "./pages/Warehouses/Warehouses";
import InventoryDetail from "./components/InventoryDetail/InventoryDetail";
import Footer from "./components/Footer/Footer";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";


function App() {
    return (
        <>
            <Header />
            <div className="all">
                <Routes>  
                    <Route path="/" element={<Warehouses />} />
                    <Route path="/warehouses" element={<Warehouses />} />
                    <Route path="/warehouses/:id" element={<WarehouseDetails />} />
                    {/* <Route path="/inventories/:id" element={<InventoryList />} /> */}
                    {/* the above route is to be used when we have the inventory list */}
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
