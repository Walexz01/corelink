import "./App.css";
import Contact from "./Component/Contact/Contact";
import Courses from "./Component/Courses/Courses";
import Facilities from "./Component/Facilities/Facilities";
import FAQs from "./Component/FAQs.jsx/FAQs";
import Campus from "./Component/Global Campus/Campus";
import Header from "./Component/Header/Header";
import Navbar from "./Component/NavBar/Navbar";
import Testimonial from "./Component/Testimonials/Testimonial";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Courses/>
      <Campus/>
      <Facilities/>
      <FAQs/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;
