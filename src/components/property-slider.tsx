import Slider from '@material-ui/core/Slider';
import { styled } from '@material-ui/core';

interface Props {
  low: number,
  middle: number,
  high: number
}

const PropertySlider: React.FC<Props> = ({ low, middle, high }) => {
  const clamp = (number: number): number => {
    return Math.max(0, Math.min(number, 100));
  }

  const values = [0, clamp(low), clamp(middle), clamp(high), 100];

  const EstimatedValueSlider = styled(Slider)(({ theme }) => ({
    height: 2,
    '& .MuiSlider-thumb, & .MuiSlider-track': {
      color: theme.palette.rpsAzure.main
    },
    '& .MuiSlider-thumb[data-index="0"], .MuiSlider-thumb[data-index="4"]': {
      color: theme.palette.rpsDarkBlue.main,
    },
    '& .MuiSlider-thumb[data-index="4"]': {
      zIndex: -50
    },
    '& .MuiSlider-thumb[data-index="1"], .MuiSlider-thumb[data-index="3"]': {
      width: 16,
      height: 16
    },
    '& .MuiSlider-thumb[data-index="2"]': {
      borderRadius: 0,
      width: 0,
      height: 0,
      color: 'white',
      borderTop: `14px solid ${theme.palette.rpsAzure.main}`,
      borderLeft: '7px solid transparent',
      borderRight: '7px solid transparent',
      transform: 'translate(-50%, -90%)',
      zIndex: -100,
    },
    '& .MuiSlider-rail': {
      color: theme.palette.rpsDarkBlue.main,
      backgroundColor: 'initial',
      opacity: 1,
      borderBottom: '2px dotted',
      transform: 'translate(0, -80%)',
    },
    '& .MuiSlider-track': {
      left: `${values[1]}% !important`,
      width: `${values[3] - values[1]}% !important`
    },
  }));

  return (
    <EstimatedValueSlider
      defaultValue={values}
      disabled
    />
  );
}

export default PropertySlider;