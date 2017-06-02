import React , { Component } from 'react';
import ReactDOM, { render } from 'react-dom';


import './config/rem';
import FastClick from 'fastclick';


import Header from './header/header';
import GoodList from './components/goodscategory'

require('./style/common.css');
require('./style/coupon.css');
require('./style/header/header.css');
require('./style/classify.css');



if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

class App extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const { data } = this.props;
        return (
            <div>
                <Header name = {data}/>
                <GoodList/>
            </div>
        );
    }
}

let app = document.getElementById('app');
render(<App/>,app);