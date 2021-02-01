import { Switch, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import NotFound404 from './pages/notfound/NotFound404'

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
        <h1>test</h1>

        <Switch>
          {/* {views.map(route => {
            return (<AppRoute key={route.path} path={route.path} component={route.component} isPrivate={route.isPrivate} />);
          })} */}

          {/* <Route exact path="/">
            <HomePageContainer />
          </Route> */}

          <Route path="*">
            <NotFound404 />
          </Route>

        </Switch>
      </div>
    </>
  );
}

export default App;
