import "./WarehouseDetails.scss";

const WarehouseDetails = ()=>{
    return(
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
            <div className="warehouseDetails__description-container">Description Container</div>
            <div className="warehouseDetails__category-container">Subcategory container</div>
            <div className="warehouseDetails__inventory-container">Map container</div>
        </section>
    )

}

export default WarehouseDetails;