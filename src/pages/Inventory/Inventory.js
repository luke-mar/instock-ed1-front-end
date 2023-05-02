import { Route, Routes } from "react-router-dom";
import InventoryDetail from "../../components/InventoryDetail/InventoryDetail";

const Inventory = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/inventories" element={<InventoryList />} /> */}
                <Route path="/inventories/:id" element={<InventoryDetail />}/>
            </Routes>
        </>
    );
};
export default Inventory;
