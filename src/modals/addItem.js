import "../styles/modals.css";

export default function AddItem({ onClose}){
    return (
      <div className="modal-screen">
        <div className="modal">
          <div className="modal-header">
            <p>Add Item</p> 
            <button onClick={onClose}>X</button>
          </div>
          <p>Add item to the inventory</p>
          <div className="modal-body">

          </div>
        </div>
      </div>
    );
}