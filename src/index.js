import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

//page
import Home from "./page/home/index";
import Layout from "./components/layout/index";
import Login from "./page/login/index";
import PageErr from "./page/error/index";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={props => (
              <Layout>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/product" component={Home} />
                  <Route path="/product-category" component={Home} />
                  <Route path="/order" component={Home} />
                  <Route path="/user" component={Home} />
                  <Route component={PageErr} />
                </Switch>
              </Layout>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
