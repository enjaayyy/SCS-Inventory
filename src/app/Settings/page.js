"use client";

import { useState, useEffect, useSyncExternalStore } from 'react';
import NavPane from "@/components/NavPane";
import "../globals.css";
import "../../styles/settings.css";

export default function Settings() {
  const [showModal, setShowModal] = useState(false);
  const [roomName, setRoomName] = useState("");
  
  const addLocation = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/post",
      {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
          action: "addLocation",
          location: roomName
        }),
      }
    );

    const text = await response.text();
    console.log(text);
  }

  return (
    <div className='main-content'>
      <NavPane pageName="Settings"/>
      <div className="content-container">
        <div className="content-headers">
          <p>Locations</p>
        </div>
        <div className="add-location-container">
          <form onSubmit={addLocation}>
            { showModal && (
              <div>
                <p>Name</p>
                <div className='add-data-location'>
                  <input className='input-location' type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)}></input>
                  <button className='add-location' type="submit">
                    <img src="/images/check.svg"></img>
                  </button>
                  <button className='cancel-location' onClick={() => setShowModal(false)} type="button">X</button>
                </div>
              </div>
            )}
            <button type="button" className="add-location-btn"onClick={() => setShowModal(true)}>Add Item</button>
          </form>
          
        </div>
      </div>
    </div>
  );
}