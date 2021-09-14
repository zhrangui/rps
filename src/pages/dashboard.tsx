import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, Grid, OutlinedInput, TextField, Typography, useTheme } from '@mui/material';
import { getDashboard } from '../services/http-client';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/store';



export default function Dashboard() {

  const theme = useTheme();

  const { t } = useTranslation();

  const dashboard = useSelector((state: RootState) => state.client.dashboard);

  useEffect(() => {
    getDashboard("1/1/50/7");
  }, []);

  return (
    <Grid container>
      <Grid container
        justifyContent="space-between"
        mx={3}>
        <Typography variant="h5" color="rpsLightAzure.main">
          My Dashboard
        </Typography>
        <TextField
          id="search"
          size='small'
          helperText="*Orders last modified within 30 days"
          label="Search by Borrower, Address, RPS Order ID or Lender Reference #"
        />
      </Grid>

    </Grid>
  );
}

