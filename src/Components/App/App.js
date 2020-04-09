import React, { Fragment } from "react";
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";

import Header from "../Header";
import GamePage from "../Game/GamePage"

import Instructions from "../Instructions/Instructions";
import Scores from "../Scores";


class App extends React.Component{
  componentDidMount(){
    this.props.getData();
  }
  render(){
    let {loaded}= this.props
    return !loaded?<p>Loading</p> : (
      <Router>
      <Fragment>
        <Route exact path="/">
          <Header />
          <Instructions />
        </Route>
        <Route path="/gamepage">
          <GamePage />
        </Route>
        <Route path="/scores">
          {/* <Header /> */}
          <Scores />
        </Route>
      </Fragment>
    </Router>
    )
  }
}

export default App;
