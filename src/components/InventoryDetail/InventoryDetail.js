import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit2-24px.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link} from "react-router-dom";
import "./InventoryDetail.scss";

const InventoryDetail = () => {
    const [inventory, setInventory] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

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
            <div className="inventoryDetail__header">
                <div className="inventoryDetail__header-item-container">
                    <button className="inventoryDetail__header-back-button">
                        <img onClick={handleBackClick} src={backArrow} alt="" />
                    </button>
                    <h1 className="inventoryDetail__item">
                        {inventory.item_name}
                    </h1>
                </div>
                <div className="inventoryDetail__header-edit-button-container">
                    <Link to={`/inventories/${params.id}/editinventory`}>
                    <button className="inventoryDetail__header-edit-button">
                        {" "}
                        <img
                            className="inventoryDetail__header-edit-icon"
                            src={edit}
                            alt="edit icon"
                        />
                        <h3 className="inventoryDetail__header-edit-content">Edit</h3>
                    </button>
                    </Link>
                </div>
            </div>
            <div className="inventoryDetail__description">
                <div className="inventoryDetail__description-container">
                    <div className="inventoryDetail__description-container-category">
                        <h4 className="inventoryDetail__subheader">
                            ITEM DESCRIPTION:
                        </h4>
                        <p className="inventoryDetail__content">
                            {inventory.description}
                        </p>
                    </div>
                    <div className="inventoryDetail__description-container-category">
                        <h4 className="inventoryDetail__subheader">
                            CATEGORY:
                        </h4>
                        <p className="inventoryDetail__content">
                            {inventory.category}
                        </p>
                    </div>
                </div>
                <div className="inventoryDetail__description-stock">
                    <div className="inventoryDetail__description-stock-status-container">
                        <div className="inventoryDetail__description-container-category">
                            <h4 className="inventoryDetail__subheader">
                                STATUS
                            </h4>
                            <p className='inventoryDetail__content' id={`${inventory.quantity > 0 ? 'instock' : 'outofstock'}`}>
                                {inventory.status}
                            </p>
                        </div>
                        <div className="inventoryDetail__description-container-category">
                            <h4 className="inventoryDetail__subheader">
                                WAREHOUSE:
                            </h4>
                            <p className="inventoryDetail__content">
                                {inventory.warehouse_name}
                            </p>
                        </div>
                    </div>
                    <div className="inventoryDetail__description-stock-container-quantity">
                        <h4 className="inventoryDetail__subheader">QUANTITY</h4>
                        <p className="inventoryDetail__content">
                            {inventory.quantity}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default InventoryDetail;
