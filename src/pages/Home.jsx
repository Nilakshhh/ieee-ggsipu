import React from "react";
import Sectionhome from "../components/Sectionhome";
import Sectionabout from "../components/Sectionabout";
import Sectionourteam from "../components/Sectionourteam";
import Sectionwie from "../components/Sectionwie";
import Sectionevent from "../components/Sectionevent";

function Home() {
     return (
         <div>
         <Sectionhome />
         <Sectionabout />
         <Sectionourteam />
         <Sectionwie />
         <Sectionevent />
         </div>
     )
 }

 export default Home;
