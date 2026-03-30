import './App.css'
import Banner from './Components/Homepage/Banner'
import Pricing from './Components/Homepage/Pricing'
import Stats from './Components/Homepage/Stats'
import Navbar from './Components/Navigation/Navbar'
import { Suspense } from 'react';


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
      
      <Suspense fallback={"Loading...."}>
      <Pricing priceCard={pricePromise}/>
      </Suspense>
      
    </>
  )
}

export default App
