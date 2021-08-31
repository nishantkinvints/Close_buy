
import React from 'react';

import Logo from '../../assets/img/eshop/logo.png';

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="container">
            <div className="inner_footer_wrapper">
                <div className="footer_list_main">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col">
                                <div className="footer_logo">
                                    <a href="#0" className="logo">
                                        <img src={Logo} alt="logo" />
                                        <p>Sho<span>e</span> Shop</p>
                                    </a>
                                </div>
                            </div>

                                <div className="col footer_center_list">
                                    <div className="footer_list">
                                        <ul>
                                            <li>
                                                <a href="#0" className="footer_text">Home</a>
                                            </li>
                                            <li>
                                                <a href="#0" className="footer_text">Man</a>
                                            </li>
                                            <li>
                                                <a href="#0" className="footer_text">Woman</a>
                                            </li>
                                            <li>
                                                <a href="#0" className="footer_text">Popular</a>
                                            </li>
                                            <li>
                                                <a href="#0" className="footer_text">About</a>
                                            </li>
                                            <li>
                                                <a href="#0" className="footer_text">Blog</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="footer_list">
                                        <ul>
                                            <li>
                                                <a href="#0" className="footer_text">Support</a>
                                            </li>
                                            <li>
                                                <a href="#0" className="footer_text">Advertisement</a>
                                            </li>
                                            <li>
                                                <a href="#0" className="footer_text">Onlineshop</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="footer_email_wrapper">
                                <div className="footer_email_inner_wrapper">
                                    <p className="footer_text">Sign up for news and events</p>

                                    <div className="email_input_wrapper">
                                        <input type="email" name="email" id="email" placeholder="Your email address"/>
                                        <div className="footer_btn">
                                            <button type="button" className="common_btn common_small_btn">
                                                <span>Submit</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="footer_social_media">
                                        <ul>
                                            <li>
                                                <a href="#0">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    <i className="fa fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    <i className="fa fa-pinterest"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="copy_right_section">
                            <p> Copyrights 2017. Shoe Shop by VictorThemes</p>
                            <a href="#0" className="footer_text">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
