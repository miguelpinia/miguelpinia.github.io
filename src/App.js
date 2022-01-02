import React from 'react';
import './App.css';
import ThemeConfig from 'theme';
import ScrollToTop from 'components/ScrollToTop';
import GlobalStyles from 'theme/globalStyles';
import Router from 'routes';

import { StateProvider } from 'state/StateProvider';

import {
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Drawer,
  Layout,
  Menu,
  Row,
  Tooltip,
  Typography,
} from 'antd';

import {
  AntDesignOutlined,
  GithubOutlined,
  LaptopOutlined,
  LinkedinOutlined,
  MenuOutlined,
  NotificationOutlined,
  TwitterOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Title, Text, Paragraph, Link } = Typography;

const filePDF = `${process.env.PUBLIC_URL}/cv_13.pdf`;

const Main = () => {
  return (
    <React.Fragment>
      <Col>
        <Row>
          <Col span={8} />
          <Col span={8}>
            <Row justify='center'>
              <Avatar
                size={{
                  xs: 100,
                  sm: 100,
                  md: 100,
                  lg: 100,
                  xl: 100,
                  xxl: 100,
                }}
                src='https://avatars1.githubusercontent.com/u/5816646?s=460&u=250c0dc6f60ffaaa30deb15669b9b9bd4448d817&v=4'
                icon={<AntDesignOutlined />}
              />
            </Row>
            <Row justify='center'>
              <Title level={2}>Miguel Piña</Title>
            </Row>
            <Row justify='center'>
              <Text type='secondary'>CS PhD Student</Text>
            </Row>
            <Row justify='center'>
              <Col span={8}>
                <Row justify='center'>
                  <Tooltip title='Twitter' placement='bottom' color='blue'>
                    <Button
                      type='link'
                      shape='circle'
                      icon={<TwitterOutlined />}
                      size='large'
                      href='https://twitter.com/miguelpinia'
                    />
                  </Tooltip>
                </Row>
              </Col>
              <Col span={8}>
                <Row justify='center'>
                  <Tooltip title='Github' placement='bottom' color='blue'>
                    <Button
                      type='link'
                      href='https://github.com/miguelpinia'
                      shape='circle'
                      icon={<GithubOutlined />}
                      size='large'
                    />
                  </Tooltip>
                </Row>
              </Col>
              <Col span={8}>
                <Row justify='center'>
                  <Tooltip title='LinkedIn' placement='bottom' color='blue'>
                    <Button
                      type='link'
                      shape='circle'
                      icon={<LinkedinOutlined />}
                      size='large'
                      href='https://www.linkedin.com/in/miguel-angel-pi%C3%B1a-avelino-a3488a26/'
                    />
                  </Tooltip>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={8} />
        </Row>
        <Row>
          <Col span={4} />
          <Col span={16}>
            <Row>
              <Title level={4}>About Me</Title>
              <ul>
                <li>
                  <Paragraph>
                    I'm a Ph.D. Student in the{' '}
                    <Link href='http://www.mcc.unam.mx/' target='_blank'>
                      Computer Science and Engineering
                    </Link>{' '}
                    graduate program at{' '}
                    <Link href='www.unam.mx' target='_blank'>
                      UNAM
                    </Link>
                    , advised by Prof.{' '}
                    <Link
                      href='https://www.matem.unam.mx/fsd/armando'
                      target='_blank'
                    >
                      Armando Castañeda
                    </Link>{' '}
                    [
                    <Link href={filePDF} target='_blank'>
                      Curriculum
                    </Link>
                    ][
                    <Link
                      href='https://scholar.google.com/citations?user=8GGrC6QAAAAJ&hl=en'
                      target='_blank'
                    >
                      Google Scholar
                    </Link>
                    ]
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    My research interests lie in general areas of concurrent and
                    distributed computing. Currently, I'm working in topics like
                    relaxations applied to methods of concurrent
                    data-structures.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    Another interests that I have are:{' '}
                    <Text italic>software-engineering</Text>,{' '}
                    <Text italic>functional-programming</Text>,{' '}
                    <Text italic>programming-languages</Text> and{' '}
                    <Text italic>databases</Text>.
                  </Paragraph>
                </li>
              </ul>
            </Row>
          </Col>
          <Col span={4} />
        </Row>
      </Col>
    </React.Fragment>
  );
};

