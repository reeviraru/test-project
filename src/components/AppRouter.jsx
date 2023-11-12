import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
import About from "../pages/About";

function AppRouter() {

    const publicRoutes = [
        {path: '/posts', component: Posts, exact: true},
        {path: '/posts/:id', component: PostPage, exact: true},
        {path: '/about', component: About, exact: true}
    ]
    return (
        <Switch>
            {publicRoutes.map(route =>
                <Route
                path={route.path}
                component={route.component}
                exact={route.exact}
                key={route.path}/>
            )}

            <Redirect to={'/posts'}/>
        </Switch>
    );
}

export default AppRouter;