import NavPane from "@/components/NavPane";
import "../globals.css";

export default function Logs() {
  return (
    <div className='main-content'>
      <NavPane pageName="Logs"/>
      <div className="content-container">
        <p>logs content</p>
      </div>
    </div>
  );
}