import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Warehouses from "./pages/Warehouses/Warehouses";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Warehouses />} />
                <Route path="/warehouses" element={<Warehouses />} />
                <Route path="/warehouses/:id" element={<WarehouseDetails />} />
                {/* <Route path="/inventories" element={<InventoryList />} /> */}
                {/* the above route is to be used when we have the inventory list */}
            </Routes>
            {/* <Footer /> */}
            {/* <WarehouseDetails /> */}
        </>
    );
}

export default App;
