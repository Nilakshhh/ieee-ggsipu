import React from "react";
import Heading from "../small compo/Heading";
import Paragraph from "../small compo/Paragraph";

function Aarambh() {
    return(
        <div>
          <div className="evenheadcont">
            <Heading class="evenhead" text="Aarambh"/>
            <Paragraph content="Presenting you a Workshop and a webDev Hackathon" class="evenpara"/>
            <Paragraph content="Registration Closes on 18 September" class="evenpara"/>
            <button className="btn btn-primary btn-lg">Register Now</button>
          </div>

          <div class="para-con">
             <h1>Instructors</h1>
             <div class="sp-box">
                <div class="speaker">
                  <img src="../images/devansh.jpg" alt="Larry"/>
                  <div class="sp-con">
                    <div class="con">
                     <h2>Devansh Oberoi</h2>
                     <p>Frontend Web Developer</p>
                    </div>
                  </div>
                </div>
                <div class="speaker">
                  <img src="../images/Nilaksh.jpeg" alt="John"/>
                  <div class="sp-con">
                    <div class="con">
                     <h2>Nilaksh Dureja</h2>
                     <p>Fullstack Web Developer</p>
                    </div>
                  </div>
                </div>
                <div class="speaker">
                   <img src="../images/Karan.jpg" alt="Jacob"/>
                   <div class="sp-con">
                    <div class="con">
                      <h2>Karan Pandey</h2>
                      <p>ReactJS Developer</p>
                    </div>
                   </div>
                </div>
             </div>
          </div>
          
          
<div class="schedule">
  <h1>Schedule</h1>
  <div class="timeline">
    <div class="conner l">
      <div class="content">
        <h3>10 July 2021</h3>
        <h4>Registration Starts</h4>
      </div>
    </div>
    <div class="conner r">
      <div class="content">
        <h3>17 July 2021</h3>
        <h4>Registration Closes</h4>
      </div>
    </div>
    <div class="conner l">
      <div class="content">
        <h3>19 July 2021</h3>
        <h4>Program Starts</h4>
      </div>
    </div>
    <div class="conner r">
      <div class="content">
        <h3>11 October 2021</h3>
        <h4>Program Ends</h4>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Aarambh;