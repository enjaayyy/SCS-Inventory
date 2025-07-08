import NavPane from "@/components/NavPane";
import FunctionButtons from "@/components/FunctionButtons";
import SearchBar from "@/components/SearchBar";
import "./globals.css";
import "../styles/home.css";


export default function Home() {
  return (
    <div className='main-content'>
      <NavPane pageName="Inventory"/>
      <div className="content-container">
        <div className="inventory-header">
          <SearchBar  /> 
          <FunctionButtons classname="borrow-button" img="/images/borrowIcon.svg" text="Borrow" color="green" modal="borrow"/>
          <FunctionButtons classname="add-button" img="/images/addIcon.svg" text="Add Item/s" color="black" modal="add"/>
        </div>
        <hr style={{ marginTop: '3vh' }} />
        <p>Content</p>
      </div>
    </div>
  );
}
