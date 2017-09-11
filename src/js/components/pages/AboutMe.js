import React, {Component} from 'react';
import { Col, Row,Well, Collapse, Button, Fade,Accordion, Panel, ButtonToolbar, Modal } from 'react-bootstrap';
import NavBar from "../navBar/NavBar.js";
import TranscriptModal from "../modals/TranscriptModal.js";
import PicOfMe from "../navBar/picOfMicheal.png";
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import FacebookIcon from 'react-icons/lib/fa/facebook-square';
import Twittericon from 'react-icons/lib/fa/twitter-square';
import firstYearResults from "../navBar/firstYearResults.PNG";
import secondYearResults from "../navBar/secondYearResults.PNG";
import cvPDF from "../navBar/MichealODowdCV.pdf";
import CircularProgressbar from 'react-circular-progressbar';

class AboutMe extends Component{
    constructor(...args) {
        super(...args);
        this.state = {};
      }

      getInitialState() {
        return {show: false};
      }
    
      showModal() {
        this.setState({show: true});
      }
    
      hideModal() {
        this.setState({show: false});
      }

    render(){
        const accordionInstance = (
            <Panel className={"personalDetailsButton"} >   
                <Accordion>
                    <Panel className={"AboutMeDropDownButtons"} header="Personal Details" eventKey="1">
                        <div className={"personalDetailsButtonInner"}>
                            <p><b>Name:</b> Micheal O Dowd</p>
                            <p><b>Date Of Birth:</b> 20th June 1989</p>
                            <p><b>Degree:</b> Computing with Software Development</p>
                            <p><b>Place of study:</b> Institute of Technology Tralee</p>
                            <p><b>Moblie Phone:</b> 083-3900931</p>
                            <p><b>Email:</b> micheal.odowd1989@gmail.com</p>
                        </div>
                    </Panel>
                    <Panel className={"AboutMeDropDownButtons"} header="College Transcripts" eventKey="2">
                        <Accordion>   
                            <TranscriptModal transcript={firstYearResults} year={"First"}/>
                            <TranscriptModal transcript={secondYearResults} year={"Second"}/>          
                        </Accordion>
                    </Panel>
                    <Panel className={"AboutMeDropDownButtons"} header="Curriculum Vitae" eventKey="3">
                        <Accordion>
                            <a href={cvPDF} target="_blank"><Button className={"pdfButton"} bsStyle="primary">PDF</Button></a>       
                        </Accordion>
                    </Panel>
                </Accordion>
            </Panel>
          );
        return(
            <div className={"background"}>
                <NavBar />
                <Row>
                    <Col lg={3} lgOffset={1}>
                        <img src={PicOfMe} alt={"Micheal O Dowd"} className="img-responsive img-center" />                
                        {accordionInstance}         
                    </Col>
                    <Col lg={6} lgOffset={1}>
                        <h1 className={"AboutMeDropDownButtons"}>About Me</h1>
                        <div className={"aboutMeDetails"}>
                            <Well>
                                <p> 
                                    I currently have an level 7 (Ordinary) degree in Computing with Software Development and I am now in fourth year working on getting my honors degree.
                                </p>
                                <p>  
                                    I have just recently finished an 8 month intership at <a href="http://www.jri-america.com/">JRI-America </a>
                                    where I gained invaluable experience and knowledge to help me on my path to becoming a expert Software Developer.<br /><br /> 
                                    Software Development is not just a job for me, it's a passion.  
                                </p>
                            </Well> 
                            <br/><br/>                            
                        </div> 
                        <Row>
                            <Col lg={3} className={"moduleNamesMargin"}>
                                <CircularProgressbar percentage={96} initialAnimation={true} />
                                    <br/>
                                    <b className={"moduleNames"}>SOFTWARE ENGINEERING PROJECT</b>
                            </Col >
                            <Col lg={3}>
                                <CircularProgressbar percentage={92} initialAnimation={true} />
                                <br/>
                                <b className={"moduleNames"}>OBJECT ORIENTED PROGRAMMING 3</b>
                            </Col>
                            <Col lg={3}>
                                <CircularProgressbar percentage={90}  initialAnimation={true} />
                                <br/>
                                <b className={"moduleNames"}>DYNAMIC WEB: OPENSOURCE AP</b>
                            </Col>
                            <Col lg={3}>
                                <CircularProgressbar percentage={80} initialAnimation={true} />
                                <br/>
                                <b className={"moduleNames"}>ROUTING CONCEPTS AND PROTOCOLS</b>
                             </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default AboutMe;