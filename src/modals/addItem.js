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
            <div className="image-container">
              <p className="labels">Upload Image</p>
              <label htmlFor ="image-upload" className="image-upload">
                <div className="upload-container">
                  <div>
                    <img src="/images/upload-image.svg"></img>
                    <p>Upload File</p>
                  </div>
                </div>
              </label>
              <input type="file" accept="image/*" id="image-upload" hidden></input>
            </div>
            <div className="data-container">
              <p className="labels">Product Name</p>
              <input className="product-name-input"></input>
              <p className="labels">Location</p>
              <select className="product-select-input"
              onChange={(e) => console.log(e.target.value)}>
                <option value="awda">awda</option>
                <option value="23">23</option>
              </select>
              <p className="labels">Qty.</p>
              <input className="product-qty-input" type="number"></input>
              <div className="submit-btn-container">
                <button className="submit-btn">Submit</button>
              </div>
            </div>
          </div>
          </div>
        </div>
    );
}