import React from "react";
import {Link} from "react-router-dom";
function Eventpage() {
    return(
      <div>
      <div class="page-event">
      <div class="cover">
        <div class="heading">events</div>
      </div>

      <div class="container">
        <div class="upcoming-sec">
          <div class="heading">Upcoming Events</div>
        </div>
        <div class="upcoming-event-list">
          <div class="event-block">
            <div class="row">
              <div class="col-lg-2 sec-1">
                <table>
                  <tr>
                    <td>
                      <div class="month">2022 Sept</div>
                      <div class="month-date-devider"></div>
                      <div class="date">21</div>
                    </td>
                    <td class="title">AARAMBH- Tech workshop and hackathon</td>
                  </tr>
                </table>
              </div>
              <div class="col-lg-5 sec-2">
                <img src="./images/Aarambh.png" />
              </div>
              <div class="col-lg-5 sec-3">
                <div class="title"><Link aria-current="page" to="/aarambh">AARAMBH- Tech workshop and hackathon</Link></div>
                <div class="venue">
                  <table>
                    <tr>
                      <td><i class="fa fa-map-marker"></i></td>
                      <td>
                        <div>USICT, GGSIPU</div>
                        <div class="dim-color">
                          <a href="https://www.google.co.in" target="blank">Get Directions</a>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="time">
                  <table>
                    <tr>
                      <td><i class="fa fa-clock-o"></i></td>
                      <td>
                        <div>Saturday, Sept 21 2022</div>
                        <div data-livestamp="1517054400" class="dim-color"></div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="sort-story">"For learning is Growth "</div>
                <div class="group-of-btn">
                  <a href="https://www.google.com" target="blank" class="btn book-ticket">Register Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="upcoming-event-list">
          <div class="event-block">
            <div class="row">
              <div class="col-lg-2 sec-1">
                <table>
                  <tr>
                    <td>
                      <div class="month">2022 Oct</div>
                      <div class="month-date-devider"></div>
                      <div class="date"></div>
                    </td>
                    <td class="title">IEEE Week- Where Tech meets Fun</td>
                  </tr>
                </table>
              </div>
              <div class="col-lg-5 sec-2">
                <img src="./images/coming.png" />
              </div>
              <div class="col-lg-5 sec-3">
                <div class="title">IEEE Week- Where Tech meets Fun</div>
                <div class="venue">
                  <table>
                    <tr>
                      <td><i class="fa fa-map-marker"></i></td>
                      <td>
                        <div>USICT, GGSIPU</div>
                        <div class="dim-color">
                          <a href="https://www.google.co.in" target="blank">Get Directions</a>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="time">
                  <table>
                    <tr>
                      <td><i class="fa fa-clock-o"></i></td>
                      <td>
                        <div>October 2022</div>
                        <div data-livestamp="1517054400" class="dim-color"></div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="sort-story">"No play and all work makes Jack a dull boy"</div>
                
              </div>
            </div>
          </div>
        </div>

        <div class="upcoming-sec">
          <div class="heading">Past Events</div>
        </div>

        
        <div class="upcoming-event-list">
          <div class="event-block">
            <div class="row">
              <div class="col-lg-2 sec-1">
                <table>
                  <tr>
                    <td>
                      <div class="month">2022 Oct</div>
                      <div class="month-date-devider"></div>
                      <div class="date"></div>
                    </td>
                    <td class="title">IEEE Week- Where Tech meets Fun</td>
                  </tr>
                </table>
              </div>
              <div class="col-lg-5 sec-2">
                <img src="./images/umang.jpeg" />
              </div>
              <div class="col-lg-5 sec-3">
                <div class="title">Umang fest</div>
                <div class="venue">
                  <table>
                    <tr>
                      <td><i class="fa fa-map-marker"></i></td>
                      <td>
                        <div>USICT, GGSIPU</div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="time">
                  <table>
                    <tr>
                      <td><i class="fa fa-clock-o"></i></td>
                      <td>
                        <div>April 2021</div>
                        <div data-livestamp="1517054400" class="dim-color"></div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="sort-story">"For a techy world ahead"</div>
                
              </div>
            </div>
          </div>
        </div>

        
      
      </div>
        
</div>      
    </div>
    )
}

export default Eventpage;