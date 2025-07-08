import "../styles/modals.css";

export default function BorrowItem({ onClose}){
    return (
      <div className="modal-screen">
        <div className="modal">
          <p>this is the borrow Item modal</p>  
          <button onClick={onClose}>Close </button>
        </div>
      </div>
    );
}