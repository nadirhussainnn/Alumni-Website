import { Button } from "bootstrap";
import React from "react";
import { useState } from "react";
import "semantic-ui-css/semantic.min.css";
export function ViewUpcomingEvents(){

    console.log("Comes")
    return(
        <div class="container">
      <div class="ui grid mt-8 ms-2">
        <div class="one wide column"></div>
        <div class="fourteen wide column">
          <div id="">
            <ViewEvents/>
          </div>
        </div>

        <div class="one wide column">
        </div>
      </div>
    </div>
    )
}

export function ViewEvents() {
  let eventsArr = [
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
const[event, setEvents]=useState(eventsArr)

function handleDeleteMember(title){
    const filteredArray = event.filter((evt)=>{
        return evt.title !== title
      } ) 
      setEvents(filteredArray)
    
}

return (
    <div class="ui mt-4 grid p-4">
        <div class="two wide column"></div>
        <div class="twelve wide column">
            <h1>Events</h1>
            <hr />
            <div>
                
            {
                event.map((itms) => {
                    
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
                                    <div onClick={()=>{
                handleDeleteMember(itms.title)}
                } class="ui right floated button red">Delete</div>
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
  
