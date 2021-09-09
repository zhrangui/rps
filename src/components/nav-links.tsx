import { Grid, Link } from '@mui/material';

export default function NavLinks() {

  return (
    <Grid container
      spacing={2}>
      <Grid item>
        <Link href="#/home" underline="hover">Home</Link>
      </Grid>
      <Grid item>
        <Link href="#/my dashboard" underline="hover">My Dashboard</Link>
      </Grid>
      <Grid item>
        <Link href="#/create order" underline="hover">Create Order</Link>
      </Grid>
      <Grid item>
        <Link href="#/lender redirect" underline="hover">Lender Redirect</Link>
      </Grid>
      <Grid item>
        <Link href="#/resume last order" underline="hover" >Resume Last Order</Link>
      </Grid>
      <Grid item>
        <Link href="#/house price tracker" underline="hover">House Price Tracker</Link>
      </Grid>
    </Grid>
  );
}