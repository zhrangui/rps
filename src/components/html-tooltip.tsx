import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface Props {
  tooltip: string;
}

const HtmlTooltip: React.FC<Props> = ({ tooltip }) => {
  return (
    <Tooltip
      title={<div dangerouslySetInnerHTML={{ __html: tooltip }} />}
      placement='top-start'
    >
      <sup>
        <IconButton>
          <HelpIcon sx={{
            color: 'black',
            fontSize: "1rem"
          }} />
        </IconButton>
      </sup>
    </Tooltip>
  );
}

export default HtmlTooltip;