import React from 'react';
import './App.css';
import "../src/assets/css/style.css";
import "../src/assets/css/animate.css";
import "../src/assets/css/responsive.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 
import Header from '../src/Component/Header';
import Homebanner from '../src/Component/Home_banner';
import Awsome_feature from '../src/Component/Awesome _feature';
import Footer from '../src/Component/Footer';

import WOW from 'wowjs';

class App extends React.Component {

  componentDidMount() {
    new WOW.WOW({
      live: false
  }).init();
  }

  render() {
    return (
      <>
        <Header />
        <Homebanner />  
        <Awsome_feature />
        <Footer />
      </>
    );
  }
}



// function App() {


//   return (
//     <>
//       <Header />
//       <Homebanner />  
//       <Awsome_feature />
//       <Footer />
//     </>
//   );
// }

export default App;
