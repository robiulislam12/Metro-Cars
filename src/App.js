import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from './components/Header';
import Explore from "./components/pages/Explore/Explore";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import Register from "./components/pages/Register";

export default function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/cars' component={Explore}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='*'>
            <NotFound/> 
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}
