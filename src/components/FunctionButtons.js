"use client";

import "../app/globals.css";
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import AddItem from "@/modals/addItem";
import BorrowItem from "@/modals/borrowItem";

export default function FunctionButtons({img, text, color, classname, modal}){
    const [showModal, setShowModal] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
        <button className={classname} style={{ backgroundColor: color }} onClick={() => setShowModal(true)}>
            <img src={img}></img>
            <p>{text}</p>
        </button>
        {isMounted && showModal && modal === "add" &&
         createPortal(
            <AddItem onClose={() => setShowModal(false)} />,
            document.body
        )}
        {isMounted && showModal && modal === "borrow" &&
         createPortal(
            <BorrowItem onClose={() => setShowModal(false)} />,
            document.body
        )}
        </>
    );
}