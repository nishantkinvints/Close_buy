
import React from 'react';

// import Logo from '../../assets/img/eshop/logo.png';

import Logo from '../../assets/img/eshop/logo.png';

const Header = () => {
  return (
    <div className="main_header_section">
        <header>
            <div className="container">
                <div className="inner_header">
                    <a href="#0" className="logo">
                        <img src={Logo} alt="logo" />
                        <p>Sho<span>e</span> Shop</p>
                    </a>

                    <div className="toggle_menu_section">
                        <div className="toggle_circle">
                            {/* <div id="toggle">
                                <div className="one"></div>
                                <div className="two"></div>
                                <div className="three"></div>
                            </div> */}
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </div>
                    </div>  
                </div>
            </div>
        </header>
    </div>
  );
}

export default Header;
