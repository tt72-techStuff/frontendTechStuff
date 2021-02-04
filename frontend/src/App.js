import './App.css';
import { Switch, Route, Link } from "react-router-dom";
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import NotFound404 from './pages/notfound/NotFound404'
import HomePageContainer from './pages/homepage/HomePageContainer'
import CreateItem from './pages/profilepage/CreateItem'
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import Shop from './pages/Shop/Shop';

import styled from "styled-components";

function App() {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   axiosAuth().get("users/current")
  //     .then(res => {
  //       dispatch(confirmUserLoggedIn())
  //     }).catch(err => {
  //       dispatch(rejectUserLoggedIn())
  //     })
  // }, [dispatch])

  return (
    <>
      <div className="App">
        <AppNav>
          <Link to='/' style={{ textDecoration: 'none'}} > Home</Link>
          <Link to='/shop' style={{ textDecoration: 'none'}} > Shop</Link>
          <Link to='/profile' style={{ textDecoration: 'none'}} > Profile</Link>
          <Link to='/signup' style={{ textDecoration: 'none'}} > Sign Up</Link>
          <Link to='/login' style={{ textDecoration: 'none', border: '2px solid #4267B2', marginLeft: '2%', padding: '0.5%'}} > Login  </Link>
        </AppNav>



        <Switch>
          {/* {views.map(route => {
            return (<AppRoute key={route.path} path={route.path} component={route.component} isPrivate={route.isPrivate} />);
          })} */}
          {/* <Link to='/profile'>Profile</Link> */}
          <Route exact path="/" component={HomePageContainer}/>
          <Route path ='/profile' component={CreateItem}/>
          <Route path ='/login' component={Login}/>
          <Route path ='/signup' component={CreateUser}/>
          <Route path ='/shop' component={Shop}/>

          {/* <Route path="*">
            <NotFound404 />
          </Route> */}
        </Switch>
      </div>
    </>
  );
}

export default App;

const AppNav = styled.nav`
    padding: 2% 4%;
    font-size: 2rem;
    text-align: right;
     a{
       color: #4267B2;
     }
     a:hover{
       color: black;
     }
`