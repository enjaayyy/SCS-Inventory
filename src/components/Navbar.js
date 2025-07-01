"use client";

import "../styles/NavBar.css";
import { useState } from "react";   
import Link from 'next/link';

function NavBar(){
    const [clicked, setClicked] = useState(null);

    const navIcons = [
        {id: 0, src: "/images/inventoryIcon.svg", route: "/"},
        {id: 1, src: "/images/inquiriesIcon.svg", route: "/Inquiries"},
        {id: 2, src: "/images/logsIcon.svg", route: "/Logs"},
        {id: 3, src: "/images/settingsIcon.svg", route: "/Settings"},
    ];
    return (
        <div className='nav-bar'>
            <img src="/images/SCSLogo.png" alt="scs-logo" className='dept-logo'></img>
            {
                navIcons.map((icon) =>(
                    <NavBarIcons
                        key={icon.id}
                        src={icon.src}
                        route={icon.route}
                        isActive={clicked === icon.id}
                        onClick={() => setClicked(icon.id)}
                    />
                ))
            }
        </div>
    );
}

function NavBarIcons({src, isActive, onClick, route}){
    return (
        <Link href={route}>
            <div className={isActive ? "clicked-nav-icons-container" : "unclicked-nav-icons-container"} onClick={onClick}>
                <img src={src} alt='nav-icons' className='nav-icons'></img>
            </div>
        </Link>
        
    );
}

export default NavBar;