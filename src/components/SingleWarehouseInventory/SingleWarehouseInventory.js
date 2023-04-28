import "./SingleWarehouseInventory.scss"
import edit from '../../assets/Icons/edit-24px.svg'
import deleteImg from '../../assets/Icons/delete_outline-24px.svg'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Modal from "../Modal/Modal";
import DeleteInventory from '../../components/DeleteInventory/DeleteInventory';

function SingleWarehouseInventory(props) {
  const [inventoryList, setInventoryList] = useState([]);
  const [deleteCount, setDeleteCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:8080/warehouses/${props.id}/inventories`)
      .then((response) => {
        if(response.data){
        setInventoryList(response.data);
        }
      });
    }, [deleteCount]);

    function refreshFunction() {
      setDeleteCount(deleteCount + 1);
    }
    const [inventoryToDelete, setInventoryToDelete] = useState(null);
    function handleClick(click) {
      console.log(click);
      setIsOpen(true);
      setInventoryToDelete(click);
    }
    
    return (
        <>
          <div className="">
                <Modal open={isOpen}>
                    <DeleteInventory
                        inventoryToDelete={inventoryToDelete}
                        onclose={() => setIsOpen(false)}
                        refreshFunction={refreshFunction}
                    ></DeleteInventory>
                </Modal>
            </div>

          <div className="inventory-titles">
            <p className="inventory-titles__text">INVENTORY ITEM</p>
            <p className="inventory-titles__text">CATEGORY</p>
            <p className="inventory-titles__text">STATUS</p>
            <div className="row">
                <p className="inventory-titles__text2">QUANTITY</p>
                <p className="inventory-titles__last-text">ACTIONS</p>
                </div>    
          </div>
        
        <div className="column">
            {
                inventoryList.map (invent =>{
                    return (
                        
                        <div className="inventory-item">
                            <Link to={`/inventories/${invent.id}`}>
                            <p className="inventory-item__name">{invent.item_name} </p>
                            </Link>
                            <p className="inventory-item__category">{invent.category}</p>
                            <p className={invent.status.replace(/\s+/g, '-').toLowerCase()}>{invent.status}</p>
                            <div className="row">
                              <p className="inventory-item__quantity">{invent.quantity}</p>                               
                              <div className="inventory-item__icons">
                                  <img className="delete" src={deleteImg} alt="delete icon"></img>
                                  <img src={edit} alt="edit button"></img>

                                  <img className="delete" src={deleteImg} onClick={() => handleClick(invent)}></img>
                                  <img src={edit}></img>

                              </div>
                              </div>
                        </div>  
                        
                    );
                })
            }
        </div> 
        </>
    );
}

export default SingleWarehouseInventory;
