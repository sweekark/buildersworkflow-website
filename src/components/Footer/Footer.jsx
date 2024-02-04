import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer section_padding">
            <div className="footer-sec">
                <p>&copy; 2024 Your Website Name. All rights reserved.</p>
                <div className="footer-sec-2">
                    <div className="footer-item">
                        <FaFacebook size={24} />
                    </div>
                    <div className="footer-item">
                        <FaLinkedinIn size={24} />
                    </div>
                    <div className="footer-item">
                        <FaTwitter size={24} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer
