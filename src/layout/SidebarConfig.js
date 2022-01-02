import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import { Home as HomeIcon, RssFeed as RssFeedIcon } from '@mui/icons-material';

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    subheader: 'General',
    items: [
      {
        title: 'Home',
        path: '/',
        icon: <HomeIcon />,
        children: [{ title: 'About', path: '/about' }],
      },
      {
        title: 'Work & Research',
        path: '/work',
        icon: getIcon(pieChart2Fill),
        children: [
          { title: 'Interests', path: '/work/interests' },
          { title: 'Curriculum Vitae', path: '/work/curriculum' },
          { title: 'Teaching', path: '/work/teaching' },
          { title: 'Articles', path: '/work/articles' },
        ],
      },
      {
        title: 'Blog',
        path: '/blog',
        icon: <RssFeedIcon />,
      },
    ],
  },
];

export default sidebarConfig;
