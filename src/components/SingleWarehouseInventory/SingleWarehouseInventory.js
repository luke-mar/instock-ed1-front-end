import "./SingleWarehouseInventory.scss"
import edit from '../../assets/Icons/edit-24px.svg'
import deleteImg from '../../assets/Icons/delete_outline-24px.svg'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import Modal from "../Modal/Modal";
import DeleteInventory from '../../components/DeleteInventory/DeleteInventory';

function SingleWarehouseInventory(props) {
  const [inventoryList, setInventoryList] = useState([]);
  const [deleteCount, setDeleteCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const params=useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/warehouses/${props.id}/inventories`)
      .then((response) => {
        if(response.data){
        setInventoryList(response.data);
        }
      });
    }, [deleteCount]);
  const arrow = '  >';
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
                            <div className="card-column">
                              <p className="mobile-only">INVENTORY ITEM</p>
                              <Link to={`/inventories/${invent.id}`}>
                              <p className="inventory-item__name">{invent.item_name} {arrow}</p>
                              </Link>
                              <p className="mobile-only">CATEGORY</p>
                              <p className="inventory-item__category">{invent.category}</p>
                              <img className="delete mobile-only-img" alt="delete icon" src={deleteImg} onClick={() => handleClick(invent)}></img>
                            </div>

                            <div className="card-column">
                              <p className="mobile-only">STATUS</p>
                              <p className={invent.status.replace(/\s+/g, '-').toLowerCase()}>{invent.status}</p>
                              <p className="mobile-only">QTY</p>
                              <div className="row">
                                <p className="inventory-item__quantity">{invent.quantity}</p>                               
                                <div className="inventory-item__icons">
                                    <img className="delete" src={deleteImg} alt="delete icon" onClick={() => handleClick(invent)}></img>
                                    <Link to={`/editinventory`}>
                                      <img src={edit} alt="edit icon"></img>
                                    </Link>
                                </div>
                              </div>
                              <Link to={`/inventories/${params.id}/editinventory`}>
                              <img className="mobile-only-img2" src={edit} alt="edit icon"></img>
                              </Link>
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
