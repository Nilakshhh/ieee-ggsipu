import React from "react";
import Image from "../small compo/Image";
import Paragraph from "../small compo/Paragraph";
import Heading from "../small compo/Heading";

function Card(props){
return (
    <figure class="snip1174 red">
  <Image src={props.src}/>
  <figcaption>
    <Heading class="invi" text={props.text}/>
    <Paragraph content={props.content} />
  </figcaption>
</figure>

)
}

export default Card;