import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { ListItemButton, ListItemText } from '@material-ui/core';

const sideBar = 'sideBar';
const anchor = 'right';

function SideBar(props: any, ref: any) {
  const { t } = useTranslation();
  const theme = useTheme();

  const [state, setState] = useState({
    [sideBar]: false
  });

  useImperativeHandle(ref, () => ({
    toggle(open: boolean) {
      toggle(open)
    }
  }), [])

  function toggle(open: boolean) {
    setState({ ...state, [sideBar]: open });
  }

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        toggle(open);
      };

  const list = () => (
    <Box
      onClick={toggleDrawer(false)}>
      <List>
        {[t('RealView')].map((text) => (
          <ListItemButton key={text}
            sx={{
              textAlign: "end"
            }}>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
      <Divider sx={{ borderColor: 'gray' }} />
      <List>
        {[t('FAQ'), t('About RPS')].map((text) => (
          <ListItemButton key={text}
            sx={{
              textAlign: "end"
            }}>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment key={anchor}>
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            color: "white",
            bgcolor: theme.palette.rpsDarkBlue.main
          },
        }}
        anchor={anchor}
        open={state[sideBar]}
        onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
}

export default forwardRef(SideBar);