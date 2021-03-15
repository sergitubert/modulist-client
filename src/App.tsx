import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home/Home';
import Lists from './components/Lists/Lists';
import { PackagePage } from './components/PackageInfo/PackagePage';
import Profile from './components/Profile/Profile';
import { Layout } from './components/shared/Layout/Layout';

export default function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Layout>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/package/:name" component={PackagePage} />
                    <Route path="/lists" component={Lists} />
                </Layout>
                <Route path="*">
                    404
                </Route>
            </Switch>
        </React.Fragment>
    );
}