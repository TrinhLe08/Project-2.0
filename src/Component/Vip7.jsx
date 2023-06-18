import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

import AboutUs from '../RoutingComponent/AboutUs';
import ContactUs from '../RoutingComponent/ContactUs';
import Ecommerce from '../RoutingComponent/Ecommerce';
import LandingPage from '../RoutingComponent/LandingPage';
import PricingPage from '../RoutingComponent/PricingPage';
import ProductPage from '../RoutingComponent/ProductPage';
import ProductPage2 from '../RoutingComponent/ProductPage2';
import ProfilePage from '../RoutingComponent/ProfilePage';
import SignupPage from '../RoutingComponent/SignupPage';

import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext } from 'react';

import Img2 from '../SubComponent/Img2'


export default function Vip7(){

    const Vip = useContext(VipContext)

    return(

    <BrowserRouter>
       
        <div className="Vip7">
            <div className="div">
                <h1 className="h1">
                Example Pages
                </h1>
                <p className="p">
                Forget about building everything from scratch.
                From landing pages to e-commerce or blog pages,
                 you will be able jump start your development.
                  Show your clients a quick prototype and get
                  inspired for your next project!
                </p>
            </div>
  
         <div className="logPages">
        
               {
                   Vip.Vip7.map((img,index) => (
                       <Img2 index = {index} ImgV = {img} na/>
                   ))
               }
               
         </div>

         <Switch>
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route path="/PricingPage" component={PricingPage} />
          <Route path="/LandingPage" component={LandingPage} />
          <Route path="/ProductPage" component={ProductPage} />
          <Route path="/Ecommerce" component={Ecommerce} />
          <Route path="/ProductPage2" component={ProductPage2} />
          <Route path="/SignupPage" component={SignupPage} />
          <Route path="/ProfilePage" component={ProfilePage} />
          <Route path="/ContactUs" component={ContactUs} />
         </Switch>

       
        </div>
  </BrowserRouter> 
      
    )
}