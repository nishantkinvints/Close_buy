import React, { useState } from 'react';
import Awsome_feature_img1 from '../assets/images/security.png';
import Awsome_feature_img2 from '../assets/images/money.png';
import Awsome_feature_img3 from '../assets/images/bar-chart.png';
import Awsome_feature_img4 from '../assets/images/text-document.png';
import Awsome_feature_img5 from '../assets/images/work.png';
import Awsome_feature_img6 from '../assets/images/refresh.png';
import awsome_mobile from '../assets/images/awsome_mobile.png';

import Awsome_feature_wrap from './Awsome_feature_wrap';

const Awsome_feature_data_left = [
    {
        id:'awsome_details1', 
        Awsome_feature_img: Awsome_feature_img1,
        awsome_info_title: 'Secure Date',
        awsome_info_dec: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
    },
    {
        id:'awsome_details2',
        Awsome_feature_img: Awsome_feature_img2,
        awsome_info_title: 'Easy To Customize',
        awsome_info_dec: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
    },
    {
        id:'awsome_details3',
        Awsome_feature_img: Awsome_feature_img3,
        awsome_info_title: 'Grow Business',
        awsome_info_dec: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
    }
]

const Awsome_feature_data_right = [
    {
        id:'awsome_details4',
        Awsome_feature_img: Awsome_feature_img4,
        awsome_info_title: 'Documentation',
        awsome_info_dec: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
    },
    {
        id:'awsome_details5',
        Awsome_feature_img: Awsome_feature_img5,
        awsome_info_title: 'Easy To Work',
        awsome_info_dec: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
    },
    {
        id:'awsome_details6',
        Awsome_feature_img: Awsome_feature_img6,
        awsome_info_title: 'Free Update',
        awsome_info_dec: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
    }
]


const Awsome_feature = (props) => {

    const [aws, setaws] = useState('false');

    const openclickdiv = () => {
        setaws(!aws);
    }


    return(
        <div className="awsome_feature_section">
            <div className="container">
                <div className="awsome_feature_inner_section">
                    <div className="section_title wow fadeInUp">
                        <h2>Awesome &nbsp;<span>Feature</span></h2>
                    </div>

                    <p className="wow fadeInUp" data-wow-delay="0.5s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has <br/> been the industry's standard dummy text ever since the 1500s. </p>

                    <div className="row">
                        <div className="col-md-6 col-lg-4 awsome_feature_1 aw" onClick={openclickdiv}>
                            <div className="awsome_secure_wrapper">
                                <div className="awsome_secure_sub_wrapper">
                                    {
                                        Awsome_feature_data_left.map((val, index) => {
                                            return(
                                                <Awsome_feature_wrap 
                                                    id = {val.id}
                                                    key={index}
                                                    Awsome_feature_img = {val.Awsome_feature_img}
                                                    awsome_info_title = {val.awsome_info_title}
                                                    awsome_info_dec = {val.awsome_info_dec}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-4 awsome_feature_2">
                            <div className="awsome_secure_mobile_img wow zoomIn">
                                <img src={awsome_mobile} alt="awsome_mobile" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 awsome_feature_3 aw" onClick={openclickdiv}>
                            <div className="awsome_secure_wrapper awsome_secure">
                                <div className="awsome_secure_sub_wrapper">
                                    {
                                        Awsome_feature_data_right.map((val, index) => {
                                            return(
                                                <Awsome_feature_wrap 
                                                    id = {val.id}
                                                    key={index}
                                                    Awsome_feature_img = {val.Awsome_feature_img}
                                                    awsome_info_title = {val.awsome_info_title}
                                                    awsome_info_dec = {val.awsome_info_dec}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="awsome_shadow">
                <img src="../assets/images/awsome_shadow.png" alt="shadow" />
            </div>
        </div>
    );
}

export default Awsome_feature;