import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import SportsIcon from '@mui/icons-material/Sports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { useNavigate } from 'react-router-dom';

export const mainListItems = () => {
  const navigate = useNavigate();

  const [path, setPath] = React.useState("");

  const handleClick = (path: any) => {
    // 👇️ replace set to true
    setPath(path);
    navigate(path, {replace: true});
  };

  return <React.Fragment>
    <ListItemButton onClick={() => handleClick('/dashboard')}>
      <ListItemIcon>
        <DashboardIcon color={path==='/dashboard'?'primary':'inherit'} />
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItemButton>
    <ListItemButton onClick={() => handleClick('/challenges')}>
      <ListItemIcon>
        <SportsIcon color={path==='/challenges'?'primary':'inherit'} />
      </ListItemIcon>
      <ListItemText primary="Challenges"/>
    </ListItemButton>
    <ListItemButton onClick={() => handleClick('/teams')}>
      <ListItemIcon>
        <GroupIcon color={path==='/teams'?'primary':'inherit'} />
      </ListItemIcon>
      <ListItemText primary="Team"/>
    </ListItemButton>
    <ListItemButton onClick={() => handleClick('/rewards')}>
      <ListItemIcon>
        <EmojiEventsIcon color={path==='/rewards'?'primary':'inherit'} />
      </ListItemIcon>
      <ListItemText primary="Rewards"/>
    </ListItemButton>
    <ListItemButton onClick={() => handleClick('/feeds')}>
      <ListItemIcon>
        <RssFeedIcon color={path==='/feeds'?'primary':'inherit'} />
      </ListItemIcon>
      <ListItemText primary="News feed"/>
    </ListItemButton>
  </React.Fragment>
    ;
}

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </React.Fragment>);
