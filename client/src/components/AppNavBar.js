import React, { useState, Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap'
import LoginStore from './auth/LoginStore'
import LoginModal from './auth/LoginModal'
import RegisterModal from './auth/RegisterModal'
import { getAuthUser, logout } from '../js/actions/authActions'
import { logoutStore } from '../js/actions/storeActions'

import './AppNavBar.css'

const AppNavbar = ({usero}) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const isAuthStore = useSelector((state) => state.storeReducer.isAuthStore)
  const store = useSelector((state) => state.storeReducer.stor)
  const isAuth = useSelector((state) => state.authReducer.isAuth)
  const user = useSelector((state) => state.authReducer.user)
  // const usero = useSelector((state) => state.authReducer.user.role)
  const admin = useSelector((state) => state.authReducer.role)
  

  const toggle = () => setIsOpen(!isOpen)

  const logoutUser = () => {
    dispatch(logout())
  }
  const logoutStor = () => {
    dispatch(logoutStore())
  }

 
  
  const authAdminLinks = (
    <Fragment>
      <NavItem>
        <Link to="/SellerAdmin">
          <span className="navbar-text mr-3">
            <strong>{user ? `${user.name}` : null}</strong>
          </span>
        </Link>
      </NavItem>
      <Link to="/list">
        <span className="navbar-text mr-3">
          <strong>Products</strong>
        </span>
      </Link>
      <Link to="/Storelist">
        <span className="navbar-text mr-3">
          <strong>Stores</strong>
        </span>
      </Link>

      <Link to="#">
        <Button autoFocus color="inherit">
          <SupervisorAccountIcon />
        </Button>
      </Link>
      <NavLink href="#" onClick={logoutUser}>
        {' '}
        Logout
      </NavLink>
    </Fragment>
  )
  const authStoreLinks = (
    <Fragment>
      <NavItem>
        <Link to="/MyStore">
          <span className="navbar-text mr-3">
            <strong>{store ? `${store.store_Name}` : null}</strong>
          </span>
        </Link>
      </NavItem>
      <Link to="/list">
        <span className="navbar-text mr-3">
          <strong>Products</strong>
        </span>
      </Link>
      <Link to="/Storelist">
        <span className="navbar-text mr-3">
          <strong>Stores</strong>
        </span>
      </Link>

      <NavLink href="/" onClick={logoutStor}>
        {' '}
        Close Store
      </NavLink>

      <NavLink href="#" onClick={logoutUser}>
        {' '}
        Logout
      </NavLink>
      {/* <Link to="/SellerAdmin">
        <Button autoFocus color="inherit">
          <SupervisorAccountIcon />
        </Button>
      </Link> */}
    </Fragment>
  )

  const authLinks = (
    <Fragment>
      <NavItem>
        <Link to="/dashboard">
          <span className="navbar-text mr-3">
            <strong>{user ? `${user.name}` : null}</strong>
          </span>
        </Link>
        <Link to="/Store">
          <span className="navbar-text mr-3">
            <strong>{user ? `Become a Seller` : null}</strong>
          </span>
        </Link>
      </NavItem>
      <Link to="/list">
        <span className="navbar-text mr-3">
          <strong>Products</strong>
        </span>
      </Link>
      <Link to="/Storelist">
        <span className="navbar-text mr-3">
          <strong>Stores</strong>
        </span>
      </Link>

      <NavItem>
        <LoginStore />
      </NavItem>
      <Link to="/shop">
        <Button autoFocus color="inherit">
          <ShoppingCartIcon />
        </Button>
      </Link>

      <NavLink href="#" onClick={logoutUser}>
        {' '}
        Logout
      </NavLink>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <Link to="/list">
        <span className="navbar-text mr-3">
          <strong>Products</strong>
        </span>
      </Link>
      <Link to="/Storelist">
        <span className="navbar-text mr-3">
          <strong>Stores</strong>
        </span>
      </Link>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
      <Link to="/shop">
        <Button autoFocus color="inherit">
          <ShoppingCartIcon />
        </Button>
      </Link>
    </Fragment>
  )

  return (
    <div className="Navo">
      <Navbar expand="sm" className="Nav">
        <Container>
          <NavbarBrand href="/">Decoration.tn</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>

              {admin===1?authAdminLinks:isAuthStore ? authStoreLinks : isAuth ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavbar
