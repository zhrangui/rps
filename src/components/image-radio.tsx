import { useMediaQuery, useTheme } from '@mui/material';
import { Avatar, Typography, Fab, Radio, Stack } from '@mui/material';

interface Props {
  value: number,
  imageAlt: string,
  imageSrc: string,
  children: React.ReactElement,
}

const Icon = (imageAlt: string, imageSrc: string, isChecked: boolean = false) => {
  
  const theme = useTheme();
  const isBreakPoint = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Fab
      size={isBreakPoint? 'medium': 'large'}
      sx={isChecked ? {
        border: '2px solid #00b0f0',
        backgroundColor: '#d8e5f1',
        '&:hover': {
          backgroundColor: '#d8e5f1'
        }
      } : {
      }}>
      <Avatar alt={imageAlt}
        src={imageSrc}
        variant='square'
        sx={{
          width: 'fit-content',
          height: 'fit-content'
        }} />
    </Fab>
  );
}

const ImageRadio: React.FC<Props> = ({ value, imageAlt, imageSrc, children }) => {

  return (
    <Stack
      alignItems="center">
      <Radio
        value={value}
        checkedIcon={Icon(imageAlt, imageSrc, true)}
        icon={Icon(imageAlt, imageSrc)}
      />
      <Typography variant='h6'
        fontSize="min(2.4vw, 12px)">
        {children}
      </Typography>
    </Stack>
  );
}

export default ImageRadio;