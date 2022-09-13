import React from "react";
import {Link} from "react-router-dom"; 
 function Header() {
   return(
   <nav class="navbar navbar-expand-lg bg-light">
   <div class="container-fluid">
     <img src="./images/ieeeggsipulogo.png" className="smalll"/>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"><i class="fa-solid fa-sliders fa-4x"></i></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNav">
       <ul class="navbar-nav justify-content-end">
         <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Home</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="/#aboutus">About Us</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="/events">Events</Link>
         </li>
       </ul>
       <div className="extrasection">
       <a href="https://instagram.com/ieeeggsipu?igshid=YmMyMTA2M2Y="><i class="fa-brands fa-3x fa-instagram"></i></a>
       <a href="https://www.linkedin.com/company/ieeeggsipu/"><i class="fa-brands fa-3x fa-linkedin"></i></a>
       <a href="https://m.facebook.com/706218599427060/"><i class="fa-brands fa-3x fa-facebook"></i></a>
       </div>
     </div>
   </div>
 </nav>
   )
 }

 export default Header;