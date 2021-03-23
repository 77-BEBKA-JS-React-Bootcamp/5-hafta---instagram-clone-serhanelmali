import Dashboard from "./component/dashboard/dashboard";
import PhotoPage from "./component/photopage/photoPage";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Image" component={PhotoPage}>
          </Route>
          <Route exact path="/">
          <Dashboard />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

