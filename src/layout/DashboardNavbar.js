import React from 'react';

import {
  AppBar,
  Button,
  Box,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Paper,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Interests as InterestsIcon,
  Article as ArticleIcon,
  School as SchoolIcon,
  Hail as HailIcon,
} from '@mui/icons-material';

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const DashboardNavbar = ({ onOpenDrawer }) => {
  const [menuHomeEl, setMenuHomeEl] = React.useState(null);
  const [menuWorkEl, setMenuWorkEl] = React.useState(null);

  const handleOpenMenuHome = (event) => setMenuHomeEl(event.currentTarget);
  const handleOpenMenuWork = (event) => setMenuWorkEl(event.currentTarget);
  const handleCloseMenuHome = (event) => setMenuHomeEl(null);
  const handleCloseMenuWork = (event) => setMenuWorkEl(null);

  return (
    <RootStyle>
      <ToolbarStyle disableGutters>
        <Typography
          color='text.primary'
          variant='h4'
          sx={{ display: { xs: 'none', md: 'flex' }, mx: 4 }}
        >
          Miguel Piña
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />

        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <IconButton onClick={onOpenDrawer} size='large'>
            <MenuIcon />
          </IconButton>
        </Box>
        <Typography
          color='text.primary'
          variant='h4'
          sx={{
            flexGrow: 3,
            alignItems: 'center',
            justifyContent: 'center',
            display: { xs: 'flex', md: 'none' },
          }}
        >
          Miguel Piña
        </Typography>

        {/* <Menu anchorEl={anchorEl} /> */}

        <Button
          onClick={handleOpenMenuHome}
          sx={{ display: { xs: 'none', md: 'flex' }, mx: 2 }}
          size='large'
          variant='outlined'
        >
          Home
        </Button>

        <Menu
          anchorEl={menuHomeEl}
          open={Boolean(menuHomeEl)}
          onClose={handleCloseMenuHome}
        >
          <Paper sx={{ minWidth: 150 }}>
            <MenuItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary='About' />
            </MenuItem>
          </Paper>
        </Menu>

        <Button
          onClick={handleOpenMenuWork}
          sx={{ display: { xs: 'none', md: 'flex' }, mx: 2 }}
          size='large'
          variant='outlined'
        >
          Work & Research
        </Button>
        <Menu
          anchorEl={menuWorkEl}
          open={Boolean(menuWorkEl)}
          onClose={handleCloseMenuWork}
        >
          <Paper sx={{ minWidth: 150 }}>
            <MenuItem>
              <ListItemIcon>
                <InterestsIcon />
              </ListItemIcon>
              <ListItemText primary='Interests' />
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <HailIcon />
              </ListItemIcon>
              <ListItemText primary='Curriculum Vitae' />
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary='Teaching' />
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary='Articles' />
            </MenuItem>
          </Paper>
        </Menu>
        <Button
          sx={{ display: { xs: 'none', md: 'flex' }, mx: 2 }}
          size='large'
          variant='outlined'
        >
          Blog
        </Button>
      </ToolbarStyle>
    </RootStyle>
  );
};

export default DashboardNavbar;
