import React, {Component} from 'react';
import { Col, Row, Button, ButtonToolbar, Modal } from 'react-bootstrap';
import firstYearResults from "../navBar/firstYearResults.PNG";

class TranscriptModal extends Component{
  constructor(...args) {
    super(...args);
    this.state = {"status":"close"};
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  getInitialState() {
    return { show: false };
  }

    showModal() {
      this.setState({status : "open"});
    }
  
    hideModal() {
      this.setState({status : "close" });
    }
  
    render() {
      let OpenOrClosed = this.state.status === "close" ? false : true;
      return (
        <ButtonToolbar>
          <Button className={"modalYearButton"} bsStyle="primary" onClick={this.showModal}>
            {this.props.year + " Year"} 
          </Button>
  
          <Modal
            {...this.props}
            show={OpenOrClosed}
            onHide={this.hideModal}
            dialogClassName="transcriptModal"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">{this.props.year + " Year College Results"} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={this.props.transcript} alt={"First Year Results"} className="img-responsive img-center" />  
             </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.hideModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
      );
    }
  };
  
  export default TranscriptModal;