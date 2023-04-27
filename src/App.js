import "./App.css";
import { Routes, Route } from "react-router-dom";
import WarehouseList from "./components/WarehouseList";
import Header from "./components/Header";
import TestDelete from "./components/TesteDelete/TestDelete";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";


function App() {
    return (
        <>

            <Header />
            <Routes>
              <Route path="/warehouses" element={<WarehouseList />} />
            </Routes>
            {/* <DeleteWarehouses/> */}
            <TestDelete />
            <WarehouseDetails />

        </>
    );
}

export default App;
