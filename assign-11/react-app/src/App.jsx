import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Optional from "./components/Optional";


const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
     <About/>
     <Service/>
     <Project/>
     <Footer/>
     <Optional/>
    </div>
  );
};

export default App;