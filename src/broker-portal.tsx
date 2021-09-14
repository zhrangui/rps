import { useTranslation } from 'react-i18next';
import {
  useLocation,
  Switch,
  Route,
  Link as RouterLink
} from 'react-router-dom';
import { Breadcrumbs, Typography, Link, Box, Container, Grid } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import AppBar from './components/app-bar';
import Home from './pages/home';

import './broker-portal.scss';
import NavLinks from './components/nav-links';
import Dashboard from './pages/dashboard';

function BrokerPortal() {

  const { t } = useTranslation();
  const location = useLocation();
  const pathnames = (location.pathname + location.hash).split('/').filter((x) => x && x !== '#');

  return (
    <>
      <AppBar />
      <Container>
        <NavLinks />
        <Switch>
          <Route exact path={['/', '/home']}>
            <Home />
          </Route>
          <Route exact path="/my dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default BrokerPortal;
