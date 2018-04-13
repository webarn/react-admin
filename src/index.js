import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

//page
import Home from "./page/home/index";
import Layout from "./components/layout/index";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product" component={Home} />
            <Route path="/product.category" component={Home} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
