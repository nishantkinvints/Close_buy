import './App.css';

import "../src/assets/css/style.css";
import "../src/assets/css/responsive.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 
import Header from '../src/Component/Header';
import Homebanner from '../src/Component/Home_banner';
import Awsome_feature from '../src/Component/Awesome _feature';
import Footer from '../src/Component/Footer';
import Tab from '../src/Component/Tab_component';

function App() {
  return (
    <>
      <Header />
      <Homebanner />  
      <Awsome_feature />
      <Footer />
      {/* <Tab /> */}
    </>
  );
}

export default App;
