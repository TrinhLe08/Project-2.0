import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom';

import Main from './Main/Main'

import NotFoud from './404Notfoud/404';
import { ThemeContext } from './Context/ThemeContext'



function App() {
  return (
    <ThemeContext>
           <BrowserRouter>
                   <div className="App">
                       <Switch>
                              <Route exact path="/Project2.0" component={Main} /> 
                              <Route exact path="/*" component={NotFoud} /> 
                              {/* <Route exact path="*" render={() => <Redirect to="/NotFoud" />} /> */}
                        </Switch>  
                   </div>
           </BrowserRouter>
    </ThemeContext>

  );
}

export default App;
