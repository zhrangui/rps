import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material';
import { Box, Divider, Fab, Grid, Link, Stack, Typography, useScrollTrigger, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();

  const ScrollTop: React.FC = ({ children }) => {

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const anchor = (
        (event.target as HTMLDivElement).ownerDocument || document
      ).querySelector('#back-to-top-anchor');

      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };
    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          sx={{
            position: 'fixed',
            bottom: 25,
            right: 16,
            zIndex: 100
          }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }

  return (
    <>
      <ScrollTop >
        <Fab
          sx={{
            width: 35,
            height: 35,
            color: 'white',
            backgroundColor: 'black',
            '&:hover': {
              backgroundColor: 'black'
            }
          }}>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Typography variant='h6' fontSize={10.5}>
        <Stack
          bgcolor="rpsDarkBlue.main"
          marginTop='calc(11% + 50px)'
          px={3}>
          <Grid
            mx={{ lg: 3 }}>
            <Grid my={1}>
              {t('COPY_RIGHT')}
            </Grid>
            <Grid>
              {t('COPY_RIGHT_CLAIM')}
            </Grid>
            <Grid container
              justifyContent="space-between"
              my={2}>
              <Grid item>
                <Grid container
                  justifyContent="space-between">
                  <Grid item
                    mr={1}>
                    <Link href="https://www.rpsrealsolutions.com/privacy"
                      underline="hover"
                      color="rpsLightGray.main">
                      {t('Privacy')}
                    </Link>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    color={theme.palette.rpsLightGray.main}
                    sx={{
                      marginRight: 1
                    }} />
                  <Grid item
                    mr={1}>
                    <Link href="https://www.rpsrealsolutions.com/legal"
                      underline="hover"
                      color="rpsLightGray.main">
                      {t('Legal')}
                    </Link>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    color={theme.palette.rpsLightGray.main}
                    sx={{
                      marginRight: 1
                    }} />
                  <Grid item>
                    <Link href="https://www.rpsrealsolutions.com/aoda"
                      underline="hover"
                      color="rpsLightGray.main">
                      {t('AODA')}
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Link href=" https://www.rpsrealsolutions.com"
                  underline="hover"
                  color="rpsLightGray.main">
                  {t('RPS Website')}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </Typography>
    </>
  );
}