import React from 'react';
import playstore from '../assets/images/playstore.png';

const Footer = () => {
    return(
        <div className="footer-wrapper">
            <footer>
                <div className="container">
                    <div className="footer_inner_section">
                        <div className="footer_details_section">
                            <div className="row">
                                <div className="col-md-3 col-6">
                                    <div className="footer_info">
                                        <div className="footer_heading">
                                            <h3>About Us</h3>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#0">Home</a>
                                            </li>
                                            <li>
                                                <a href="#0">Features</a>
                                            </li>
                                            <li>
                                                <a href="#0">Explore</a>
                                            </li>
                                            <li>
                                                <a href="#0">Testmonials</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="footer_info">
                                        <div className="footer_heading">
                                            <h3>Features</h3>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#0">Easy to use</a>
                                            </li>
                                            <li>
                                                <a href="#0">Work every device</a>
                                            </li>
                                            <li>
                                                <a href="#0">Always up to date</a>
                                            </li>
                                            <li>
                                                <a href="#0">Track your device</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="footer_info">
                                        <div className="footer_heading">
                                            <h3>Support</h3>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#0">Accounting software</a>
                                            </li>
                                            <li>
                                                <a href="#0">Privacy policy</a>
                                            </li>
                                            <li>
                                                <a href="#0">Terms of service</a>
                                            </li>
                                            <li>
                                                <a href="#0">Accessibility</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="footer_info">
                                        <div className="footer_heading">
                                            <h3>Download App</h3>
                                        </div>
                                        <ul className="playstore_link">
                                            <li>
                                                <a href="#0">
                                                    <img src={playstore} alt="playstore" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                        
                        <div className="copy_right_section">
                            <p>Copyright © 2021 Close Buy Company S.L. All rights reserved.</p>

                            <ul className="socail_icon">
                                <li>
                                    <a href="#0"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <span className="insta_icon">                                            
                                            <svg id="Group_57" data-name="Group 57" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path id="Path_644" data-name="Path 644" d="M0,0H24V24H0Z" fill="none"/>
                                                <path id="Path_645" data-name="Path 645" d="M12,2c2.717,0,3.056.01,4.122.06a7.367,7.367,0,0,1,2.428.465,4.876,4.876,0,0,1,1.772,1.153A4.908,4.908,0,0,1,21.475,5.45a7.387,7.387,0,0,1,.465,2.428C21.987,8.944,22,9.283,22,12s-.01,3.056-.06,4.122a7.393,7.393,0,0,1-.465,2.428,5.106,5.106,0,0,1-2.925,2.925,7.387,7.387,0,0,1-2.428.465c-1.066.047-1.4.06-4.122.06s-3.056-.01-4.122-.06a7.393,7.393,0,0,1-2.428-.465A5.106,5.106,0,0,1,2.525,18.55a7.361,7.361,0,0,1-.465-2.428C2.013,15.056,2,14.717,2,12s.01-3.056.06-4.122A7.361,7.361,0,0,1,2.525,5.45,4.88,4.88,0,0,1,3.678,3.678,4.9,4.9,0,0,1,5.45,2.525,7.361,7.361,0,0,1,7.878,2.06C8.944,2.013,9.283,2,12,2Zm0,5a5,5,0,1,0,5,5A5,5,0,0,0,12,7Zm6.5-.25A1.25,1.25,0,1,0,17.25,8,1.25,1.25,0,0,0,18.5,6.75ZM12,9a3,3,0,1,1-3,3A3,3,0,0,1,12,9Z" fill="#444454"/>
                                            </svg>  
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fa fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="footer_circle wow zoomIn"></div>
        </div>
    );
}

export default Footer;