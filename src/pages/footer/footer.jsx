import React from 'react';
import "./style.scss"
import logo from "../../assets/images/Vector (1).png"
const Footer = () => {
    return <footer className="footer">
          <div className="container">
              <div className="footer_content">
                  <div className="footer_logo">
                      <img src={logo} alt=""/>
                  </div>

                  <div className="footer_menu_row1">
                      <ul>
                          <li>
                              <a href="">B2B cold calling</a>
                          </li>
                          <li>
                              <a href="">Sales assistance</a>
                          </li>
                          <li>
                              <a href="">Social selling</a>
                          </li>
                          <li>
                              <a href="">Establishment of CRM processes</a>
                          </li>
                          <li>
                              <a href="">Creation of BI dashboards</a>
                          </li>

                      </ul>
                  </div>
                  <div className="footer_menu_row2">
                      <ul>
                          <li><a href="">Sales process</a></li>
                          <li><a href="">Consulting</a></li>
                          <li><a href="">Training of internal teams</a></li>
                          <li><a href="">Why us?</a></li>
                          <li><a href="">Impressum</a></li>
                          <li><a href="">Datenschutzerklärung</a></li>
                      </ul>
                  </div>
                  <div className="footer_menu_row3">
                      <ul>
                          <li><a href="">About us</a></li>
                          <li><a href="">References</a></li>
                          <li><a href="">Career</a></li>
                          <li><a href="">Blog</a></li>
                          <li><a href="">Contact us</a></li>
                      </ul>
                  </div>

                 <div className="footer_contact">
                    <div className="footer_contact_icons">
                         <a href='' target="_blank"  className="icon-linkedin2"></a>
                        <a href='' target="_blank" className="icon-svgxmlbase642"></a>
                        <a href='' target="_blank" className="icon-svgxmlbase643"></a>
                        <a href='' target="_blank" className="icon-svgxmlbase644"></a>
                    </div>

                     <div className="footer_contact_info">
                         <div className="footer_contact_location_phone">

                             <div className="footer_contact_location">
                                 <span className="icon-location"></span>
                                 <div>
                                     <p>Hochstraße23 </p>
                                     <p> 76530 Baden-Baden</p>
                                 </div>

                             </div>

                             <div className="footer_contact_phone">
                                 <span className="icon-phone"></span>
                                 <a href="tel:123-456-7890">+49 176 8 2325 122</a>
                             </div>
                         </div>


                         <div className="footer_contact_email">
                             <span className="icon-envelop"></span>
                             <a href = "mailto: kern@firstcallagency.de">kern@firstcallagency.de</a>
                         </div>

                     </div>

                 </div>
              </div>


              <div className="footer_end">
                   <p>© 2023 FISTCALL.COM  all rights reserved </p>
              </div>
              <div className="footer_end_icon">
                  <span className="icon-Frame-2"></span>
              </div>
          </div>
    </footer>
};

export default Footer;