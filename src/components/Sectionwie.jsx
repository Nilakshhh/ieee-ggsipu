import React from "react";
import Heading from "../small compo/Heading"
import Image from "../small compo/Image"
import Paragraph from "../small compo/Paragraph"

function Sectionwie() {
    return (
        <div className="wie">
             <Image src="./images/WIE.png" class="WIElogo"/>
           <div className="wietextbox">
             <Paragraph content="WIE GGSIPU, a division of IEEE GGSIPU, is a network of IEEE members and volunteers dedicated to promoting women engineers, and inspiring girls around the world to follow their academic interests in a career in engineering and science. Our goal is to facilitate the recruitment and retention of women in technical disciplines globally. We envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity. Every year, WIE GGSIPU hosts several events with their sole aim being to help and encourage women in technical fields, to follow their dreams and aspirations" />
           </div>
        </div>
    );
}

export default Sectionwie;