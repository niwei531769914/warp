import React, {Component, ProTypes} from 'react';

import {Router, Route, Redirect, IndexRoute, browersHistory, hashHistory} from 'react-router';


//动画效果 very important
import {RouteTransition} from 'react-router-transition';

import Classify from '../containers/classify';

class Roots extends Component {

    render() {
        return (
            <RouteTransition
                className="transition-wrapper"
                pathname={this.props.location.pathname}
                atEnter={{ translateX: 100 }}
                atLeave={{ translateX: -100 }}
                atActive={{ translateX: 0 }}
                mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
            >
                {this.props.children}
            </RouteTransition>
        )
    }
}

const classify = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/classify').default)
    }, 'classify')
};

const goodsItems = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/goodsitems').default)
    }, 'goodsItems')
};


const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={Roots}>
            //定向"/"路由
            <IndexRoute component={Classify}/>//首页
            <Route path="goodsItems" getComponent={goodsItems}/>
            <Redirect from='*' to='/'/>
        </Route>
    </Router>
);

export default RouteConfig;

