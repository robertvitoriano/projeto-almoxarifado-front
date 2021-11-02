import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from 'pages/Unauth/SignIn'
import HomePage from 'pages/Auth/user/Home'

import { unauthRoutes, authRoutes } from './routes'
import { AuthLayout } from "layouts";
import { useSelector } from 'react-redux'


export default function App() {
  //@ts-ignore
  const token = useSelector((state) => state.auth.token)

  return (
    <Router>
      {!token ?
        <Switch>
          <Route path={"/"} exact component={LoginPage} />
          {unauthRoutes.map((route, index) => (<Route path={route.path} component={route.component} key={index} />))}
        </Switch> :
        <AuthLayout>
          <Switch>
            <Route
              path={"/"}
              exact
              component={HomePage} />
            {authRoutes.map((route, index) => (<Route
              exact
              path={route.path}
              component={route.component}
              key={index} />))} 
          </Switch>
        </AuthLayout>}
    </Router>
  );
}
