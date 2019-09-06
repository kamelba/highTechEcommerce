import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
class Footer extends Component {
 render() {
   return (
     <div class="footer">
       
       <div className='btnContactPosition'><button className='btnContact'>Contact</button></div>
       <div class="links">

         <div>
           Toutes les marques apparaissant sur highTech.com sont la propriété
           de leurs propriétaires respectifs .
         </div>
         <div class="cookies">
           ©2019 All rights reserved. Privacy and Terms.
         </div>
       </div>
     </div>

    
  

   );
 }
}
export default Footer;
