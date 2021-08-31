
import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Thought_slider = () => {
    const thought_data = [
        {
            thought_title : "We Thought of you",
            thought_dec : "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
            thought_name : "Nandy Sweety",
            thought_profession : "Ui Designer"
        },
        {
            thought_title : "We Thought of you2",
            thought_dec : "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
            thought_name : "Suresh Suthar",
            thought_profession : "Photoshop Designer"
        },
        {
            thought_title : "We Thought of you3",
            thought_dec : "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
            thought_name : "Sagar Jiyani",
            thought_profession : "Ux Designer"
        }
    ]

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <div className="thought_main_slider">
            <div className="container">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    thought_data.map((val) => {
                        return(
                            <Carousel.Item>
                                <div>
                                    <div className="thought_item_wrapper">
                                        <h2 className="inner_title">{val.thought_title}</h2>
                                        <p className="common_dec">{val.thought_dec}</p>
                                        <div className="thought_mens">
                                            <h4>{val.thought_name}</h4>
                                            <span>{val.thought_profession}</span>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
            </div>
        </div>
        );
    }
    
    export default Thought_slider;
    