
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import "./styles.css"
import { Routes, Route } from "react-router-dom"
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <ToastContainer />
  <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/services" element={ <Services/> } />
        <Route path="/projects" element={ <Projects/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
