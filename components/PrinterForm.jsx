"use client";

import React, { useState } from "react";
import { useSession } from 'next-auth/react';

function PrinterForm() {
    const { data: session } = useSession();
    const [printerName, setPrinterName] = useState("");
    const [filaments, setFilaments] = useState("");
    const [location, setLocation] = useState("");
    const availability = true;
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('/api/publish', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: session.user,
                printerName,
                filaments: filaments.split(',').map(item => item.trim()),
                location,
                availability,
                price: parseFloat(price),
            }),
            credentials: 'include',
        });
        const data = await response.json();

        if (!response.ok) {
            console.log("Frick! You messed up");
        } else {
            console.log("Printer registered successfully");
        }
    };

    return (
        <div style={{width: "500px"}}>
            <form onSubmit={handleSubmit}>
                <div style={{paddingBottom: "20px"}}>
                    <input type="text" value={printerName} onChange={(e) => setPrinterName(e.target.value)} placeholder="Printer Name" className="form_input" required />
                    <input type="text" value={filaments} onChange={(e) => setFilaments(e.target.value)} placeholder="Available Filaments (Separate with a comma)" className="form_textarea" required />
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className="form_input" required />
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="form_input" required />
                </div>
                <input type="submit" value="Register Printer" className="outline_btn"/>
            </form>
        </div>
    );
}

export default PrinterForm;

