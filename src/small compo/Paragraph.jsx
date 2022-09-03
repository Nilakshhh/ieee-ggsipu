import React from "react";

function Paragraph(props) {
return(
    <p class={props.class}>{props.content}</p>
)
}

export default Paragraph;