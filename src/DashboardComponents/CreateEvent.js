import React from "react";
import "semantic-ui-css/semantic.min.css";

import { DropZone } from "./DropZone";
export function CreateEvent(){

    console.log("Comes")
    return(
        <div>
            
    <div class="ui mt-4 grid p-4">
        <div class="four wide column"></div>
        <div class="ten wide column">
            <h1>Create Event</h1>
            <hr />
           
            <CreateNewEvent/>
            </div>
        <div class="two wide column"></div>
    </div>
       </div>
       )
}

function CreateNewEvent(){
  
  
  return(
      <div>
          <div className="container" class="ui form shadow large">
          <form>
                  <div className="row pt-5 mx-auto">
                      <div className="col-8 form-group pt-2 mx-auto" class="field">
                      <label>Title</label>
                          <input type="text" className="form-control" placeholder="Title" name="title"/>
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto" class="field">
                      <label>Date</label>
                          <input type="date" className="form-control" name="date" data-ms-editor="true" placeholder="Date" />  
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto" class="field">
                      <label>Description</label>
                          <textarea className="form-control" id="" cols="30" rows="8" placeholder="Description" name="description"></textarea>
                      </div>
                      { <div className="col-8 pt-3 mx-auto" class="field">
                        <DropZone />
                    </div>     }
                    <div className="col-8 pt-3 mx-auto pb-3 mb-3" >
                    <button class="btn btn-outline-dark w-25">Cancel</button>
                    <button class="ui right floated button green w-25">Cancel</button>
                      </div>
                  
                  </div>
              </form>
          </div>
      </div>
  )

  }
  