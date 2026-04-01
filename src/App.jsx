import './App.css'
import Banner from './Components/Homepage/Banner'
import Pricing from './Components/Homepage/Pricing'
import Stats from './Components/Homepage/Stats'
import Navbar from './Components/Navigation/Navbar'
import { Suspense, useState } from 'react';
import Started from './Components/Started'
import Packages from './Components/Packages/Packages'
import Footer from '../src/Components/Footer/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const fetchCard = async () => {
    const response = await fetch("/data.json");
    return response.json();
}


function App() {

  const pricePromise = fetchCard();
  const [cart, setCart] = useState([]);

  return (
    <>
       <ToastContainer />
      <Navbar cart={cart}/>
      <Banner />
      <Stats />
      
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
      <Pricing priceCard={pricePromise} cart={cart} setCart={setCart}/>
      </Suspense>
      <Started />
      <Packages />
      <Footer />
    </>
  )
}

export default App
