import Navbar from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Facilities from "./components/Facilities";
import AboutSchool from "./components/AboutSchool";
import AdmissionProcess from "./components/AdmissionProcess";
import NoticeBoard from "./components/NoticeBoard";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <Navbar />
        <Hero/>
        <Stats/>
        <AboutSchool/>
        <Facilities/>
        <AdmissionProcess/>
        <NoticeBoard/>
        <Gallery/>
        <ContactUs/>
        <Footer/>
    </LanguageProvider>
  );
}

export default App;
