import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {AppContext} from './context/AppContext'
import {useAuth} from './hooks/auth.hook'
import {useRoutes} from './routes/routes'


function App() {

  const {token,userId,logOut,logIn} = useAuth()
  const isLogin = !!token
  const routes = useRoutes(isLogin)


  const value = {
    token,userId,logOut,logIn
  }

  return (
    <AppContext.Provider value = {value}>
      <Router>
        <div className="app">
          {routes}
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
