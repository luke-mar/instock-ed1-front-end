import "../../componets/DeleteWarehouses/DeleteWarehouses.scss"
import close from "../../assets/Icons/close-24px.svg"
import axios from "axios";

const handleClick = e => {
    e.preventDefault();
    // setDisplayValue(inputValue);

    // Simple POST request with a JSON body using axios
    axios.delete('http://localhost:8080/warehouses/id', {

    })
        .then(response => {
            // Update the component's state with the response data
            // setResponseData(response.data);
            ;
        })
        .catch(error => {
            console.log(error);
            // Handle any errors that occurred during the request
        });
}


function DeleteWarehouses({ onclose }) {
    return (
        <div className="delete-container">
            <img onClick={onclose} className="delete-container__close-image" src={close} alt="close" />
            <h2 className="delete-container__title">Delete Washington warehouse?</h2>
            <p className="delete-container__text">Please confirm that you'd like to delete the Washington from the list of warehouses. You won't be able to undo this action</p>
            <div className="delete-container__buttons">
                <button onClick={onclose} className="delete-container__button1" >
                    Cancel
                </button>
                <button className="delete-container__button2"
                    onClick={handleClick}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default DeleteWarehouses;