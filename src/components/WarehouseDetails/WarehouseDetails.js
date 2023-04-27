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
                    <button className="warehouseDetails__header-location-edit-button"> <img src={edit} alt="" />  Edit</button>
                </div>
            </div>
            <div className="warehouseDetails__description-container">
                <div>
                    <p>WAREHOUSE ADDRESS:</p>
                    <p>{warehouse[0].address}</p>
                    <p>{warehouse[0].city}, {warehouse[0].country}</p>
                </div>
                <div className="warehouseDetails__contact-container">
                    <div>
                    <p>CONTACT NAME:</p>
                    <p>{warehouse[0].contact_name}</p>
                    <p>{warehouse[0].contact_position}</p>
                    </div>
                    <div>
                        <p>CONTACT INFORMATION:</p>
                        <p>{warehouse[0].contact_phone}</p>
                        <p>{warehouse[0].contact_email}</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default WarehouseDetails;
