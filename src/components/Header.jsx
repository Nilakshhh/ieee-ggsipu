import React from "react";
 function Header() {
   return(
   <nav class="navbar navbar-expand-lg bg-light">
   <div class="container-fluid">
     <img src="../images/ieeeusictlogo.png" className="smalll"/>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"><i class="fa-solid fa-sliders fa-4x"></i></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNav">
       <ul class="navbar-nav justify-content-end">
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="/">Home</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="/#aboutus">About Us</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="/events">Upcoming events</a>
         </li>
       </ul>
       <div className="extrasection">
       <a href="https://instagram.com/ieeeggsipu?igshid=YmMyMTA2M2Y="><i class="fa-brands fa-4x fa-instagram"></i></a>
       <a href="https://www.linkedin.com/company/ieeeggsipu/"><i class="fa-brands fa-4x fa-linkedin"></i></a>
       </div>
     </div>
   </div>
 </nav>
   )
 }

 export default Header;