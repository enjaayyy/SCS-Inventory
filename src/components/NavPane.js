import "../styles/NavBar.css";

export default function NavPane({pageName}){
    return (
        <div className="nav-pane-container">
            <div className="page-title-container">
                <p className="page-title">{pageName}</p>
            </div>
        </div>
    );
}