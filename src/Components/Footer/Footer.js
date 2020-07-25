import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <div className="footer">
            <div>
                <div>
                    <p>Follow us on:</p>
                    <div>
                        <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                    </div>
                </div>
                <div>
                    <p>Explore</p>
                    <p>About us</p>
                    <p>Bookmarks</p>
                </div>
                <div>
                    <p>Contact us</p>
                    <p>Barisal Sadar, Barisal 8200</p>
                    <p>Email: boiwala18@gmail.com</p>
                    <p>Contact No: +8801870508363<br /><span style={{ paddingLeft: "88px" }}>+8801883083885</span></p>
                </div>
                <div>
                    <p>Join us</p>
                    <p>Job</p>
                    <p>Affiliates</p>
                </div>
                <div>
                    <p>Important stuff</p>
                    <p>Cookies</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Secure shopping</p>
                </div>
            </div>
            <div>
                <small style={{ textAlign: "center" }}>© {currentYear} Boiwala</small>
            </div>
        </div>
    );
};

export default Footer;