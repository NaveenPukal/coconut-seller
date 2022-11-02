// import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Pages/Home ";
import About from "./Pages/About";
import HBI from "./components/AboutComponents/HBI";
import KYC from "./components/AboutComponents/KYC";
import WhyUs from "./components/AboutComponents/WhyUs";
import Header from "./components/HomeComponents.js/Header";
import Footer from "./components/HomeComponents.js/Footer";
import DailyPrice from "./components/DailyPriceComponents/DailyPrice";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route exact path="/about" element={<About />}></Route> */}
        <Route path="/HBI" element={<HBI />}></Route>
        <Route path="/KYC" element={<KYC />}></Route>
        <Route path="/WhyUs" element={<WhyUs />}></Route>
        <Route path="/DailyPrice" element={<DailyPrice />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
