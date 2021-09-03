import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

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