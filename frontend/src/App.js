import { Switch, Route, Link } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import NotFound404 from './pages/notfound/NotFound404'
import HomePageContainer from './pages/homepage/HomePageContainer'
import CreateItem from './pages/profilepage/CreateItem'

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
          <Link to='/profile' style={{ textDecoration: 'none'}} > Profile</Link>
        </AppNav>



        <Switch>
          {/* {views.map(route => {
            return (<AppRoute key={route.path} path={route.path} component={route.component} isPrivate={route.isPrivate} />);
          })} */}
          {/* <Link to='/profile'>Profile</Link> */}
          <Route exact path="/" component={HomePageContainer}/>
          <Route path ='/profile' component={CreateItem}/>
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
`