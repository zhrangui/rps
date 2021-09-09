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

import { toTitleCase } from './utils/utils';

import './broker_portal.scss';
import Footer from './components/footer';
import NavLinks from './components/nav-links';

function BrokerPortal() {

  const { t } = useTranslation();
  const location = useLocation();
  const pathnames = (location.pathname + location.hash).split('/').filter((x) => x && x !== '#');

  return (
    <>
      <AppBar />
        <Container>
          <NavLinks/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search result">
            </Route>
          </Switch>
        </Container>
    </>
  );
}

export default BrokerPortal;
