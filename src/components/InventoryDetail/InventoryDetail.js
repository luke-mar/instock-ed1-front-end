import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";

const InventoryDetail = () => {
    return(
        
        <section className="inventoryDetail">
            <div className="inventoryDetail__header-container">
                <div className="inventoryDetail__header-location-container">
                    <button className="inventoryDetail__header-location-back-button"> <img src={backArrow} alt="" /> </button>
                    <h1 className="inventoryDetail__header-location">
                        Inventory Item
                    </h1>
                </div>
                <div className="warehouseDetails__header-edit-button-container">
                    <button className="warehouseDetails__header-location-edit-button"> <img src={edit} alt="edit icon" />  Edit</button>
                </div>
            </div>
            <div className="warehouseDetails__description-container">
                <div className="warehouseDetails__description-address">
                    <h4 className="warehouseDetails__description-address-subheader">WAREHOUSE ADDRESS:</h4>
                    <p className="warehouseDetails__description-contact-info">{warehouse.address}</p>
                    <p className="warehouseDetails__description-contact-info">{warehouse.city}, {warehouse.country}</p>
                </div>
                <div className="warehouseDetails__contact-container">
                    <div className="warehouseDetails__contact-container-info">
                    <h4 className="warehouseDetails__description-address-subheader">CONTACT NAME:</h4>
                    <p className="warehouseDetails__description-contact-info">{warehouse.contact_name}</p>
                    <p className="warehouseDetails__description-contact-info">{warehouse.contact_position}</p>
                    </div>
                    <div className="warehouseDetails__contact-container-info">
                        <h4 className="warehouseDetails__description-address-subheader">CONTACT INFORMATION:</h4>
                        <p className="warehouseDetails__description-contact-info">{warehouse.contact_phone}</p>
                        <p className="warehouseDetails__description-contact-info">{warehouse.contact_email}</p>
                    </div>
                </div>
            </div>
            
        </section>
        
    )
}
export default InventoryDetail;