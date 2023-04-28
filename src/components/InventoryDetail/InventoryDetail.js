import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./InventoryDetail.scss";


const InventoryDetail = () => {
    const [inventory, setInventory] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/inventories/${params.id}`)
            .then((response) => {
                console.log(response.data);
                setInventory(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [params.id]);

    return (
        <section className="inventoryDetail">
            <div className="inventoryDetail__header-container">
                <div className="inventoryDetail__header-location-container">
                    <button className="inventoryDetail__header-back-button">
                        <img src={backArrow} alt="" />
                    </button>
                    <h1 className="inventoryDetail__item">
                        {inventory.item_name}
                    </h1>
                </div>
                <div className="inventoryDetail__header-edit-button-container">
                    <button className="warehouseDetails__header-location-edit-button">
                        {" "}
                        <img src={edit} alt="edit icon" />
                        Edit
                    </button>
                </div>
            </div>
            <div className="inventoryDetail__description-container">
                <div className="inventoryDetail__description-address">
                    <h4 className="inventoryDetail__subheader">
                        ITEM DESCRIPTION:
                    </h4>
                    <p className="inventoryDetail__description">
                        {inventory.description}
                    </p>
                    <h4 className="inventoryDetail__subheader">CATEGORY:</h4>
                    <p className="inventoryDetail__category">
                        {inventory.category}
                    </p>
                </div>
                <div className="warehouseDetails__contact-container">
                    <div className="warehouseDetails__contact-container-info">
                        <h4 className="warehouseDetails__subheader">STATUS</h4>
                        <p className="warehouseDetails__status">
                            {inventory.status}
                        </p>
                        <h4 className="warehouseDetails__subheader">
                            WAREHOUSE:
                        </h4>
                        <p className="warehouseDetails__warehouse-name">
                            {inventory.warehouse_name}
                        </p>
                    </div>
                    <div className="warehouseDetails__contact-container-info">
                        <h4 className="warehouseDetails__subheader">
                            QUANTITY
                        </h4>
                        <p className="warehouseDetails__quantity">
                            {inventory.quantity}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default InventoryDetail;
