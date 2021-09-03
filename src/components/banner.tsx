import { useTranslation } from 'react-i18next';
import { Paper, Typography, useTheme } from '@material-ui/core';
import Stack from "@material-ui/core/Stack";
import React from 'react';

export default function Banner() {

  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Paper sx={{
        backgroundImage: 'url(/images/header_panner.jpg)',
        backgroundPosition: 'bottom'
      }}>
        <Stack
          alignItems='center'
          py={2}
          sx={{
            opacity: 0.85,
            backgroundColor: theme.palette.rpsDarkBlue.main
          }}
        >
          <Typography variant='h2' color='white'>
            {t('RealValue')}
          </Typography>
          <Typography color='white'>
            {t('Instant access to estimated house price values.')}
          </Typography>
        </Stack>
      </Paper>
    </React.Fragment>
  );
}
