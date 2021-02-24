import './App.css'
import { BrowserRouter, Switch, Route,Link } from 'react-router-dom'
import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Button } from 'reactstrap'
import Loading from './components/utils/loading/Loading'
import { getAuthUser } from './js/actions/authActions'
import AppNavbar from './components/AppNavBar'

import Dashboard from './components/pages/Dashboard'
import Mersini from './components/pages/Mersini'
import Home from './components/pages/Home'
import ProductList from './components/Product/ProductList'
import AddModal from './components/Product/AddModal'
import AddStoreDesign from './components/Stores/AddStoreDesign'
import CreateCategory from './components/Category/CreateCategory'
import StoreList from './components/Stores/StoreList'
import story from './components/pages/Seller/story'

import PrivateRoute from './components/routes/PrivateRoute'
import SellerPrivateRoute from './components/routes/SellerPrivateRoute'
import { getStores } from './js/actions/AllstoreActions'
import StoreHome from './components/Stores/Storehome'
import ShoppingCard from './components/pages/Shop/ShoppingCard'
import AdminHome from './components/admin/Adminhome'
import LoginModal from './components/auth/LoginModal'

function App() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.authReducer)
  const { user } = useSelector((state) => state.authReducer)
  const  {store}  = useSelector((state) => state.storeReducer)

  const getUser = () => dispatch(getAuthUser())
  useEffect(() => {
    getUser()
  }, [])

  

  


  // const getmystor = () => dispatch(getOneStores(store.store_Name))

  // useEffect(() => {
  //   getmystor()
  // }, [])

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Loading
          
        />
      </div>
    )
  }
  return (
    <BrowserRouter>
      <AppNavbar   />
      <div className="App">
        {/* <Link to="/list">
          <Button color="info">product list</Button>
        </Link>
        <Link to="/form">
          <Button color="info">add product</Button>
        </Link>
        <Link to="/Storelist">
          <Button color="info">Store list</Button>
        </Link>
        <Link to="/Store">
          <Button color="info">add Store</Button>
        </Link>
        <Link to="/category">
          <Button color="info">all categorys</Button>
        </Link> */}
      </div>
      
        <Route exact path="/" component={Home} />

        <Route  path="/login" render={() => <LoginModal />} />

        <Route  path="/SellerAdmin" render={() => <AdminHome />} />
        
        <Route  path="/shop" render={() => <ShoppingCard />} />

        <Route path="/list" render={() => <ProductList />} />
        
        <Route path="/Storelist" render={() => <StoreList />} />

        <Route path="/Store" render={() => <AddStoreDesign />} />
        
        <PrivateRoute path="/dashboard" component={Dashboard} user={user} />
        
        <SellerPrivateRoute path="/myStore" component={StoreHome} store={store} />
      {/* <Route path="/form" render={() => <AddModal />} /> */}
      {/* <Route path="/category" render={() => <CreateCategory />} /> */}
      {/* <PrivateRoute path="/Store" component={Mersini} user={user} /> */}
    </BrowserRouter>
  )
}

export default App
