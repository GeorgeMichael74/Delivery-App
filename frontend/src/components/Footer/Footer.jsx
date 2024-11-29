import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
   return (
      <div
         className="footer"
         id="footer"
      >
         <div className="footer-content">
            {/* ============footer left=============== */}

            <div className="footer-content-left">
               <img
                  src={assets.logo}
                  alt=""
               />
               <p>Bachstraße 17, 54341 Fell</p>
               <div className="footer-social-icons">
                  <img
                     src={assets.facebook_icon}
                     alt=""
                  />
                  <img
                     src={assets.twitter_icon}
                     alt=""
                  />
                  <img
                     src={assets.linkedin_icon}
                     alt=""
                  />
               </div>
            </div>

            {/* ============ footer center ============== */}

            <div className="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
                  <li>Home</li>
                  <li>Über uns</li>
                  <li>Lieferung</li>
                  <li>Datenschutzrichtlinie</li>
               </ul>
            </div>

            {/* =============footer right================ */}

            <div className="footer-content-right">
               <h2>Get in Touch</h2>
               <ul>
                  <li>06502-989 06 34</li>
                  <li>mahartamoyan19@icloud.com</li>
               </ul>
            </div>
         </div>

         <hr />
         <p className="footer-copyright">
            Copyright 2024 &copy; Kebaphaus-Fell - All Right Reserved Design by Michael.
         </p>
      </div>
   );
};

export default Footer;
