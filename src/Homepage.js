import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

/**Importing semantic ui */

import 'semantic-ui-css/semantic.min.css'

//Importing components

import {MenuBar} from './MenuBar.js'
import {HomepageContent} from './HomePageContent.js'
import {Alumni} from './Alumni'
import {Events} from './Events'
import {Stories} from './Stories'
import {Gallery} from './Gallery'
import {Contact} from './Contact'
import {Login} from './Login'
import {Register} from './Register'
import {Dashboard} from './Dashboard'

export class Homepage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(

      <Router>
            <Switch>
              <Route exact path="/">
              <MenuBar/>
                  <HomepageContent />
              </Route>
              <Route exact path="/Alumni">
              <MenuBar/>
                  <Alumni />
              </Route>
              
              <Route exact path="/Events">
              <MenuBar/>
                  <Events />
              </Route>
              <Route exact path="/Stories">
              <MenuBar/>
                  <Stories />
              </Route>
              <Route exact path="/Gallery">
              <MenuBar/>
                  <Gallery />
              </Route>
              <Route exact path="/Contact">
              <MenuBar/>
                  <Contact />
              </Route>

              <Route exact path="/Login">
              <MenuBar/>
                  <Login />
              </Route>
              
              <Route exact path="/Register">
                  <Register />
              </Route>
              <Route exact path="/Dashboard">
                  <Dashboard />
              </Route>
            </Switch>
      </Router>
    )
  }
}