import React from "react";
import "../styles/Footer.scss"

function Footer(){
    return(
        <footer>
            <div>
                <h1>eSolutions</h1>
                <p>@all right reserved</p>
            </div>
            <div>
                <h5>Follow Us</h5>
                <div>
                    <a href="https://linkedin.com" target={"blank"}>LinkedIn</a>
                    <a href="https://instagram.com" target={"blank"}>Instagram</a>
                    <a href="https://facebook.com" target={"blank"}>Facebook</a>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;