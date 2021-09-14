import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, Grid, MenuItem, OutlinedInput, Stack, TextField, Typography, useTheme } from '@mui/material';
import { getDashboard } from '../services/http-client';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/store';

export default function Dashboard() {

  const theme = useTheme();

  const { t } = useTranslation();

  const dashboard = useSelector((state: RootState) => state.client.dashboard);
  const orders = dashboard?.orders.map((order: any[]) => {
    return {
      id: order[1],
      modifiedDate: order[2],
      address: order[5],
      borrower: order[4],
      lender: order[8],
      type: order[9]
    }
  }) || []

  const filters = [{
    label: "All Orders",
    value: "All Orders"
  },
  {
    label: "In Progress",
    value: "In Progress"
  },
  {
    label: "Delayed",
    value: "Delayed"
  },
  {
    label: "Completed",
    value: "Completed"
  },
  {
    label: "Cancelled",
    value: "Cancelled"
  },
  {
    label: "Archived",
    value: "Archived"
  },
  {
    label: "Payment Required",
    value: "Payment Required"
  }];

  const sortBy = [
    {
      label: "Order Status",
      value: "Order Status"
    },
    {
      label: "Lender",
      value: "Lender"
    },
    {
      label: "Borrower",
      value: "Borrower"
    },
    {
      label: "Date",
      value: "Date"
    }];

  useEffect(() => {
    getDashboard("1/1/50/7");
  }, []);

  return (
    <Grid container>
      <Grid container
        justifyContent="space-between"
        my={3}>
        <Typography variant="h5" color="rpsLightAzure.main">
          My Dashboard
        </Typography>
        <TextField
          id="search"
          size='small'
          helperText="*Orders last modified within 30 days"
          label="Search by Borrower, Address, RPS Order ID or Lender Reference #"
          sx={{
            minWidth: '370px'
          }}
        />
      </Grid>
      <Grid container
        justifyContent="space-between"
        mb={3}>
        <Grid item>
          <Grid
            container
            alignItems="center">
            <Typography
              mr={2}>
              Filter
            </Typography>
            <TextField
              select
              size="small"
              defaultValue={filters[0].value}
              sx={{
                width: 170
              }}>
              {filters.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            alignItems="center">
            <Typography
              mr={2}>
              Sort By
            </Typography>
            <TextField
              select
              size="small"
              defaultValue={sortBy[3].value}
              sx={{
                width: 170
              }}>
              {sortBy.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        {
          orders.map((order: any) => {
            return (
              <Grid container
                key={order.id}>
                <Grid item
                  xs={12}
                  sm={3}>
                  <Stack>
                    <Typography
                      sx={{
                        backgroundColor: 'rpsLightGray.main'
                      }}>
                      ORDER ID: {order.id}
                    </Typography>
                    <Typography variant='body2'>
                      {order.modifiedDate}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item
                  xs={12}
                  sm={3}>
                  <Stack>
                    <Typography
                      sx={{
                        backgroundColor: 'rpsLightGray.main'
                      }}>
                      PROPERTY ADDRESS
                    </Typography>
                    <Typography variant='body2' >
                      {order.address}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item
                  xs={12}
                  sm={2}>
                  <Stack>
                    <Typography
                      sx={{
                        backgroundColor: 'rpsLightGray.main'
                      }}>
                      BORROWER
                    </Typography>
                    <Typography variant='body2'>
                      {order.borrower}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item
                  xs={12}
                  sm={2}>
                  <Stack>
                    <Typography
                      sx={{
                        backgroundColor: 'rpsLightGray.main'
                      }}>
                      LENDER
                    </Typography>
                    <Typography variant='body2'>
                      {order.lender}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item
                  xs={12}
                  sm={2}>
                  <Stack>
                    <Typography
                      sx={{
                        backgroundColor: 'rpsLightGray.main'
                      }}>
                      APPRAISAL TYPE
                    </Typography>
                    <Typography variant='body2'>
                      {order.type}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            )
          })
        }
      </Grid>
    </Grid>
  );
}

