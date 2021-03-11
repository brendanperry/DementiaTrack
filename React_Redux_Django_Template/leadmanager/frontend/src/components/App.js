import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import WanderingPacing from "./leads/WanderingPacing";
import SleepDisorders from "./leads/SleepDisorders";
import UTI from "./leads/UTI";
import Test from "./leads/Test";
import DailyActivity from "./leads/DailyActivities";
import ContactUs from "./leads/ContactUs";
import References from "./leads/References";
import Contributions from "./leads/Contributions";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

/**
 * This is where the application is all brought together
 * to display when the user is utilizing the web app.
 * It utilizes many of the prebuilt libraries and the other
 * javascript files in the system to make a display the site
 * based on what part of it they are at. So if they are on the
 * register page, the link they click will transfer them there
 * based on the Switch segment in the code below.
 **/

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route
                  exact
                  path="/wanderingpacing"
                  component={WanderingPacing}
                />
                <Route
                  exact
                  path="/sleepdisorders"
                  component={SleepDisorders}
                />
                <Route exact path="/uti" component={UTI} />
                <Route exact path="/test" component={Test} />
                <Route
                  exact
                  path="/dailyactivities"
                  component={DailyActivity}
                />
                <Route exact path="/contactus" component={ContactUs} />
                <Route exact path="/references" component={References} />
                <Route
                  exact
                  path="/contributions"
                  component={Contributions}
                />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
