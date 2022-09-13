import React from "react";
import Image from "../small compo/Image"
import Heading from "../small compo/Heading"
import Card from "./card";
function Sectionourteam() {
    return (<div class="ourteam">
             <Heading text="Our Team" class="aboutourteam"/>
        <div>
        <div className="teacher-card">
          <Card src="./images/ashish.jpeg" text="Ashish Payal" content="He is an excellent academician, holding a PhD as well as MTech in Computer Science along with MBA in HR and is currently serving as an Assistant Professor in USICT. He has over a decade of teaching experience with expertise in Computer Networks, supplemented by a myriad of research papers. He has mentored and guided hundreds of students and has been a very active part of IEEE USICT as our Branch Counselor."/>
          <Card src="./images/kamaldeep.jpg" text="Kamaldeep Kaur" content="has a PhD and MTech in CSE and expertise in Computer Architecture, Microprocessors and Digital Electronics. She is currently an Assistant Professor in USICT. She has always been vocal in support of Women in Engineering and Technical Fields and is always open to assist and help students who approach her for guidance. She presides over our WIE subchapter as the WIE Branch Counselor for USICT."/>
        </div>
        <Heading text="Our Executive Comittee" class="aboutourteam"/>
        <div className="student-card">
          <Card src="./images/devansh.jpg" text="Devansh Oberoi" content="Chairperson"/>
          <Card src="./images/Karan.jpg" text="Karan Pandey" content="General Secretary"/>
          <Card src="./images/Aadya.jpeg" text="Aadya Bubber" content="WIE Chairperson"/>
        </div>
        <div className="student-card">
          <Card src="./images/Prince.jpg" text="Prince" content="Treasurer"/>
          <Card src="./images/Aakriti.jpg" text="Aakriti Saxena" content="WIE Vice Chairperson"/>
          <Card src="./images/himanshu.jpeg" text="Himanshu Sisodia" content="WIE Vice Chairperson"/>
        </div>
        <Heading text="Branch Mentors" class="aboutourteam"/>
        <div className="student-card">
          <Card src="./images/abhishek.jpeg" text="Abhishek" content="Branch Mentor"/>
          <Card src="./images/wamika.jpeg" text="Wamika Jha" content="Branch Mentor"/>
          <Card src="./images/Ragini.jpeg" text="Ragini Bhayana" content="Branch Mentor"/>
        </div>
        <Heading text="Our Technical Team" class="aboutourteam"/>
        <div className="teacher-card">
        <Card src="./images/Nilaksh.jpeg" text="Nilaksh Dureja" content="Technical Lead"/>
        <Card src="./images/Aryavir.jpeg" text="Aryavir Malik" content="Technical member"/>
        </div>
        </div>
</div>)

}

export default Sectionourteam;