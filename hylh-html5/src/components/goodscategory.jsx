import React, {Component} from 'react';

import $ from 'jquery';
//import LHAPI from '../config/api';

import Header from "../header/header";
import fetch from 'isomorphic-fetch'



class GoodsName extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <a onClick={this.handle} href="javascript:void (0)">{this.props.Name}</a>
        )
    }

}

class GoodsItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <a href="javascript:void (0)">
                <img src={ this.props.GoodsItem.Img }/>
                <span>{this.props.Name}2222</span>
            </a>
        )
    }
}


class GoodsList extends Component {
    constructor(props) {
        super(props);
    }

    static defaultState = {

    };

    static defaultProps = {
        text : "333",

    };

    handleClick(){
        let NAME = this.refs.nameLess;
        let TEXT = NAME.innerHTML;
        alert(2);
        console.log(TEXT);
    }

    componentDidMount(){

        fetch('http://mobile.vision-world.cn:8080/mobile-web-market/ws/mobile/v1/ticketCenter/list',
            {
                method:'post',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                            'flag':0,
                            'pageRows':20,
                            'toPage':1,
                            'userId':'',
                            'strUserId':'',
                            'strToken':''
                })
            })
            .then(function (response) {
                return response.json()
            })
            .then(function () {
                
            })


        // let api = new LHAPI({
        //     url: 'http://mobile.vision-world.cn:8080/mobile-web-market/ws/mobile/v1/ticketCenter/list',
        //     data: JSON.stringify({
        //         'flag':0,
        //         'pageRows':20,
        //         'toPage':1,
        //         'userId':'',
        //         'strUserId':'',
        //         'strToken':''
        //     }),
        //     method:'post'
        // })
        //
        // api.sendRequest()
        //     .done(function (data) {
        //         console.log(data);
        //     })
        //     .fail(function (error) {
        //         console.log(error);
        //     })

    }

    render() {
        const { text } = this.props;
        return (
            <div className="classify-type" >
                <div ref = "nameLess" className="classify-type-list" >

                </div>
            </div>
        )
    }
}

export default GoodsList;

















