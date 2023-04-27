import "./WarehouseDetails.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";

const WarehouseDetails = () => {
    const [warehouse, setWarehouse] = useState([0]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/warehouses")
            .then((response) => {
                setWarehouse(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className="warehouseDetails">
            <div className="warehouseDetails__header-container">
                <div className="warehouseDetails__header-location-container">
                    <button className="warehouseDetails__header-location-back-button"> <img src={backArrow} alt="" /> </button>
                    <h1 className="warehouseDetails__header-location">
                        {warehouse[0].warehouse_name}
                    </h1>
                </div>
                <div className="warehouseDetails__header-edit-button-container">
                    <button className="warehouseDetails__header-location-edit-button"> <img src={edit} alt="edit icon" />  Edit</button>
                </div>
            </div>
            <div className="warehouseDetails__description-container">
                <div className="warehouseDetails__description-address">
                    <h4 className="warehouseDetails__description-address-subheader">WAREHOUSE ADDRESS:</h4>
                    <p className="warehouseDetails__description-contact-info">{warehouse[0].address}</p>
                    <p className="warehouseDetails__description-contact-info">{warehouse[0].city}, {warehouse[0].country}</p>
                </div>
                <div className="warehouseDetails__contact-container">
                    <div className="warehouseDetails__contact-container-info">
                    <h4 className="warehouseDetails__description-address-subheader">CONTACT NAME:</h4>
                    <p className="warehouseDetails__description-contact-info">{warehouse[0].contact_name}</p>
                    <p className="warehouseDetails__description-contact-info">{warehouse[0].contact_position}</p>
                    </div>
                    <div className="warehouseDetails__contact-container-info">
                        <h4 className="warehouseDetails__description-address-subheader">CONTACT INFORMATION:</h4>
                        <p className="warehouseDetails__description-contact-info">{warehouse[0].contact_phone}</p>
                        <p className="warehouseDetails__description-contact-info">{warehouse[0].contact_email}</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default WarehouseDetails;
