import { alpha, styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';

const AzureSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: theme.palette.rpsAzure.main,
    '&:hover': {
      backgroundColor: alpha(theme.palette.rpsAzure.main, theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: theme.palette.rpsAzure,
  },
}));

type Props = Pick<SwitchProps, 'checked' | 'onChange'>;

const ColorSwitch: React.FC<Props> = ({checked, onChange }: Props) => {
  return (
    <AzureSwitch checked={checked} onChange={onChange} />
  );
};

export default ColorSwitch;