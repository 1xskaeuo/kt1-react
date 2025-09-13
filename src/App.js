
import './App.css';
import Header from "./components/Header/Header.js"
import Hero from "./components/Hero/Hero.js"
import Offer from "./components/Offer/Offer.js"
import Promo from "./components/Promo/Promo.js"
import Services from "./components/Services/Services.js"
import Rental from "./components/Rental/Rental.js"
export default  function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Offer/>
        <Promo/>
        <Services/>
        <Rental/>
    </div>
  );
}


