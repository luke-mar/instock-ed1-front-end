import "./WarehouseDetails.scss";

const WarehouseDetails = () => {
    return (
        <section className="warehouseDetails">
            <div className="warehouseDetails__header-container">
                <div>
                    <button>Back</button>
                    <h3>Warehouse Location</h3>
                </div>
                <div>
                    <button>edit</button>
                </div>
            </div>
            <div className="warehouseDetails__description-container">
                Description Container
                <div>Address</div>
                <div>
                    <p>contact</p>
                    <p>info</p>
                </div>
            </div>
            <div className="warehouseDetails__category-container">
                <p>Inventory</p>
                <p>Category</p>
                <p>Status</p>
                <p>Quantity</p>
                <p>Actions</p>
            </div>
            <div className="warehouseDetails__inventory-container">
                <p>television</p>
                <p>electronics</p>
                <p>in stock</p>
                <p>500</p>
                <div>
                    <button>delete</button>
                    <button>edit</button>
                </div>
            </div>
        </section>
    );
};

export default WarehouseDetails;
