import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Register from './Register'
import Login from './Login'
import MemberPage from './MemberPage'
import Admin from './Admin'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/Register' component={Register}/>
      <Route exact path='/Login' component={Login}/>
      <Route exact path='/MemberPage' component={MemberPage}/>
      <Route exact path='/Admin' component={Admin}/>
    </Switch>
  </main>
)

export default Main
