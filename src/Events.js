import React from "react";
import "./Styles/MenuBar.css";
import "semantic-ui-css/semantic.min.css";

export function Events() {

    return (
        <div>
            <EventDescription />
        </div>
    )
}

export function EventDescription() {
    let eventsArr = [
        {
            title: "Cashier Required",
            img: "Resources/allied.jpg",
            date: "7/13/2021",
            description: "In publishing and graphic design, Lorem ipsum is a text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used"
        },
        {
            title: "2 Months paid internship",
            img: "Resources/afiniti.png",
            date: "7/13/2021",
            description: "In publishing and graphic design, Lorem ipsum is a text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used"
        }
    ]

    return (
        <div class="ui mt-4 grid p-4">
            <div class="two wide column"></div>
            <div class="twelve wide column">
                <h1>Events</h1>
                <hr />
                <div>

                    {
                        eventsArr.map((itms) => {

                            return <div class="ui items">
                                <div class="item shadow-lg p-4">
                                    <div class="ui small image">
                                        <img src={itms.img} />
                                    </div>
                                    <div class="middle aligned content">
                                        <div class="header">{itms.title}</div>
                                        <div class="description">
                                            <p>
                                                {itms.description}
                                            </p>
                                        </div>

                                        <div class="extra">
                                            <div class="ui right floated button green">Register Now</div>
                                        </div>
                                    </div>

                                    <div >
                                        <h3>{itms.date}</h3>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div class="two wide column"></div>
        </div>
    );
}