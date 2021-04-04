import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Rps from './rps';
import { MenuBar } from './components/menu-bar/menu-bar';
import { SEODashboard } from './components/dashboard/analytics';
import { OverView } from './components/grid/grid';
import { Treeview } from './components/treeview/treeview';

import './App.scss';

function App() {
  return (
    <div>
    <MenuBar />
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
          <li>
            <Link to="/treeview">Tree view</Link>
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
          <Route path="/treeview">
            <Treeview />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
