
import React from "react";
import LandingPage from "./pages/landing-page";
import MasterPieces from "./pages/masterpieces";
import Blog from "./pages/blog";
import Navbar from './components/layouts/Navbar'
import MobileFooter from './components/layouts/MobileFooter'
import Footer from './components/layouts/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChiscoDetails from "./pages/page-details/chisco-court";
import RehobothDetails from "./pages/page-details/rehoboth";
import LegacyPlaceDetails from "./pages/page-details/legacy-place";
import BoardOfDirectors from "./pages/board-of-directors";
import ManagementTeam from "./pages/management-team";
import OurStory from "./pages/our-story";
import ContactUs from "./pages/contact-us";
import ContactUsSuccess from "./pages/contact-us/ContactUsSuccess";
import TermsOfUse from "./pages/terms-of-use";

function App() {
 

  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
    
    <Route index element={<LandingPage />} />
    <Route path="masterpieces" element={<MasterPieces />} />
    <Route path="blog" element={<Blog />} />
    <Route path="chisco-details" element={<ChiscoDetails />} />
    <Route path="rehoboth-details" element={<RehobothDetails />} />
    <Route path="legacy-place" element={<LegacyPlaceDetails/>} />
    <Route path="board-of-directors" element={<BoardOfDirectors />} />
    <Route path="board-of-directors/:directorId" element={<BoardOfDirectors />} />
    <Route path="management-team" element={<ManagementTeam />} />
    <Route path="management-team/:managerId" element={<ManagementTeam />} />
    <Route path="our-story" element={<OurStory/>} />
    <Route path="contact-us" element={<ContactUs/>} />
    <Route path="contact-us-success" element={<ContactUsSuccess/>} />
    <Route path="terms-of-use" element={<TermsOfUse/>} />


     
     
      </Routes>
      <MobileFooter />
      <Footer />
      </BrowserRouter>
  );
}

export default App;
