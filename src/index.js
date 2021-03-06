import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import 'antd/dist/antd.css'
import './index.css';
import App from './App';

import { mainRouters } from "./routers";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Router>
        <Switch>
            {/*所有/admin路径转发给App.js, 其他路径直接匹配*/}
            <Route path='/admin' render={routeProps => <App {...routeProps}/>}></Route>
            {mainRouters.map(route => {
                return <Route key={route.path} {...route} ></Route>
            })}
            <Redirect to='/404'/>
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
