
import React from 'react';

import eshop_shose from '../../assets/img/eshop/eshop_shose.png';
import product_girl from '../../assets/img/eshop/product_girl.png';
import nike_shose_img from '../../assets/img/eshop/air_force_shose.png';
import Product_list from '../Inner_component/Product_list';


const Home_banner = () => {
    
  return (
    <div className="main_banner">
        <div className="container">
            <div className="inner_home_banner">
                <h1 className="main_title">Nike</h1>
                <button type="button" className="common_btn">
                    <span>SHOP BY BRANDS</span>
                </button>
            </div>
        </div>

        <div className="eshop_big_shose">
            <img src={eshop_shose} alt="" />
        </div>

        <div className="social_icon">
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
  );
}


const Nike_air = () => {
    return (
        <div className="nike_air_section">
            <div className="container">
                <div className="nike_air_inner_section">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="nike_shose_img_boder">
                                <div className="nike_shose_img">
                                    <img src={nike_shose_img} alt="nike shose img" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7 nike_content_center">
                            <div className="nike_shose_contain">
                                <h2 className="inner_title">Nike Air Force One MID id</h2>
                                <p className="common_dec">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward,</p>
                                <div className="nike_air_btn">
                                    <button type="button" className="common_btn common_small_btn">
                                        <span>View Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }


const Popular_arrivals = () => {
    return (
        <div className="popular_arrivals_section">
            <div className="container">
                <div className="popular_arrivals_inner_section">
                <h2 className="inner_title">Popular Arrivals</h2>
                    <div className="row">
                        <Product_list />
                    </div>
                </div>
            </div>
        </div>
        );
    }

const Pre_fall_collection = () => {
    return (
        <div className="Pre_fall_collection_serction">
            <div className="container">
                <div className="Pre_fall_collection_inner_serction">
                    <div className="row">
                        <div className="col-md-7 Pre_fall_main_content">
                            <div className="Pre_fall_content">
                                <h2 className="inner_title">Popular Arrivals</h2> 
                                <p className="common_dec">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will </p>
                                <div className="pre_fall_btn">
                                    <button type="button" className="common_btn common_small_btn">
                                        <span>View Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 girls_after_layer">
                            <div className="pre_fall_girl_border">
                                <div className="pre_fall_girl_image">
                                    <img src={product_girl} alt="product girl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home_banner;
export {Nike_air, Popular_arrivals, Pre_fall_collection};