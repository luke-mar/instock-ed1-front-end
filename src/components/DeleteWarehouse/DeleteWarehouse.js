import "./DeleteWarehouse.scss";
import close from "../../assets/Icons/close-24px.svg";
import axios from "axios";

function DeleteWarehouse({ onclose, warehouseToDelete, refreshFunction }) {
    const url = `http://localhost:8080/warehouses/`

    const handleClick = (e) => {
        e.preventDefault();
        // setDisplayValue(inputValue);
        // Simple DELETE request with a JSON body using axios
        axios.delete(url + `${warehouseToDelete.id}`)
            .then((response) => {
                onclose();
                // Update the component's state with the response data
                // setResponseData(response.data);
                refreshFunction();
            })
            .catch((error) => {
                console.log(error);
                // Handle any errors that occurred during the request
            });
    };



    return (
        <div className="delete-container">
            <img
                onClick={onclose}
                className="delete-container__close-image"
                src={close}
                alt="close"
            />
            <h2 className="delete-container__title">
                Delete {warehouseToDelete.warehouse_name} warehouse?
            </h2>
            <p className="delete-container__text">
                Please confirm that you'd like to delete the {warehouseToDelete.warehouse_name} from the list of warehouses.
                You won't be able to undo this action.
            </p>
            <div className="delete-container__buttons">
                <button onClick={onclose} className="delete-container__button1">
                    Cancel
                </button>
                <button
                    className="delete-container__button2"
                    onClick={handleClick}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default DeleteWarehouse;
