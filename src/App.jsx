import './App.css'
import Banner from './Components/Homepage/Banner'
import Pricing from './Components/Homepage/Pricing'
import Stats from './Components/Homepage/Stats'
import Navbar from './Components/Navigation/Navbar'
import { Suspense } from 'react';
import Started from './Components/Started'


const fetchCard = async () => {
    const response = await fetch("/public/data.json");
    return response.json();
}


function App() {

  const pricePromise = fetchCard();

  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
      <Pricing priceCard={pricePromise}/>
      </Suspense>
      <Started />
    </>
  )
}

export default App
