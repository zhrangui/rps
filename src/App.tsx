import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './common/internationalization/internationalization';
import './common/localization/localization';
import Rps from './rps';
import { MenuBar } from './components/menu-bar/menu-bar';
import { SEODashboard } from './components/dashboard/analytics';
import { OverView } from './components/grid/grid';
import { Treeview } from './components/treeview/treeview';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/#" title="RPS Real Property Solutions Inc.">
              <img id="logoImg" src="/img/logoen.jpg" alt="RPS Real Property Solutions Inc." />
            </a>
          </div>
          <MenuBar />
        </div>
      </div>
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
    </Router>
  );
}

export default App;
