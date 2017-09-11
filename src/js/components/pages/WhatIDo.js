import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import NavBar from "../navBar/NavBar.js";
class WhatIDo extends Component{

    render(){
        return(
            <div>
                <NavBar />
                <h2>What I do</h2>
            </div>
        );
    }
}
export default WhatIDo;
