
import React from 'react';

import product_1 from '../../assets/img/eshop/product_1.png';
import product_2 from '../../assets/img/eshop/product_2.png';
import product_3 from '../../assets/img/eshop/product_3.png';
import product_4 from '../../assets/img/eshop/product_4.png';

const Product_list = () => {
    const product_data = [
        {
            id: "product1",
            productImg: product_1,
            product_title: "Nike shoes1",
            product_dec: "Shop Outdoors1",
            product_price: 125,
        },
        {
            id: "product2",
            productImg: product_2,
            product_title: "Nike shoes2",
            product_dec: "Shop Outdoors2",
            product_price: 260,
        },
        {
            id: "product3",
            productImg: product_3,
            product_title: "Nike shoes3",
            product_dec: "Shop Outdoors3",
            product_price: 145,
        },
        {
            id: "product4",
            productImg: product_4,
            product_title: "Nike shoes4",
            product_dec: "Shop Outdoors4",
            product_price: 350,
        }
    ];

  return (
      <>
    {
        product_data.map((val) => {
            return(
                <div className="col-md-3" id={val.id} key={val.id}>
                    <div className="product_list_main">
                        <div className="product_img">
                            <img src={val.productImg} alt="" />
                        </div>
                        
                        <div className="product_list_price">
                            <div className="product_list_title">
                                <h3>{val.product_title}</h3>
                                <span>{val.product_dec}</span>
                            </div>
                            <div className="product_price">
                                <p>$ <span>{val.product_price}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    </>
  );
}

export default Product_list;
