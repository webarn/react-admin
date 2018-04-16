import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

//page
import Home from "./page/home/index";
import Layout from "./components/layout/index";
import Login from "./page/login/index";
import PageErr from "./page/error/index";
import User from "./page/user/index";

class App extends React.Component {
  render() {
    const LayoutRouter = (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Home} />
          <Route path="/product-category" component={Home} />
          <Route path="/order" component={Home} />
          <Route path="/user/index" component={User} />
          <Redirect exact from="/user" to="/user/index" />
          <Route component={PageErr} />
        </Switch>
      </Layout>
    );
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={props => LayoutRouter} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
