import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Styles/Dashboard.css";
import "semantic-ui-css/semantic.min.css";

import { Sidebar } from "./Sidebar";
import { AddAlumni} from "./DashboardComponents/AddAlumni";
import EditAlumni from "./DashboardComponents/EditAlumni"
import { SearchAlumniMember } from "./DashboardComponents/SearchAlumni";
import { DisplayAllAlumniMembers } from "./DashboardComponents/DisplayAllAlumniMembers";
import { CreateEvent } from "./DashboardComponents/CreateEvent";
import { ViewUpcomingEvents } from "./DashboardComponents/ViewUpcomingEvents";
import { DashboardView } from "./DashboardComponents/DashboardView";
import { AdminProfile } from "./DashboardComponents/AdminProfile";
import { Homepage } from "./Homepage";

export function Dashboard() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Dashboard">
          <Sidebar />
          <DashboardView />
        </Route>

        <Route exact path="/AddAlumni">
          <Sidebar />
          <AddAlumni />
        </Route>

        <Route exact path="/EditAlumni">
          <Sidebar />
          <EditAlumni />
        </Route>

        <Route exact path="/SearchAlumni">
          <Sidebar />
          <SearchAlumniMember />
        </Route>

        <Route exact path="/DisplayAllAlumniMembers">
          <Sidebar />
          <DisplayAllAlumniMembers />
        </Route>

        <Route exact path="/CreateEvent">
          <Sidebar />
          <CreateEvent />
        </Route>

        <Route exact path="/ViewUpcomingEvents">
          <Sidebar />
          <ViewUpcomingEvents />
        </Route>

        <Route exact path="/DashboardView">
          <Sidebar />
          <DashboardView />
        </Route>

        <Route exact path="/AdminProfile">
          <Sidebar />
          <AdminProfile />
        </Route>

        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}
