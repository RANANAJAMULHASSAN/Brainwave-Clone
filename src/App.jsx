import Header from "./components/Header"
import './App.css'
import HeroSection from "./components/HeroSection"
import Benefits from "./components/Benifits"
import Collaboration from "./components/Collaboration"
import Services from "./components/Services"
import Pricing from "./components/Pricing"
import Roadmap from "./components/Roadmap"
import Footer from "./components/Footer"

function App() {

  return (
    <>
     <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header/>
      <HeroSection/>
      <Benefits/>
      <Collaboration/>
      <Services/>
      <Pricing/>
      <Roadmap/>
      <Footer/>
     </div>
    </>
  )
}

export default App
