import React from "react";
import "./Styles/MenuBar.css";
import "semantic-ui-css/semantic.min.css";
import { SendmailCom} from "./DashboardComponents/DashboardView";
export function Contact(){

    return(
        <div>
            
    <div class="ui mt-4 grid p-4">
        <div class="two wide column"></div>
        <div class="twelve wide column">
            <h1>Contacts</h1>
            <hr />
           
            <SendmailCom/>
            </div>
        <div class="two wide column"></div>
    </div>
       </div>
    )
}