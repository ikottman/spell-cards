import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SpellCards from "./pages/SpellCards";
import CallbackPage from "./pages/Callback";
import Auth from "./components/Auth";

function App() {
  return (
    <Auth>
      <Router>
        <Switch>
          <Route exact path="/" component={SpellCards}/>
          <Route path="/callback" component={CallbackPage}/>
        </Switch>
      </Router>
    </Auth>
  );
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("mount"));
});