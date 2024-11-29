import React from "react";
import "./Navbar.css";
import { assets } from '../../assets/assets';

const Navbar = () => {
   return(
    <div className="navbar">
        <img className="logo" src={assets.logo} alt="logo_bild" />
        <img className="profile"  src={assets.profile_image} alt="profile-bild" />
    </div>
   )
};

export default Navbar;
