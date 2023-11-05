import React from "react"
import {Link} from "react-router-dom"

function Footer(){
    return(
        
      <footer>
      <div className="footer">
        <div className="row">
          <p>Career</p>
          <p>Contact us</p>
          <p>Our Services</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div className="icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-youtube"></i>
          <i className="fa fa-twitter"></i>
        </div>

        <div className="footerText">
          Copyright © 2023 Inferno - All rights reserved || Designed By: Jyoti Mukherjee
        </div>
      </div>
    </footer>
  );
};

export default Footer;