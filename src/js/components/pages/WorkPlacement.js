import React, {Component} from 'react';
import {Row, Col, Well,Panel,Accordion,Button ,NavItem,Nav,ListGroup,ListGroupItem} from 'react-bootstrap';
import NavBar from "../navBar/NavBar.js";
import jriAmericaLogo from "../navBar/jriAmericaLogo.png";

class WorkPlacement extends Component{
    constructor(...args) {
        super(...args);
        this.state = {selected: 1};
        this.handleSelect = this.handleSelect.bind(this);
      }

      getInitialState() {
        return {selected: 1};
      }

     handleSelect(selectedKey) {
        if(selectedKey === 1 )
            this.setState({selected: 1});
        if(selectedKey === 2 )
            this.setState({selected: 2});
        if(selectedKey === 3 )
            this.setState({selected: 3});
        if(selectedKey === 4 )
            this.setState({selected: 4});
      }
      
    render(){

        const placementDetails =  (
            <div className={"personalDetailsButtonInner"}>
                <h1 className={"workPlacementHeaders"}>Placement Details</h1>
                <p><b>Company Name:</b> JRI-America</p>
                <p><b>Address:</b> JRI America In, Technology Park, Tralee, Co. Kerry</p>
                <p><b>Industry Supervisor:</b> Martin Gilliant</p>
                <p><b>Academic Superviser:</b> Anne O' Brien</p>
                <p><b>Start Date:</b> 11th January 2017</p>
                <p><b>Finish Date:</b> 25th August 2017</p>
            </div>)

        const accordionInstance = ( 
                <div className={"personalDetailsButtonInner"}>
                    <h1 className={"workPlacementHeaders"}>About JRI-America</h1>
                    JRI, Japanese Research Institute was founded on February 11th, 1985. 
                    It is a specialist IT subsidiary of the Japanese Financial Services company Sumitomo Mitsui Financial Group 
                    (SMFG)which owns the second-largest bank in Japan, Sumitomo Mitsui Banking Corporation (SMBC).<br/><br/> 
                    SMBC was established in 2001 when Sakura Bank and Sumitomo Bank merged due to the recession.
                    The bank is involved in a broad range of financial services such as leasing, securities, and credit card 
                    related businesses. <br/><br/>JRI America supports the group's western hemisphere IT operations including, UK, USA and 
                    Dubai, while its parent, JRI, provides the same support in Japan and across Asia. The company includes software 
                    development and testing, network support and data centre support. <br/><br/>JRI employs around 63,000 people worldwide. 
                    The Tralee office was established in 2011 and has grown rapidly, attracting graduates, 
                    talented and experienced staff.
                </div>)
        
        let choice = this.state.selected == 1 ? placementDetails : accordionInstance;

        const navInstance = (
            
             <Nav  className={"navBackground"} bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
              <NavItem eventKey={1} active>Placement Details</NavItem>
              <NavItem className={"navItem"} eventKey={2}>About the JRI-America</NavItem>
              <NavItem className={"navItem"}  eventKey={3} >What I Learnt</NavItem>
              <NavItem eventKey={4} >Location</NavItem>
            </Nav>
           
          );

     
        return(
            <div>
                <NavBar />
                <Row>
                    <Col lg={2} lgOffset={1}>
                    <img src={jriAmericaLogo} alt={"Micheal O Dowd"} className="jriLogo" />                         
                         {navInstance}        
                    </Col>
                    <Col lg={4} lgOffset={1}>
                    <Well>{choice}</Well>     
                    </Col>

                    </Row>

           
               
            </div>
        );
    }
}
export default WorkPlacement;
