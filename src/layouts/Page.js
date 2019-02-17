import React from 'react';
import '../styles/Page.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import BandsPage from '../pages/BandsPage';
import ChannelsPage from '../pages/ChannelsPage';
import ErrorPage from '../pages/ErrorPage';


const Page = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/bands" component={BandsPage}></Route>
            <Route path="/channels" component={ChannelsPage}></Route>
            <Route component={ErrorPage}></Route>
        </Switch>
    );
}

export default Page;