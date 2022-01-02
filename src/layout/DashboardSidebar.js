import { Drawer, Toolbar, Divider } from '@mui/material';
import NavSection from 'components/NavSection';
import sidebarConfig from './SidebarConfig';

const DRAWER_WIDTH = 280;

const DashboardSidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      PaperProps={{ sx: { width: DRAWER_WIDTH } }}
    >
      <Toolbar />
      <Divider />
      <NavSection navConfig={sidebarConfig} />
    </Drawer>
  );
};

export default DashboardSidebar;
