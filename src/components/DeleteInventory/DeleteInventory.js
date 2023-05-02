import "./DeleteInventory.scss";
import close from "../../assets/Icons/close-24px.svg";
import axios from "axios";

function DeleteInventory({ onclose, inventoryToDelete, warehouseToDelete, refreshFunction }) {
    const url = `http://localhost:8080/inventories/`

    const handleClick = (e) => {
        e.preventDefault();
        // setDisplayValue(inputValue);
        // Simple DELETE request with a JSON body using axios
        axios.delete(url + `${inventoryToDelete.id}`)
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
                Delete {inventoryToDelete.item_name} inventory item?
            </h2>
            <p className="delete-container__text">
                Please confirm that you'd like to delete the {inventoryToDelete.item_name} from the inventory list.
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

export default DeleteInventory;
