import React, { createRef } from "react";

import "./Styles/MenuBar.css";
import "./Styles/HomepageContent.css";
import { Button, Grid, Image, Form, Message } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { EventDescription } from "./Events";
import Carousel from "semantic-ui-carousel-react";

export class HomepageContent extends React.Component {
  super(props) {}

  render() {
    return (
      <div>
        <div class="ui grid shadow-sm mt-4 stackable">
          <div class="five wide column">
            <img src="Resources/iba-bg1.jpg" class="orgPic" />
          </div>

          <div class="seven wide column">
            <h1>Golden words</h1>
            <p className="aboutIBA">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text

            </p>
          </div>

          <div class="four wide column">
            <img src="Resources/Dr-Nisar.jpg" class="orgPic" />
          </div>
        </div>
        <StoriesAndEvents />
        <hr />
        <Headlines />
        <hr />
        <Jobs />
        <hr />
        <FindUs />

        <hr />
        <SubscribeToEmail />
      </div>
    );
  }
}

// Stackable makes components flow on mobile view
function StoriesAndEvents() {
  return (
    <div class="ui mt-4 grid p-4 stackable">
      <div class="two wide column"></div>
      <div class="five wide column">
        <h1>Stories</h1>
        <hr></hr>

        <div class="ui divided items">
          <div class="item">
            <div class="image">
              <img src="Resources/nadir.jpg" />
            </div>
            <div class="content">
              <a class="header">Google Invites from USA</a>
              <div class="meta">
                <span class="cinema">{new Date().toDateString()}</span>
              </div>
              <div class="description">
                <p>
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available. In publishing and graphic design, Lorem ipsum is a
                  placeholder text
                </p>
              </div>
              <div class="extra">
                <div class="ui right floated primary button">
                  Read More
                  <i class="right chevron icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="two wide column"></div>
      <div class="five wide column ">
        <h1>Programs & Events</h1>
        <hr></hr>
        <div class="ui card red">
          <div class="content">
            <div class="header">Cute Dog</div>
            <div class="meta">
              <span>{new Date().toDateString()}</span>
            </div>
            <hr></hr>
            <div class="description">
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used
              </p>
            </div>
          </div>
          <div class="extra content">
            <div class="ui bottom attached button green">
              <i class="sign-in icon"></i>
              Register NOW
            </div>
          </div>
        </div>
      </div>
      <div class="two wide column"></div>
    </div>
  );
}

function Headlines() {
  return (
    <div class="ui mt-4 grid p-4 stackable">
      <div class="two wide column"></div>
      <div class="twelve wide column">
        <h1>Headlines</h1>
        <hr></hr>
        <HeadlinesCarousel />
      </div>
      <div class="two wide column"></div>
    </div>
  );
}

function Jobs() {
  return (
    <div>
      <JobDescription/>
      </div>
    );
}



export function JobDescription() {
  let jobsArr = [
    {
        title: "Cashier Required",
        img: "Resources/allied.jpg",
        description: "In publishing and graphic design, Lorem ipsum is a text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used"
    },
    {
        title: "2 Months paid internship",
        img: "Resources/afiniti.png",
        description: "In publishing and graphic design, Lorem ipsum is a text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used"
    }
]

return (
    <div class="ui mt-4 grid p-4">
        <div class="two wide column"></div>
        <div class="twelve wide column">
            <h1>Jobs and Internships</h1>
            <hr />
            <div>
                
            {
                jobsArr.map((itms) => {
                    
                    return <div class="ui items">
                    <div class="item shadow-sm p-4">
                      <div class="ui small image">
                       <img src={itms.img} />
                            </div>
                            <div class="middle aligned content">
              <div class="header">Cashier Required</div>
              <div class="description">
               <p>
                                        {itms.description}
                                    </p>
                                </div>
                                <div class="extra">
                <div class="ui right floated button green">Apply Now</div>
              </div>
                            </div>
                        </div>
                    </div>


                })
            }
            </div>
        </div>
        <div class="two wide column"></div>
    </div>
);  }
  

function FindUs() {
  return (
    <div class="ui mt-4 grid p-4">
      <div class="two wide column"></div>
      <div class="twelve wide column">
        <h1>Find Us</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.6929204689895!2d68.81694891428019!3d27.726766031246907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d4af0e0f6721%3A0x6a57455ae708c7b!2sSukkur%20IBA%20University!5e0!3m2!1sen!2s!4v1622825096346!5m2!1sen!2s"
          width="1000"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        <div class="two wide column"></div>
      </div>
    </div>
  );
}

const HeadlinesCarousel = () => {
  let elements = [
    {
      render: () => {
        return <Image src="Resources/iba-bg1.jpg" />;
      },
    },
    {
      render: () => {
        return <Image src="Resources/iba-bg2.jpg" />;
      },
    },
    {
      render: () => {
        return <Image src="Resources/maya.jpg" />;
      },
    },
  ];
  return (
    <div style={{ width: 500 }}>
      <Carousel
        elements={elements}
        duration={3000}
        animation="slide down"
        showNextPrev={false}
        showIndicators={true}
      />
    </div>
  );
};

function SubscribeToEmail() {
  return (
    <div class="ui mt-4 grid p-4">
      <div class="two wide column"></div>
      <div class="twelve wide column">
        <h1>Subscribe To Our Daily Feed</h1>
        <Form success>
          <Form.Input label="Email" placeholder="joe@schmoe.com" />
          <div class="ui left floated button blue">Subscribe</div>

        </Form>
      </div>
      <div class="two wide column"></div>
    </div>
  );
}