import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home/Home';
import { PackagePage } from './components/PackageInfo/PackagePage';

export default function App() {


    return (
        <React.Fragment>
            <Switch>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route exact={true} path="/" >
                    <Home />
                </Route>
                <Route path="/package/:name" component={PackagePage}></Route>
                <Route path="*">
                    404
                </Route>
            </Switch>
        </React.Fragment>
    );
}