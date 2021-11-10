import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AddACar from './AddACar';


const drawerWidth = 200;

export default function DashBoard(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
    //Nesting url and path
    let { path, url } = useRouteMatch();

    //Admin
    const {admin} = useAuth()

  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div style={{backgroundColor:'#4BB155', color:'white', height:'100vh'}}>
        <Toolbar />
        <List>
          
          { !admin && <> <Link to={`${url}`}>
            <ListItem button ><span style={{color:'white'}}>My Orders</span>
            </ListItem>
          </Link>

          <Link to={`${url}/payment`}>
            <ListItem button ><span style={{color:'white'}}>Pay Now</span>
            </ListItem>
          </Link>
          
          <Link to={`${url}/review`}>
            <ListItem button ><span style={{color:'white'}}>Review</span>
            </ListItem>
          </Link> </>}
            

          {
             /* admin && */ <><Link to={`${url}/orders`}>
            <ListItem button >
                <span style={{color:'white'}}>Manage All Orders</span>
            </ListItem>
          </Link>
          <Link to={`${url}/add-car`}>
            <ListItem button >
            <span style={{color:'white'}}>Add A Car</span>
            </ListItem>
          </Link>
          <Link to={`${url}/make-admin`}>
            <ListItem button >
                <span style={{color:'white'}}>Make Admin</span>
            </ListItem>
          </Link>
          <Link to={`${url}/products`}>
            <ListItem button >
                <span style={{color:'white'}}>Manage Products</span>
            </ListItem>
            </Link>
            </>
          }
          <ListItem button ><span style={{color:'white'}}>Log Out</span></ListItem>
          <ListItem button >
            <Link to='/home'>
                <span style={{color:'white'}}>
                Go to Home
                </span>
            </Link>
          </ListItem>
          
        </List>
        
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
          ml: { sm: `${drawerWidth}px` },
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
            Dashboard
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
       
       {/* Declare the react router for nesting */}
          
          <Switch>
            <Route exact path={`${path}/add-car`}>  <AddACar/></Route>
            
          </Switch> 

       {/* Declare the react router for nesting */}
      </Box>
    </Box>
    )
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };