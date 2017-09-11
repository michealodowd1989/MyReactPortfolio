import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem, PanelGroup,Panel } from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import FacebookIcon from 'react-icons/lib/fa/facebook-square';
import Twittericon from 'react-icons/lib/fa/twitter-square';
import FolderIconOpen from 'react-icons/lib/fa/folder-open';
import FolderIconClosed from 'react-icons/lib/fa/folder';

class NavBar extends Component{  
    constructor(...args) {
      super(...args);
      this.state = {"status":"close"};
      this.openCloseFolder = this.openCloseFolder.bind(this);
    }

    openCloseFolder() {
      if(this.state.status === "close") {
        this.setState({ status : "open" })
      }
      else
        this.setState({ status : "close" }) 
    }

      render(){
        
        let folderOpenOrClosed = this.state.status === "close" ? <FolderIconClosed /> : <FolderIconOpen /> 

        const navbarInstance = (
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand className={"nameWhiteFont"}>
                Micheal O Dowd | Portfolio 
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} ><NavLink to="/WhatIDo" />What I do</NavItem>
                <NavItem eventKey={2} href="">About Me</NavItem>
                <NavItem eventKey={2} href="#">Work Placement</NavItem>
                <NavItem eventKey={2} href="#">Contact Me</NavItem>
                <NavItem eventKey={2} href="#"><LinkedInIcon /></NavItem> 
                <NavItem eventKey={2} href="#"><FacebookIcon /></NavItem> 
                <NavItem eventKey={2} href="#"><Twittericon /></NavItem>
              </Nav>
              <Nav pullRight>
                <NavDropdown eventKey={3} title="My Projects" noCaret id="bg-nav-dropdown" onClick={this.openCloseFolder}>
                <MenuItem eventKey={3.3}>First Year </MenuItem>
                <MenuItem eventKey={3.3}>Second Year </MenuItem>     
                <MenuItem eventKey={3.3}>Third Year </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Final Year Project</MenuItem>
                </NavDropdown>
                <NavItem eventKey={2} href="#">{folderOpenOrClosed}</NavItem> 
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        ); 
      return(
          <div>
            {navbarInstance}
          </div>
          );
      }
  }
  export default NavBar;
  