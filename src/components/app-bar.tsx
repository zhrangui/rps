import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar as MuiAPpBar, Toolbar, Avatar, Box, Button, IconButton, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Banner from './banner'
import SideBar from './side-bar';

export default function AppBar() {

  const { t } = useTranslation();

  const sideBarRef = useRef() as any;

  return (
    <>
      <MuiAPpBar>
        <Toolbar
          sx={{
            bgcolor: 'white'
          }}>
          <Grid container
            justifyContent='space-between'
            mx={{ lg: 3 }}>
            <Avatar
              alt={t("REAL PRPERTY SOLUTIONS")}
              src="/images/rps-logo-tagline-en.svg"
              variant="square"
              sx={{
                width: 120,
                '& img': {
                  objectFit: 'initial'
                }
              }} />
            <Box>
              <Button
                sx={{
                  color: '#04b4e4'
                }}>
                {t("English")}
              </Button>
              <IconButton onClick={() => sideBarRef.current.toggle(true)} edge="start" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Box>
          </Grid>
        </Toolbar>
      </MuiAPpBar>
      <Toolbar id="back-to-top-anchor" />
      <SideBar ref={sideBarRef} />
    </>
  );
}
