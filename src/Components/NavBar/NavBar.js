import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Badge, makeStyles, Menu, MenuItem, Button, Hidden, Drawer, useTheme, Divider, List, ListItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import './NavBar.css';
import logo1 from "../../images/logo/logo1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { CartContext } from '../../App';
import { Link } from 'react-router-dom';
import Auth from '../Login/use-auth';
import LogOut from '../LogOut/LogOut';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  logo1: {
    width: '100px',
    margin: '16.5px',
  },
  listItemText: {
    fontSize: '18px',
    fontWeight: '900',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const NavBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [emailVerified, setEmailVerified] = useState();
  const [cart] = useContext(CartContext);

  console.log(emailVerified);

  const { window } = props;
  const { register, handleSubmit } = useForm();

  const theme = useTheme();
  const classes = useStyles();
  const auth = Auth();

  const onSubmit = data => console.log(data);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(() => {
    if (auth.user) {
      setEmailVerified(auth.user.emailVerified);
    }
  }, [auth.user]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div onClick={handleMenuClose}>
        <LogOut></LogOut>
      </div>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const drawer = (
    <div>
      <img className={classes.logo1} src={logo1} alt="" />
      <div className={classes.toolbar} />
      <Divider style={{ backgroundColor: "#498EC5" }} />
      <List className="drawer-btn">
        <a style={{ textDecoration: "none", color: "black" }} href="/about">
          <ListItem button>
            <p>ABOUT BOIWALA</p>
          </ListItem>
        </a>
      </List>
    </div>
  )


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="navBar">
      <div className={classes.grow}>
        <AppBar style={{
          backgroundColor: "white",
          color: "#498EC5",
          borderBottom: "1px solid #498EC5",
          boxShadow: "none"
        }} position="fixed">
          <Toolbar>
            <IconButton
              style={{ outline: "none" }}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <MenuIcon style={{ fontSize: "35px" }} />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              <img className="logo1" src={logo1} alt="" />
            </Typography>
            <div className="search">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input name="search" placeholder="Search" ref={register} />
                <Button type="submit"><FontAwesomeIcon icon={faSearch} /></Button>
              </form>
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Link style={{ color: "#498EC5" }} to="/cart">
                <IconButton style={{ outline: "none" }} color="inherit">
                  <Badge badgeContent={cart && cart.length} color="secondary">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </Badge>
                </IconButton>
              </Link>
              <div>
                {
                  emailVerified ?
                    <IconButton
                      style={{ outline: "none" }}
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton> :
                    <Link style={{ textDecoration: "none" }} to="/login">
                      <Button className="signIn">Sign In</Button>
                    </Link>
                }
              </div>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <div>
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{ paper: classes.drawPaper }}
              ModalProps={{ keepMounted: true }}
            >
              {drawer}
            </Drawer>
          </div>
        </Hidden>
      </nav>
    </div>
  );
};

export default NavBar;