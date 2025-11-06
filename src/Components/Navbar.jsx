import { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  X,
  BookOpen,
  Grid,
  Building2,
  Target,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { LanguageContext } from "../Context/Context";
import {languageData} from "../Hooks/language.js";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownTimeout = useRef(null);
  const {language} = useContext(LanguageContext)
  

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
        setActiveDropdown(null);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent background scroll when dropdown or mobile menu is open
  useEffect(() => {
    if (activeDropdown || mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeDropdown, mobileMenuOpen]);

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-60 bg-white shadow-md"
      >
        <div className="w-full bg-white text-primary px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
            <Link to="/" className="relative block h-36 w-36">
              <div className="absolute inset-0 bg-[url('/Uploads/main/onlylogo.png')] bg-contain bg-center bg-no-repeat scale-125"></div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className="font-medium transition hover:text-text"
                onClick={closeDropdown}
              >
                {
                  language === 'en' ? languageData.en.home : languageData.jp.home
                }
              </Link>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 font-medium transition hover:text-text">
                  {
                    language === 'en' ? languageData.en.about : languageData.jp.about
                  }
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 font-medium transition hover:text-text">
                  {
                    language === 'en' ? languageData.en.services : languageData.jp.services
                  }
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Study Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("study")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 font-medium transition hover:text-text">
                  {
                    language === 'en' ? languageData.en.studyAbroad : languageData.jp.studyAbroad
                  }
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "study" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* More Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("more")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 font-medium transition hover:text-text">
                  {
                    language === 'en' ? languageData.en.more : languageData.jp.more
                  }
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "more" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
            {/* Contact Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <button className="bg-text text-white px-6 py-2.5 rounded-lg transition font-medium ">
                  {
                    language === 'en' ? languageData.en.contact : languageData.jp.contact
                  }
                </button>
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-primary p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Grid size={24} />}
            </button>
          </div>

          {/* Desktop Dropdown - About */}
          <AnimatePresence>
            {activeDropdown === "about" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Side - Featured */}
                    <div className="bg-background p-6 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="bg-text p-3 rounded-lg flex-shrink-0">
                          <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-text mb-2">
                            {
                              language === 'en' ? languageData.en.aboutKBM : languageData.jp.aboutKBM
                            }
                          </h3>
                          <p className="text-text mb-4">
                            {
                              language === 'en' ? languageData.en.learnAbout : languageData.jp.learnAbout
                            }
                          </p>
                          <Link to="/about" onClick={closeDropdown}>
                            <button className="text-text font-semibold hover:underline flex items-center gap-1">
                              {
                                language === 'en' ? languageData.en.learnMore : languageData.jp.learnMore
                              } →
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Links */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <Building2 className="w-5 h-5" />
                          {
                            language === 'en' ? languageData.en.company : languageData.jp.company
                          }
                        </h4>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/about"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.about : languageData.jp.about
                              }
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/about/team"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.ourTeam : languageData.jp.ourTeam
                              }
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/about/vision"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.missionVision : languageData.jp.missionVision
                              }
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5" />
                              {
                                language === 'en' ? languageData.en.whyChooseUs : languageData.jp.whyChooseUs
                              }
                        </h4>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/about/why-choose-us"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.whyChooseUs : languageData.jp.whyChooseUs
                              }
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/about/success-stories"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.successStories : languageData.jp.successStories
                              }
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/about/testimonials"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.testimonials : languageData.jp.testimonials
                              }
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Dropdown - Services */}
          <AnimatePresence>
            {activeDropdown === "services" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Side - Featured */}
                    <div className="bg-background p-6 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="bg-text p-3 rounded-lg flex-shrink-0">
                          <Briefcase className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-text mb-2">
                            {
                              language === 'en' ? languageData.en.ourServices : languageData.jp.ourServices
                            }
                          </h3>
                          <p className="text-text mb-4">
                            {
                              language === 'en' ? languageData.en.comprehensiveSolutions : languageData.jp.comprehensiveSolutions
                            }
                          </p>
                          <Link to="/services" onClick={closeDropdown}>
                            <button className="text-text font-semibold hover:underline flex items-center gap-1">
                              {
                              language === 'en' ? languageData.en.viewServices : languageData.jp.viewServices
                              } →
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Links */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <GraduationCap className="w-5 h-5" />
                            {
                              language === 'en' ? languageData.en.counseling : languageData.jp.counseling
                            }
                        </h4>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/services/career-counseling"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.careerCounseling : languageData.jp.careerCounseling
                              }
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/university-selection"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.universitySelection : languageData.jp.universitySelection
                              }
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/visa-assistance"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.visaAssistance : languageData.jp.visaAssistance
                              }
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/documentation"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.documentationHelp : languageData.jp.documentationHelp
                              }
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/courses"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.computerTraining : languageData.jp.computerTraining
                              }
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Dropdown - Study */}
          <AnimatePresence>
            {activeDropdown === "study" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
                onMouseEnter={() => handleMouseEnter("study")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Side - Featured */}
                    <div className="bg-background p-6 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="bg-text p-3 rounded-lg flex-shrink-0">
                          <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-text mb-2">
                            {
                              language === 'en' ? languageData.en.startFuture : languageData.jp.startFuture
                            }
                          </h3>
                          <p className="text-text mb-4">
                            {
                              language === 'en' ? languageData.en.exploreStudy : languageData.jp.exploreStudy
                            }
                          </p>
                          <Link to="/study" onClick={closeDropdown}>
                            <button className="text-text font-semibold hover:underline flex items-center gap-1">
                              {
                              language === 'en' ? languageData.en.learnMore : languageData.jp.learnMore
                              } →
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Links */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <BookOpen className="w-5 h-5" />
                          {
                            language === 'en' ? languageData.en.studyIn : languageData.jp.studyIn
                          }
                        </h4>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/study"
                              className="text-gray-700 hover:text-text transition block text-lg"
                              onClick={closeDropdown}
                            >
                            {
                              language === 'en' ? languageData.en.viewOverview : languageData.jp.viewOverview
                            }
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/study/japan"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.studyInJapan : languageData.jp.studyInJapan
                              }
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/study/australia"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.studyinAustralia : languageData.jp.studyinAustralia
                              }
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/study/uk"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.studyinUnitedKingdom : languageData.jp.studyinUnitedKingdom
                              }
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/study/usa"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.studyinUSA : languageData.jp.studyinUSA
                              }
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/study/canada"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.studyinCanada : languageData.jp.studyinCanada
                              }
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Dropdown - More */}
          <AnimatePresence>
            {activeDropdown === "more" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
                onMouseEnter={() => handleMouseEnter("more")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Side - Featured */}
                    <div className="bg-background p-6 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="bg-text p-3 rounded-lg flex-shrink-0">
                          <Grid className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                              {
                                language === 'en' ? languageData.en.exploreMore : languageData.jp.exploreMore
                              }
                          </h3>
                          <p className="text-gray-700 mb-4">
                              {
                                language === 'en' ? languageData.en.discoveradditionalresources : languageData.jp.discoveradditionalresources
                              }
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Links */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-4">
                          {
                            language === 'en' ? languageData.en.resources : languageData.jp.resources
                          }
                        </h4>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/gallery"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                            {
                              language === 'en' ? languageData.en.gallery : languageData.jp.gallery
                            }
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/faq"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.FAQ : languageData.jp.FAQ
                              }
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-4">
                          {
                            language === 'en' ? languageData.en.support : languageData.jp.support
                          }
                        </h4>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/contact"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              {
                                language === 'en' ? languageData.en.contactSupport : languageData.jp.contactSupport
                              }
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 fixed top-20 left-0 right-0 bottom-0 overflow-y-auto"
            >
              <div className="px-6 py-4 space-y-2">
                <Link
                  to="/"
                  className="block text-gray-800 hover:text-text font-medium py-2"
                  onClick={closeDropdown}
                >
                  Home
                </Link>

                {/* About Accordion */}
                <div className="border-t pt-2">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "about-mobile"
                          ? null
                          : "about-mobile"
                      )
                    }
                    className="flex items-center justify-between w-full text-gray-800 hover:text-text font-medium py-2"
                  >
                    About Us
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === "about-mobile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "about-mobile" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-2 pt-2 pb-2">
                          <Link
                            to="/about"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            About Us
                          </Link>
                          <Link
                            to="/about/team"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Our Team
                          </Link>
                          <Link
                            to="/about/vision"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Mission & Vision
                          </Link>
                          <Link
                            to="/about/why-choose-us"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Why Choose Us
                          </Link>
                          <Link
                            to="/about/success-stories"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Success Stories
                          </Link>
                          <Link
                            to="/about/testimonials"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Testimonials
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Accordion */}
                <div className="border-t pt-2">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "services-mobile"
                          ? null
                          : "services-mobile"
                      )
                    }
                    className="flex items-center justify-between w-full text-gray-800 hover:text-text font-medium py-2"
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === "services-mobile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "services-mobile" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-2 pt-2 pb-2">
                          <Link
                            to="/services"
                            className="block text-gray-700 hover:text-text py-1 font-medium"
                            onClick={closeDropdown}
                          >
                            Services Overview
                          </Link>
                          <Link
                            to="/services/career-counseling"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Career Counseling
                          </Link>
                          <Link
                            to="/services/university-selection"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            University Selection
                          </Link>

                          <Link
                            to="/services/documentation"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Documentation Help
                          </Link>
                          <Link
                            to="/services/visa-assistance"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Visa Assistance
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Study Abroad Accordion */}
                <div className="border-t pt-2">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "study-mobile"
                          ? null
                          : "study-mobile"
                      )
                    }
                    className="flex items-center justify-between w-full text-gray-800 hover:text-text font-medium py-2"
                  >
                    Study Abroad
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === "study-mobile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "study-mobile" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-2 pt-2 pb-2">
                          <Link
                            to="/study"
                            className="block text-gray-700 hover:text-text py-1 font-medium"
                            onClick={closeDropdown}
                          >
                            Study Abroad Overview
                          </Link>
                          <Link
                            to="/study/japan"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Study in Japan
                          </Link>
                          <Link
                            to="/study/australia"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Study in Australia
                          </Link>
                          <Link
                            to="/study/uk"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Study in UK
                          </Link>
                          <Link
                            to="/study/usa"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Study in USA
                          </Link>
                          <Link
                            to="/study/canada"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Study in Canada
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* More Accordion */}
                <div className="border-t pt-2">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "more-mobile" ? null : "more-mobile"
                      )
                    }
                    className="flex items-center justify-between w-full text-gray-800 hover:text-text font-medium py-2"
                  >
                    More
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === "more-mobile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "more-mobile" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-2 pt-2 pb-2">
                          <Link
                            to="/gallery"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Gallery
                          </Link>
                          <Link
                            to="/faq"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            FAQ
                          </Link>
                          <Link
                            to="/contact"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Contact Support
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/contact" onClick={closeDropdown}>
                  <button className="w-full bg-text text-white px-6 py-3 rounded-lg transition font-medium mt-4">
                    Contact Us
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay to close dropdown when clicking outside */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20"
            onClick={closeDropdown}
          />
        )}
      </AnimatePresence>
    </>
  );
}
