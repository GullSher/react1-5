import logo from './logo.svg';
import './App.css';

import Navbar1 from './Menu/Navbar1.jsx';
//import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer1 from './Footer/Footer1.jsx';
// import 'font-awesome/css/font-awesome.min.css';
import Navbar2 from './Menu/Navbar2';
// import { Carousel } from 'react-bootstrap';
import Carousel1 from './Carousel/Carousel1.jsx';

function App() {
  return (
    <div className="App">
<div className="Menu1">
  <Navbar1 />
  <Navbar2 />
</div>      

      <header className="App-header">

{/* 
  <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  
 */}


<div className='Carousel1a'>
        <Carousel1/>
  </div>



      </header>







<div className='Footer1'>
  <Footer1 />
 </div> 
 
 </div> 
 );
}

export default App;
