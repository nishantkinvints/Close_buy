import React, { useState } from 'react';


const Tab = () => {

    const [toggle_tab, settoggle_tab] = useState(1);

    const toggleTab = (index) => {
        settoggle_tab(index);
    }

    return(
        <div className="container">
            <div className="ab_header_block">
                <div 
                    className={toggle_tab === 1 ? 'tab_header active' : 'tab_header'}
                    onClick={() => toggleTab(1)}>
                    Tab 1
                </div>
                <div 
                    className={toggle_tab === 2 ? 'tab_header active' : 'tab_header'}
                    onClick={() => toggleTab(2)}>
                    Tab 2
                </div>
                <div 
                    className={toggle_tab === 3 ? 'tab_header active' : 'tab_header'}
                    onClick={() => toggleTab(3)}>
                    Tab 3
                </div>
            </div>

            <div className="tab_main_content">
                <div className={toggle_tab === 1 ? 'tab_inner_content active' : 'tab_inner_content'}>
                    <h2>tab 1 content</h2>
                </div>
                <div className={toggle_tab === 2 ? 'tab_inner_content active' : 'tab_inner_content'}>
                    <h2>tab 2 content</h2>
                </div>
                <div className={toggle_tab === 3 ? 'tab_inner_content active' : 'tab_inner_content'}>
                    <h2>tab 3 content</h2>
                </div>
            </div>
        </div>
    )
}

export default Tab;