const About = () => {
  return 'About';
};

const Experience = () => {
  return 'Experience';
};

const Interests = () => {
  return 'Interests';
};

const Curriculum = () => {
  return 'Curriculum';
};

const Software = () => {
  return 'Software';
};

const Articles = () => {
  return 'Articles';
};

const Blog = () => {
  return 'Blog entries';
};

const Default = () => {
  return <Title level={4}>Under construction</Title>;
};

const MyMenu = ({ selectedKey, changeSelectedKey }) => {
  return (
    <>
      <Menu
        mode='inline'
        defaultSelectedKeys={['main']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu key='sub1' icon={<UserOutlined />} title='Home'>
          <Menu.Item key='main' onClick={changeSelectedKey}>
            Main
          </Menu.Item>
          <Menu.Item key='about' onClick={changeSelectedKey}>
            About
          </Menu.Item>
          <Menu.Item key='experience' onClick={changeSelectedKey}>
            Experience
          </Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<LaptopOutlined />} title='Work & Research'>
          <Menu.Item key='interests' onClick={changeSelectedKey}>
            Interests
          </Menu.Item>
          <Menu.Item key='curriculum' onClick={changeSelectedKey}>
            CV
          </Menu.Item>
          <Menu.Item key='software' onClick={changeSelectedKey}>
            Software
          </Menu.Item>
          <Menu.Item key='articles' onClick={changeSelectedKey}>
            Articles
          </Menu.Item>
        </SubMenu>
        <SubMenu key='sub3' icon={<NotificationOutlined />} title='Blog'>
          <Menu.Item key='blog' onClick={changeSelectedKey}>
            Blog posts
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

const Sidebar = ({ menu }) => {
  return (
    <Sider
      width={200}
      className='site-layout-background'
      breakpoint='lg'
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
    </Sider>
  );
};

const views = {
  main: <Main />,
  about: <About />,
  experience: <Experience />,
  interests: <Interests />,
  curriculum: <Curriculum />,
  software: <Software />,
  articles: <Articles />,
  blog: <Blog />,
};

const breads = {
  main: ['Home', 'Main'],
  about: ['Home', 'About'],
  experience: ['Home', 'Experience'],
  interests: ['Works', 'Interests'],
  curriculum: ['Works', 'Curriculum'],
  software: ['Works', 'Software'],
  articles: ['Works', 'Articles'],
  blog: ['Blog', 'Posts'],
};

const Page = () => {
  const [visible, setVisible] = React.useState(false);
  const [selectedKey, setSelectedKey] = React.useState('main');
  const [breadcrumbs, setBreadcrumbs] = React.useState('main');

  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
    setBreadcrumbs(key);
  };

  const menu = (
    <MyMenu selectedKey={selectedKey} changeSelectedKey={changeSelectedKey} />
  );

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className='header'>
          <Drawer
            title='Menu'
            placement='left'
            onClose={() => setVisible(false)}
            visible={visible}
          >
            {menu}
          </Drawer>
          <Row>
            <Col flex='60px'>
              <Button
                className='menu'
                type='primary'
                icon={<MenuOutlined />}
                onClick={() => setVisible(true)}
              />
            </Col>
            <Col flex='auto'>
              <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
                <Menu.Item key='1'>My personal website</Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {breads[breadcrumbs].map((bread, index) => (
              <Breadcrumb.Item key={index}>{bread}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Layout
            className='site-layout-background'
            style={{ padding: '24px 0' }}
          >
            <Sidebar menu={menu} />
            <Content
              className='site-layout-background'
              style={{
                padding: '24px 24px',
                minHeight: 720,
              }}
            >
              {views[selectedKey] || <Default />}
            </Content>
            PP{' '}
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Miguel Piña ©2020</Footer>
      </Layout>
    </>
  );
};

const App = () => {
  return (
    <StateProvider>
      <ThemeConfig>
        <ScrollToTop />
        <GlobalStyles />
        <Router />
      </ThemeConfig>
    </StateProvider>
  );
};

export default App;
