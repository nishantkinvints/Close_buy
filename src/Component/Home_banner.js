import React, { useState } from 'react';
import mobile_banner from '../assets/images/mobile_banner.png';

const Homebanner = () => {
    const [email, setEmail] = useState('');

    const emailIsvalid = (event) => {
        setEmail(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        email.includes('@');
    }

    return(
        <div className="home_banner_section">
            <div className="container">
                <div className="closebuy_inner_section">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="closebuy_info_section">
                                <h1 className="wow fadeInUp"><span>CloseBuy:</span> is <br/> a discount app </h1>
                                <p className="wow fadeInUp" data-wow-delay="0.5s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="subscribe_box">
                                    <form>
                                        <input type="email" name="email" id="email" placeholder="Enter Your Email" onChange={emailIsvalid}/>
                                        <button href="#0" className="sub_btn" onSubmit={submitHandler}>Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-6">
                            <div className="right_mobile_section">
                                <div className="right_mobile_img wow fadeInRight" data-wow-duration="1.5s">
                                    <img src={mobile_banner} alt="mobile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homebanner;