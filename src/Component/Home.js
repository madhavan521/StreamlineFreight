import React, { useEffect } from 'react';
import Navbar from './Navbar'
import Header from './Header'
import FeaturesSection from './Features'
import Vehical from './Vehical'
import Pricing from './Pricing'
import Booking from './Booking'
import Footer from './Footer'
import FAQ from './FAQ'

const Home = () => {
  
    useEffect(() => {  
      window.scrollTo(0, 0);  
    }, []); 
    const handleBook = () => {  
        console.log("handleBook called"); 
        const bookingElement = document.getElementById("booking");  
        console.log(bookingElement); 
        if (bookingElement) {  
          bookingElement.scrollIntoView({ behavior: 'smooth' });  
        }  
      };
  return (
    <div>
      <Navbar handleBook={handleBook} />
    <Header />
    <FeaturesSection />
    <Vehical />
    <Pricing />
    <Booking id="booking" />
    <FAQ />
    <Footer />
    </div>
  );
}

export default Home;
