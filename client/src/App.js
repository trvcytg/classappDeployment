import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books}></Route>
          <Route exact path="/books" component={Books}></Route>
          <Route exact path="/books/:id" component={Detail}></Route>
          <Route path="*" component={NoMatch}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
