import NavPane from "@/components/NavPane";
import "./globals.css";

export default function Home() {
  return (
    <div className='main-content'>
      <NavPane pageName="Inventory"/>
      <div className="content-container">
        <p>Content</p>
      </div>
    </div>
  );
}
