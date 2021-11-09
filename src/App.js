import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Explore from "./components/pages/Explore/Explore";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import Register from "./components/pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/cars' component={Explore}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <PrivateRoute path='/dashboard' >
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path='*' component={NotFound}/>
      </Switch>
    </Router>
    </AuthProvider>
  );
}
