import { Route, Routes, } from "react-router-dom";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
// import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";


const Warehouses = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<WarehouseList />} />
                <Route path="/warehouses" element={<WarehouseList />} />
                {/* <Route
                    path="/warehouses/:id"
                    element={<WarehouseDetails />}
                /> */}
            </Routes>
        </>
    );
};

export default Warehouses;
