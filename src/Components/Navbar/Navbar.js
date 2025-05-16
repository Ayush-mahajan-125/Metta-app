import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import mettaLogo from "../../assets/img/metta-logo.png";
import { useLanguage } from "../../LanguageContext";
import "./Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const { translate } = useLanguage();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (

    <>
      <div className="bg-primary-color fixed-top">
        <nav className="navbar navbar-expand-lg msm-navmenu-bar">
          <div className="container">
            <NavLink className="navbar-brand text-success" to="/">
              <img
                src={mettaLogo}
                className="img-fluid msm-w-25"
                alt="MeTta Financial Investment & Trading Training Institute"
                loading="lazy"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="navbarSupportedContent"
              aria-expanded={!isNavCollapsed}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto text-center text-white">
                {/* Home */}
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    onClick={() => setIsNavCollapsed(true)}
                  >
                    {translate("Home")}
                  </NavLink>
                </li>
                {/* /Home */}

                {/* Enrollment */}
                <li className="nav-item px-1">
                  <NavLink
                    className="nav-link"
                    to="/enrollment-form"
                    onClick={() => setIsNavCollapsed(true)}
                  >
                    {translate("Enrollment Form")}
                  </NavLink>
                </li>
                {/* /Enrollment */}

                {/* Modules */}
                <li className="nav-item ">
                  <NavLink
                    className="nav-link"
                    to="/share-market-courses"
                    onClick={() => setIsNavCollapsed(true)}
                  >
                    {translate("Course Modules")}
                  </NavLink>
                </li>
                {/* /Modules */}

                {/* Chart */}
                <li className="nav-item px-2">
                  <NavLink
                    className="nav-link"
                    to="https://chart.mettasharemarket.in/"
                    onClick={() => setIsNavCollapsed(true)}
                  >
                    {translate("Metta chart")}
                  </NavLink>
                </li>
                {/* /Chart */}

                 {/* Resources */}
                 <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/resources"
                    onClick={() => setIsNavCollapsed(true)}
                  >
                    {translate("Resources")}
                  </NavLink>
                </li>
                {/* /Resources */}

                {/* Contact us */}
                <li className="nav-item px-1">
                  <NavLink
                    className="nav-link"
                    to="/contact-us"
                    onClick={() => setIsNavCollapsed(true)}
                  >
                    {translate("Contact us")}
                  </NavLink>
                </li>
                {/* /Contact us */}

                <li
                  className="nav-item position-relative"
                  onMouseEnter={() => setAboutMenuOpen(true)}
                  onMouseLeave={() => setAboutMenuOpen(false)}
                >
                  <span className="nav-link cursor-pointer dropdown-toggle">
                    {translate("About us")}
                  </span>

                  <AnimatePresence>
                    {aboutMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="position-absolute bg-white shadow-lg px-3 py-2 rounded-3 gap-3 justify-content-start msm-mobile-view"
                        style={{
                          top: "100%",
                          left: "0",
                          width: "210px",
                          zIndex: "1000",
                        }}
                      >
                        {/* about us */}
                        <NavLink
                          className="nav-link msm-text-dark-color"
                          to="/about-us"
                          onClick={() => setIsNavCollapsed(true)}
                        >
                          {translate("About Metta")}
                        </NavLink>
                        {/* /about us */}

                        {/* Gallery */}
                        <NavLink
                          className="nav-link msm-text-dark-color"
                          to="/gallery"
                          onClick={() => setIsNavCollapsed(true)}
                        >
                          {translate("Gallery")}
                        </NavLink>
                        {/* /Gallery */}

                        {/* Testimonials */}
                        <NavLink
                          className="nav-link msm-text-dark-color"
                          to="/testimonial"
                          onClick={() => setIsNavCollapsed(true)}
                        >
                          {translate("Testimonial")}
                        </NavLink>
                        {/* /Testimonials */}

                        {/* Calculator */}
                        <li className="nav-item">
                          <NavLink
                            className="nav-link msm-text-blue"
                            to="/sip-calculator"
                            onClick={() => setIsNavCollapsed(true)}
                          >
                            {translate("SIP Calculator")}
                          </NavLink>
                        </li>
                        {/* /Calculator */}

                        {/* CAGRCalculator */}
                        <li className="nav-item">
                          <NavLink
                            className="nav-link msm-text-dark-color"
                            to="/cagr-calculator"
                            onClick={() => setIsNavCollapsed(true)}
                          >
                            {translate("CAGR Calculator")}
                          </NavLink>
                        </li>
                        {/* /CAGRCalculator */}

                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>


                {/* Blogs */}
                <li className="nav-item px-2">
                  <NavLink
                    className="nav-link"
                    to="https://blogs.mettasharemarket.in/"
                    onClick={() => setIsNavCollapsed(true)}
                  >
                    {translate("Blogs")}
                  </NavLink>
                </li>
                {/* /Blogs */}

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
