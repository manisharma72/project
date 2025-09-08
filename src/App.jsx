import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Complaint from "./pages/Complaint";
import Contact from "./pages/Contact";



import RegisterProvider from "./pages/RegisterProvider";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <main className="pt-20">
              <HeroSection />
              <About />
              <Services />
              <Complaint />
              <Contact />
            </main>
          }
        />

        {/* Register Provider Page */}
        <Route path="/register" element={<RegisterProvider />} />

        {/* Individual Service Detail Page */}
        <Route path="/services/:serviceName" element={<ServiceDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
