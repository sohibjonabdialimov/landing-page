import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Teacher from "./components/teacher/Teacher";
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
