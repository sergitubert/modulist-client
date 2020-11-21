import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Layout from './shared/Layout/Layout';

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
                <Route exact={true} path="/">
                    <Layout>
                        Hello Alex!
                 </Layout>
                </Route>
                <Route path="*">
                    404
                </Route>
            </Switch>
        </BrowserRouter>
    );
}