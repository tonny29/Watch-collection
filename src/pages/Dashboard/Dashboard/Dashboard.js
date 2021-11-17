import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddWatch from '../AddWatch/AddWatch';
import ManageProduct from '../ManageProduct/ManageProduct';
import AllOrder from '../AllOrder/AllOrder';
import MyOrder from '../MyOrder/MyOrder';
import useAuth from '../../hooks/useAuth';
import DashHome from '../DashHome/DashHome';
import './Dashboard.css';




const drawerWidth = 200;

function Dashboard(props) {
  const {admin}=useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  let { path, url } = useRouteMatch();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <NavLink to="/"  className='button-color'>Home</NavLink><br />
      <NavLink to="/explore" className='button-color'>Explore Item</NavLink><br />
      <NavLink to={`${url}/MyOrder`} className='button-color'>My Order</NavLink><br />

     {admin && <Box>
        <NavLink to={`${url}/makeAdmin`} className='button-color'>Make Admin</NavLink> <br />
        <NavLink to={`${url}/addProduct`} className='button-color'>Add Product</NavLink><br />
        <NavLink to={`${url}/ManageProduct`} className='button-color'>Manage All Product</NavLink><br />
        <NavLink to={`${url}/AllOrder`} className='button-color'>Manage All Order</NavLink><br />
      </Box>}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, backgroundColor: '#093150'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            WELLCOME TO WATCH WORLD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
           <DashHome></DashHome>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/ManageProduct`}>
            <ManageProduct></ManageProduct>
          </Route>
          <Route path={`${path}/addProduct`}>
            <AddWatch></AddWatch>
          </Route>
          <Route path={`${path}/AllOrder`}>
            <AllOrder></AllOrder>
          </Route>
          <Route path={`${path}/MyOrder`}>
            <MyOrder></MyOrder>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
