import React from "react";
import Sectionhome from "../components/Sectionhome";
import Sectionabout from "../components/Sectionabout";
import Sectionourteam from "../components/Sectionourteam";
import Sectionwie from "../components/Sectionwie";
import Sectioneventcarousel from "../components/Sectioneventcarousel";

function Home() {
     return (
         <div>
         <Sectionhome />
         <Sectionabout />
         <Sectionourteam />
         <Sectionwie />
         <Sectioneventcarousel />
         </div>
     )
 }

 export default Home;