import Navbar from "./components/NavBar";
import Banner from "./assets/UI/banner.png";
import AboutUs from "./pages/AboutUs/AboutUs";
import "./App.css";
import Footer from "./components/Footer";
import JoinWithUs from "./pages/JoinWithUs/JoinWithUs";
import Partner from "./pages/Partner/Partner";
import Media from "./pages/Media/Media";
import Member from "./pages/Member/Member";
import SlideBreak from "./components/SlideBreak";
import { useRef } from "react";

function App() {
  const aboutUsRef = useRef(null);
  const memberRef = useRef(null);
  const activityRef = useRef(null);
  return (
    <div className="App relative">
      <Navbar sections={{ aboutUsRef, memberRef, activityRef }}></Navbar>
      <img className="w-full object-cover" src={Banner} alt="banner" />
      <AboutUs ref={aboutUsRef} />
      <SlideBreak
        titles={[
          "FC INFINITY TALK",
          "MORE THAN A FAMILY",
          "FC INFINITY TALK",
          "MORE THAN A CLUB",
          "FC INFINITY TALK",
          "MORE THAN A SPORT",
        ]}
      />
      <Member ref={memberRef} />
      <SlideBreak
        titles={[
          "FC INFINITY TALK",
          "MORE THAN A FAMILY",
          "FC INFINITY TALK",
          "MORE THAN A CLUB",
          "FC INFINITY TALK",
          "MORE THAN A SPORT",
        ]}
      />
      <Partner />
      <Media ref={activityRef} />
      <JoinWithUs />
      <Footer />
    </div>
  );
}

export default App;
