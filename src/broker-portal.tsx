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

function BrokerPortal() {

  const { t } = useTranslation();
  const location = useLocation();
  const pathnames = (location.pathname + location.hash).split('/').filter((x) => x && x !== '#');

  return (
    <>
      <AppBar />
        <Container>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
           >
            <Link color="inherit" href="/">
              {t('Home')}
            </Link>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1
              const to = `/${pathnames.slice(0, index + 1).join('/')}`
              return last ? (
                <Typography color="textPrimary" key={to}>
                  {t(toTitleCase(value))}
                </Typography>
              ) : (
                <Link color="inherit" component={RouterLink} to="/" key={to}>
                  {t(toTitleCase(value))}
                </Link>
              )
            })}
          </Breadcrumbs>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search result">
            </Route>
          </Switch>
        </Container>
      <Footer />
    </>
  );
}

export default BrokerPortal;
