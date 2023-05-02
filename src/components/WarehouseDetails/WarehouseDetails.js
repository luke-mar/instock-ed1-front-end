import "./WarehouseDetails.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit2-24px.svg";
import SingleWarehouseInventory from "../SingleWarehouseInventory/SingleWarehouseInventory";

const WarehouseDetails = ({setWarehouseToEdit, setEditCount, editCount}) => {
    const [warehouse, setWarehouse] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8080/warehouses/${params.id}`)
            .then((response) => {
                console.log(response.data);
                setWarehouse(response.data);
                setWarehouseToEdit(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [params.id]);

    return (
        <div className="total-container">
            <section className="warehouseDetails">
                <div className="warehouseDetails__header-container">
                    <div className="warehouseDetails__header-location-container">
                        <button className="warehouseDetails__header-location-back-button">
                            {" "}
                            <img
                                src={backArrow}
                                alt="going back icon"
                                onClick={handleBackClick}
                            />{" "}
                        </button>
                        <h1 className="warehouseDetails__header-location">
                            {warehouse.warehouse_name}
                        </h1>
                    </div>
                    <div className="warehouseDetails__header-edit-button-container">
                        <Link to={`/editwarehouse/${params.id}`}>
                        <button className="warehouseDetails__header-location-edit-button">
                            {" "} 
                            <img src={edit} alt="edit icon" />{" "}
                            <h3 className="warehouseDetails__header-location-edit-content">
                                Edit
                            </h3>
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="warehouseDetails__description-container">
                    <div className="warehouseDetails__description-address">
                        <h4 className="warehouseDetails__description-address-subheader">
                            WAREHOUSE ADDRESS:
                        </h4>
                        <p className="warehouseDetails__description-contact-info">
                            {warehouse.address}
                        </p>
                        <p className="warehouseDetails__description-contact-info">
                            {warehouse.city}, {warehouse.country}
                        </p>
                    </div>
                    <div className="warehouseDetails__contact-container">
                        <div className="warehouseDetails__contact-container-info">
                            <h4 className="warehouseDetails__description-address-subheader">
                                CONTACT NAME:
                            </h4>
                            <p className="warehouseDetails__description-contact-info">
                                {warehouse.contact_name}
                            </p>
                            <p className="warehouseDetails__description-contact-info">
                                {warehouse.contact_position}
                            </p>
                        </div>
                        <div className="warehouseDetails__contact-container-info">
                            <h4 className="warehouseDetails__description-address-subheader">
                                CONTACT INFORMATION:
                            </h4>
                            <p className="warehouseDetails__description-contact-info">
                                {warehouse.contact_phone}
                            </p>
                            <p className="warehouseDetails__description-contact-info">
                                {warehouse.contact_email}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <SingleWarehouseInventory id={params.id} setEditCount={setEditCount} editCount={editCount}/>
        </div>
    );
};

export default WarehouseDetails;
