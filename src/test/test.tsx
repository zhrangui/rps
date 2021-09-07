import { Stack } from '@mui/material';

interface Props {
  children: React.ReactElement;
}

const Test: React.FC<Props> = ({ children }) => {
  return (
    <Stack>
      {children}
    </Stack>
  );
}

export default Test;