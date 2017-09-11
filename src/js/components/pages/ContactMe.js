import React, {Component} from 'react';
import { Col, Row,Well,Glyphicon,ControlLabel,FormControl,Form,FormGroup,Button} from 'react-bootstrap';
import NavBar from "../navBar/NavBar.js";
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import FacebookIcon from 'react-icons/lib/fa/facebook-square';
import Twittericon from 'react-icons/lib/fa/twitter-square';
class ContactMe extends Component{
    render(){
        const formInstance = (
        <div>
            <Form inline className={"contactMe"}>
                <Row>
                    <Col lg={2} lgOffset={2}>       
                        <FormGroup controlId="formInlineName">
                        <Col lg={2}> 
                            <ControlLabel >Name </ControlLabel>
                        </Col>
                        <Col lg={8} lgOffset={2}> 
                            <input type="text" placeholder="" />
                        </Col>
                        </FormGroup>
                    </Col>
                </Row>
            <br />
            <hr/>
                <Row>
                    <Col lg={4} lgOffset={2}>       
                        <FormGroup controlId="formInlineEmail">
                            <Col lg={2}> 
                                <ControlLabel >Email </ControlLabel>
                            </Col>      
                            <Col lg={8} lgOffset={2}> 
                                <input type="email" placeholder="" />
                            </Col>    
                        </FormGroup>
                     </Col>
                </Row>
            <br />
            <hr/>
                <Row>
                    <Col lg={4} lgOffset={2}>
                        <FormGroup controlId="formInlineName">
                            <Col lg={2}> 
                                <ControlLabel >Subject </ControlLabel>
                            </Col>
                            <Col lg={8} lgOffset={2}> 
                                <input type="text" placeholder="" />
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
            <br />
            <hr/>
                <Row>
                    <Col lg={4} lgOffset={2}>
                        <FormGroup controlId="formInlineName">
                            <Col lg={2}> 
                                <ControlLabel >Message</ControlLabel>
                            </Col> 
                            <Col lg={7} lgOffset={2}>
                                <textarea className={"messageBox"} rows="8" placeholder=""></textarea>
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
            <br />
            <hr/>
                <Row>
                    <Col lg={4} lgOffset={4} xsOffset={4}>
                        <Button type="submit" bsStyle="primary" className={"sendEmailButton"}>
                            Send Email
                        </Button>
                    </Col>
                </Row>
            </Form>
                <Row>
                    <Col lg={5} lgOffset={7} xs={8}  xsOffset={7}> 
                        <h1>
                            <div className={"socialMediaIcons"}>
                                <LinkedInIcon />
                                <FacebookIcon />
                                <Twittericon />  
                            </div>
                        </h1>
                    </Col>
                </Row>
        </div>);

        return(
            <div className={"background"}>
                <NavBar />
                <Row>
                     <Col lg={3} lgOffset={5} xs={8}  xsOffset={3}> 
                        <div className={"contactText"}> Contact <div className={"envelopeIcon"}><Glyphicon glyph="envelope"/></div></div> 
                    </Col>
                </Row>  
                <Row>
                     <Col lg={8} lgOffset={1} xs={8} xsOffset={0}>
                          <br/><br/>
                           {formInstance}
                     </Col>
                </Row>           
            </div>
        );
    }
}
export default ContactMe;