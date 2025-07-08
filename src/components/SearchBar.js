import "../app/globals.css";

export default function SearchBar(){
    return(
        <div className="search-bar-container">
            <input placeholder="Search Equipment"></input>
            <img src="../images/searchIcon.svg"></img>
        </div>
    );
}