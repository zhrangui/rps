import { Button, useTheme } from "@mui/material";
interface Props {
  active: boolean,
  children: React.ReactElement
}

const StyleText: React.FC<Props> = ({ active, children }) => {

  const theme = useTheme()

  return (
    <Button
      size="small"
      variant="contained"
      disabled={active}
      sx={{
        minWidth: 70,
        backgroundColor: theme.palette.rpsAzure.main,
        '&:hover': {
          backgroundColor: theme.palette.rpsAzure.main
        }
      }}>
      {children}
    </Button>
  );
}

export default StyleText;