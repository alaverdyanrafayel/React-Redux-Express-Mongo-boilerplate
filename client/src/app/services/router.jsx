// @flow

import { Switch, Route } from 'react-router-dom';
import * as Pages from "../pages";
import * as React from "react";

export default () => {

    return (
        <Switch>
            <Route exact path="/" component={Pages.Home} />
        </Switch>
    );
};
