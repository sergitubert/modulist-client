import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home/Home';

export default function App() {
    return (
        <BrowserRouter>
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
                <Route path="*">
                    404
                </Route>
            </Switch>
        </BrowserRouter >
    );
}