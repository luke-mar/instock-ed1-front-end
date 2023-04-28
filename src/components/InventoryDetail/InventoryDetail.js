import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";

const InventoryDetail = () => {
    return(
        
        <section className="inventoryDetail">
            <div className="inventoryDetail__header-container">
                <div className="inventoryDetail__header-location-container">
                    <button className="inventoryDetail__header-location-back-button"> <img src={backArrow} alt="" /> </button>
                    <h1 className="inventoryDetail__header-location">
                        Television
                    </h1>
                </div>
                <div className="inventoryDetail__header-edit-button-container">
                    <button className="warehouseDetails__header-location-edit-button"> <img src={edit} alt="edit icon" />  Edit</button>
                </div>
            </div>
            <div className="inventoryDetail__description-container">
                <div className="inventoryDetail__description-address">
                    <h4 className="warehouseDetails__description-address-subheader">ITEM DESCRIPTION:</h4>
                    <p className="warehouseDetails__description-contact-info">This 50", 4K LED TV provides a crystal-clear picture and vivid colors</p>
                    <h4>CATEGORY:</h4>
                    <p className="warehouseDetails__description-contact-info">Electronics</p>
                </div>
                <div className="warehouseDetails__contact-container">
                    <div className="warehouseDetails__contact-container-info">
                    <h4 className="warehouseDetails__description-address-subheader">STATUS</h4>
                    <p className="warehouseDetails__description-contact-info">IN STOCK</p>
                    <h4>WAREHOUSE:</h4>
                    <p className="warehouseDetails__description-contact-info">Washington</p>
                    </div>
                    <div className="warehouseDetails__contact-container-info">
                        <h4 className="warehouseDetails__description-address-subheader">QUANTITY</h4>
                        <p className="warehouseDetails__description-contact-info">500</p>
                    </div>
                </div>
            </div>
            
        </section>
        
    )
}
export default InventoryDetail;