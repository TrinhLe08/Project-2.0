import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom';

import Header from './Header/Header'

import AboutUs from './RoutingComponent/AboutUs';
import ContactUs from './RoutingComponent/ContactUs';
import Ecommerce from './RoutingComponent/Ecommerce';
import LandingPage from './RoutingComponent/LandingPage';
import PricingPage from './RoutingComponent/PricingPage';
import ProductPage from './RoutingComponent/ProductPage';
import LoginPage from './RoutingComponent/LoginPage';
import ProfilePage from './RoutingComponent/ProfilePage';
import SignupPage from './RoutingComponent/SignupPage';
import Main from './Main/Main'

import NotFoud from './404Notfoud/404';
import { ThemeContext } from './Context/ThemeContext'



function App() {
  return (
    <ThemeContext>
           <BrowserRouter>  
                   <div className="App">
                       <Switch>
                               <Route exact path="/Project-2.0" component={Main} /> 
                               <Route exact path="/AboutUs" component={AboutUs} />
                               <Route path="/PricingPage" component={PricingPage} />
                               <Route path="/LandingPage" component={LandingPage} />
                               <Route path="/ProductPage" component={ProductPage} />
                               <Route path="/Ecommerce" component={Ecommerce} />
                               <Route path="/LoginPage" component={LoginPage} />
                               <Route path="/SignupPage" component={SignupPage} />
                               <Route path="/ProfilePage" component={ProfilePage} />
                               <Route path="/ContactUs" component={ContactUs} />
                               <Route exact path="/*" component={NotFoud} /> 
                               <Route exact path="*" render={() => <Redirect to="/NotFoud" />} />
                        </Switch>  
                   </div>
           </BrowserRouter>
    </ThemeContext>

  );
}

export default App;
