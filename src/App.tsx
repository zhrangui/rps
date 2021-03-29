import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Rps from './rps';
import { OverView } from './components/grid/grid';
import { SEODashboard } from './components/dashboard/analytics';
import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/grid">Data grid</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Rps />
          </Route>
          <Route path="/dashboard">
            <SEODashboard />
          </Route>
          <Route path="/grid">
            <OverView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
