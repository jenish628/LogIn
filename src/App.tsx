import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar';
import Userregister from './components/login/register/Userregister';
import Companyregister from './components/login/register/Companyregister';
import Main from './components/login/Main';
import { Switch, Route, BrowserRouter} from "react-router-dom";


const App = () => {
  return(
    <>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact> <Navbar/></Route>
      <Route path="/Main" exact component={Main}/>
      <Route path="/Userregister" exact component={Userregister}/>
      <Route path="/Companyregister" exact component={Companyregister}/>
     </Switch>
     </BrowserRouter>
    </>
  )
}

export default App;
