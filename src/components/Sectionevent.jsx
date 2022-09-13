import React from "react";
import Heading from "../small compo/Heading"
function Sectionevent() {
    return(<div className="ourevent">
        <Heading text="Past Events" class="aboutheading"/>
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/umang.jpeg" class="d-block" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="./images/workshop.jpg" class="d-block" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="./images/event.jpg" class="d-block" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div></div>
    )
}

export default Sectionevent;