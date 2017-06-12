//jsx语法  页面导航

import React , { Component } from 'react';

class Header extends Component{
     constructor(props){
         super(props);
     }

     render(){
         return (
             <header>{this.props.name}</header>
         )
     }

}

export default Header