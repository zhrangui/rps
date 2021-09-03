import { Typography } from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';

const ErrorMessage: React.FC = ({ children }) => {

  return (
    <Typography
      variant="h6"
      color='error'>
      <ErrorIcon
        sx={{
          fontSize: 10.5,
          color: 'black'
        }} />
      <span>{children}</span>
    </Typography>
  );
}

export default ErrorMessage;