import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Warehouses from "./pages/Warehouses/Warehouses";
import InventoryDetail from "./components/InventoryDetail/InventoryDetail";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Warehouses />} />
                <Route path="/warehouses" element={<Warehouses />} />
                <Route path="/warehouses/:id" element={<WarehouseDetails />} />
                {/* <Route path="/inventories" element={<InventoryList />} /> */}
                <Route path="/inventories/:id" element={<InventoryDetail />}/>
            </Routes>
            {/* <Footer /> */}
            
        </>
    );
}

export default App;
