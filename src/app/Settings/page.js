import NavPane from "@/components/NavPane";
import "../globals.css";

export default function Settings() {
  return (
    <div className='main-content'>
      <NavPane pageName="Settings"/>
      <div className="content-container">
        <p>Settings content</p>
      </div>
    </div>
  );
}