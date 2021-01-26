import React from "react";
import { Switch,Route} from "react-router-dom";
import BodySection from './Body';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';


function RouteApp() { 
    return ( 
        <Switch>
            <Route exact path="/" component={BodySection}></Route>
            <Route exact path="/page1" component={Page1}></Route>
            <Route exact path="/page2" component={Page2}></Route>
            <Route exact path="/page3" component={Page3}></Route>
        </Switch>
    );
}

export default RouteApp;