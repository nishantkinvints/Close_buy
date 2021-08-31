
import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel'

import Latest_blog_img from '../../assets/img/eshop/shopping_shose.png';


const Latest_blog_data = [
    {
        id: "Latest_blog1",
        Latest_blog_title : "Colourful Offer ;",
        Latest_blog_dec : "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive",
    },
    {
        id: "Latest_blog2",
        Latest_blog_title : "Colourful Offer2 ;",
        Latest_blog_dec : "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive",
    },
    {
        id: "Latest_blog3",
        Latest_blog_title : "Colourful Offer3 ;",
        Latest_blog_dec : "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive",
    },
    {
        id: "Latest_blog4",
        Latest_blog_title : "Colourful Offer4 ;",
        Latest_blog_dec : "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive",
    },
    {
        id: "Latest_blog5",
        Latest_blog_title : "Colourful Offer5 ;",
        Latest_blog_dec : "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive",
    },
    {
        id: "Latest_blog6",
        Latest_blog_title : "Colourful Offer6 ;",
        Latest_blog_dec : "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive",
    },
]

const Latest_blog_slider = (props) => {


    const [sliderindex, setsliderindex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setsliderindex(selectedIndex);
    };

    // $('.bottom_list ul li').eq(index).addClass('active');

    const islist = Latest_blog_data.map((val, index) => {
        return(
            <li key={val.index} className={sliderindex === index ? "active" : ""}></li> 
        )
    })

    console.log(sliderindex);

    return (

        <div className="latest_blog_slider">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="latest_img_border">
                            <div className="latest_img">
                                <img src={Latest_blog_img} alt="Latest blog img" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="latest_blog_slider_inner">
                            <Carousel activeIndex={sliderindex} onSelect={handleSelect}>
                                {
                                    Latest_blog_data.map((val) => {
                                        return(
                                            <Carousel.Item key={val.id}>
                                                <div>
                                                    <div className="latest_blog_item_wrapper">
                                                        <h3>{val.Latest_blog_title}</h3>  
                                                        <p className="common_dec">{val.Latest_blog_dec}</p>  
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>

                            <div className="latest_btn">
                                <button type="button" className="common_btn common_small_btn">
                                    <span>View Now</span>
                                </button>
                            </div>

                            <div className="bottom_list" >
                                <ul>
                                    {
                                        islist
                                    }
                                </ul>

                                <div className="line_and_value">
                                    <span></span>
                                    <div className="slider_circle_border"></div>
                                    <div className="slider_number_list">
                                        <p>{sliderindex + 1 < 10 ? `0${sliderindex + 1}` : `${sliderindex + 1}`}</p>
                                        <span>/</span>
                                        <p>{islist.length < 10 ? `0${islist.length}` : `${islist.length}`}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    
    export default Latest_blog_slider;
    