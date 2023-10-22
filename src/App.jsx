import "./App.css";
import Teacher from "./components/Teacher/Teacher";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Student from "./components/student/Student";
function App() {
  return (
    <div className="landing_page">
      <Hero />
      <About />
      <Teacher />
      <Student />
      <Footer />
    </div>
  );
}

export default App;
