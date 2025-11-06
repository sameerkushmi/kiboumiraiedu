import { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ServicesPage from "./Pages/ServicesPage";
import Form from "./Components/HelperComponents/Form";
import Navbar from "./Components/Navbar";
import Footer2 from "./Components/Footer2";
import StudyPage from "./Pages/StudyPage";
import Team from "./Components/AboutComponents/SubPages/Team/Team";
import VisionIndex from "./Components/AboutComponents/SubPages/Vision/VisionIndex";
import ScrollToTop from "./Components/HelperComponents/ScrollToTop";
import TestimonialsMain from "./Components/AboutComponents/SubPages/Testimonials/TestimonialsMain";
import SuccessStories from "./Components/AboutComponents/SubPages/SuccessStories/SuccessStories";
import AboutWhyMain from "./Components/AboutComponents/SubPages/Why/AboutWhyMain";
import FaqMain from "./Components/FAQComponents/FaqMain";
import JapanMain from "./Components/StudyComponents/Japan/JapanMain";
import AusMain from "./Components/StudyComponents/Australia/AusMain";
import UkMain from "./Components/StudyComponents/UK/UkMain";
import CadMain from "./Components/StudyComponents/Canada/CadMain";
import UsMain from "./Components/StudyComponents/USA/UsMain";
import TestsMain from "./Components/TestsComponents/TestsMain";
import GalleryPage from "./Pages/GalleryPage";
import { Toaster } from "react-hot-toast";
import CounsellingMain from "./Components/ServicesComponents/SubPages/Counselling/CounsellingMain";
import UniSelmain from "./Components/ServicesComponents/SubPages/UniversitySelection/UniSelmain";
import NotFound from "./Components/HelperComponents/NotFound";
import VisaMain from "./Components/ServicesComponents/SubPages/VisaAssistance.jsx/VisaMain";
import DocMain from "./Components/ServicesComponents/SubPages/Documentation/DocMain";
import { LanguageContext } from "./Context/Context";
import CoursesMain from "./Components/ServicesComponents/SubPages/Courses/CoursesMain";

function App() {
  const location = useLocation();

  // Paths where Navbar and Footer should be hidden
  const hideLayout =
    location.pathname === "/not-found" || location.pathname === "*";

  const [language, setLanguage] = useState('en');

  return (
    <>
    <LanguageContext.Provider value={{language,setLanguage}}>
      <Toaster position="top" />
      <ScrollToTop />

      {!hideLayout && <Navbar />}
      {!hideLayout && <Form />}

      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<Team />} path="/about/team" />
        <Route element={<VisionIndex />} path="/about/vision" />
        <Route element={<TestimonialsMain />} path="/about/testimonials" />
        <Route element={<SuccessStories />} path="/about/success-stories" />
        <Route element={<AboutWhyMain />} path="/about/why-choose-us" />

        <Route element={<ServicesPage />} path="/services" />
        <Route element={<UniSelmain />} path="/services/university-selection" />
        <Route
          element={<CounsellingMain />}
          path="/services/career-counseling"
        />
        <Route element={<VisaMain />} path="/services/visa-assistance" />
        <Route element={<DocMain />} path="/services/documentation" />
        <Route path='/services/courses' element={<CoursesMain/>}/>
        {/* to="/services/visa-assistance" */}
        {/* to="/services/documentation" */}
        <Route element={<StudyPage />} path="/study" />
        <Route element={<JapanMain />} path="/study/japan" />
        <Route element={<AusMain />} path="/study/australia" />
        <Route element={<UkMain />} path="/study/uk" />
        <Route element={<CadMain />} path="/study/canada" />
        <Route element={<UsMain />} path="/study/usa" />

        <Route element={<FaqMain />} path="/faq" />
        <Route element={<TestsMain />} path="/tests" />
        <Route element={<GalleryPage />} path="/gallery" />
        <Route element={<ContactPage />} path="/contact" />

        {/* 404 Page */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>

      {!hideLayout && <Footer2 />}
      </LanguageContext.Provider>
    </>
  );
}

export default App;
