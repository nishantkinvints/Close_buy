import React from 'react';

function Awsome_feature_wrap(props) {
    return(
        <>
            <div className="awsome_secure_date_section wow fadeInUp" id={props.id}>
                <div className="awsome_left_img">                                        
                    <img src={props.Awsome_feature_img} alt="security" />
                </div>
                <div className="awsome_info">
                    <a href="#0">{props.awsome_info_title}</a>
                    <p>{props.awsome_info_dec}.</p>
                </div>
            </div>
        </>
    )
}

export default Awsome_feature_wrap;