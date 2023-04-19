// import Counter from "./components/Counter";
// import CounterActions from "./components/CounterActions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { routes } from "./routes";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
 } from "react-router-dom"
 import Home from "./views/Home"
 import About from "./views/About"
 import Profie from "./views/Profile"

function App() {

  const {dark} = useSelector(state => state.site)
  const {user} = useSelector(state => state.auth)
  
  return (
    <Router>
        <div className={dark ? 'dark': 'light'}>
          <Header/>
          {/* <Counter />
          <CounterActions /> */}
          <Switch>
              {routes.map(route => (
                <Route exact={route.exact} path={route.path} render={() => {
                  if(route.auth && !user) {
                    return <Redirect to="/login" />
                  }
                  return <route.component />
                }}>
                    <route.component />
                </Route>
              ))}
          </Switch>
          <Footer />
       </div>
    </Router>
  );
}

export default App;
