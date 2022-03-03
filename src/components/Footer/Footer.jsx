import React from "react";
import './Footer.css';
import instagram from "../../multimedia/instagram.jpg";
import linkedin from "../../multimedia/linkedin.jpg";
import whatsapp from "../../multimedia/whatsapp.jpg";

export default function Footer() {

    return (
        <>
            <div className="footer">
            <span><img src={instagram} alt="logo instagram" className="logoFooter" /></span>
            <span><img src={whatsapp} alt="logo whatsapp" className="logoFooter" /></span>
                <span><img src={linkedin} alt="logo linkedin" className="logoFooter" /></span>
                
                
                <p className="autor">©2022. Sebastian Rodas</p>
            </div>
        </>
    )
}