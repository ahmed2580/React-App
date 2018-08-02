import React , {Component}  from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import App from './App';
// import User from './User';
import NotFound from './NotFound';



class Router extends Component {
render(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                {/* <Route path="/user" component={User} /> */}
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
        );
    }
}
export default Router;