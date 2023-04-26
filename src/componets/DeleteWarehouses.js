import "../../src/componets/DeleteWarehouses.scss"
import close from "../../src/assets/Icons/close-24px.svg"

function DeleteWarehouses({onclose}) {
    return (
        <div className="delete-container">
            <img onClick={onclose} className="delete-container__close-image" src={close} alt="close" />
            <h2 className="delete-container__title">Delete Washington warehouse?</h2>
            <p className="delete-container__text">Please confirm that you'd like to delete the Washington from the list of warehouses. You won't be able to undo this action</p>
            <div className="delete-container__buttons">
                <button onClick={onclose}  className="delete-container__button1" >
                    Cancel
                </button>
                <button className="delete-container__button2" >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default DeleteWarehouses;