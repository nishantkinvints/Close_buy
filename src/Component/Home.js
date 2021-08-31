
import React from 'react';
import Header from '../Component/Inner_component/Header';
import Home_banner from '../Component/Inner_component/Home_banner';
import {Nike_air, Popular_arrivals, Pre_fall_collection} from '../Component/Inner_component/Home_banner';
import Thought_slider from '../Component/Inner_component/thought_slider';
import Latest_blog_slider from '../Component/Inner_component/Latest_blog_slider';
import Footer from '../Component/Inner_component/footer';

function Home() {
  return (
    <>
        <Header />
        <Home_banner />
        <Nike_air />
        <Popular_arrivals />
        <Pre_fall_collection />
        <Thought_slider />
        <Latest_blog_slider />
        <Footer />
    </>        
  );
}

export default Home;
