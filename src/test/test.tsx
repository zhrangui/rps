import { Stack } from '@material-ui/core';

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