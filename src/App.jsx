import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero"; 
import Tasks from "./components/Tasks"
import Courses from "./components/Courses";
import FreeCourses from "./components/FreeCourses"
import WhyUs from "./components/WhyUs";
import Reviews from "./components/Reviews";
import Olympiad from "./components/Olympiad";
import Footer from "./components/Footer";
import RegisterModal from "./components/RegisterModal";

export default function  App() {
  const [openRegister, setOpenRegister] = useState(false);
  
  return(
    <div>
    <Header onRegister={() => setOpenRegister(true)}/>
    <Hero />
    <Tasks />
    <Courses />
    <FreeCourses />
    <WhyUs />
    <Reviews />
    <Olympiad />
    <Footer />
    {openRegister && (<RegisterModal close={() => setOpenRegister(false)} /> )}
</div>
  )
}
  