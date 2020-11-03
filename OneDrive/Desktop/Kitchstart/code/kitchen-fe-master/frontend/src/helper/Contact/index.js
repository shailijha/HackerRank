import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import store from '../store'
import Carousel from "react-bootstrap/Carousel";
import kitchen from "./../../assets/images/kitchenspace.jpg";
import Card from "react-bootstrap/Card";
import { Button, Modal } from "react-bootstrap";
import Header from "./../header";
import finalLogo from "./../../assets/icons/FinalLogo.svg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Footer from "./../footer";
// import Modal from "react-modal";
import store from "./../../store";
import actionType from "./../../store/constant/constant";

import "./index.css";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
    };
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
    // this.saveData = this.saveData.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    console.log("close modal");
    document.body.style.overflow = "unset";

    //this.setState({ modalIsOpen: false });
    store.dispatch({ type: actionType.CONTACT_POPUP, payload: false });
    // this.setState({ saveit: true });
  }
  handleClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
  };
  handleChange = (data) => {
    // if(data === 'name')
    // if(data === 'mail')
    // if(data === 'number')
    // if(data === 'message')
    console.log("contact form ")
  }
  render() {
    return (
      <Modal
        show={this.state.modalIsOpen === true}
        onHide={this.closeModal}
        centered
        size="lg"
      >
        <Modal.Body closeButton no-border>
          <button type="button" class="close"
            data-dismiss="modal" onClick={this.closeModal}>
            ×
                      </button>
          <h5 class="col-md-12 modal-title text-center reach-kitch">HERE'S HOW YOU CAN REACH OUT TO US
          </h5>
          <h5 class="mt-2 contact-subtitle">You can send us a message and we will get back to you within a few
                hours!!</h5>
          <div class="row">
            <div class="col-md-6 col-xs-6">
              <Form>
                <Form.Group controlId="formBasicEmail" >
                  <input className="form-control contact-login" type="name"
                    placeholder="Your Name" onChange={event => this.handleChange('name', event)}
                  ></input>

                </Form.Group>
                <Form.Group>
                  <input className="form-control contact-login" type="name"
                    placeholder="Your Email" onChange={event => this.handleChange('mail', event)}
                  ></input>
                </Form.Group>
                <Form.Group>
                  <input className="form-control contact-login" type="name"
                    placeholder="Your Number" onChange={event => this.handleChange('number', event)}
                  ></input>
                </Form.Group>
                <Form.Group size="lg" class="contact-subject">
                  <input className="form-control-lg contact-login" type="name"
                    placeholder="Subject/kitchen that you want to enquire about" onChange={event => this.handleChange('message', event)}
                  ></input>
                </Form.Group>
                <center>
                  <Button variant="success" class="btn btn-info">Contact</Button>
                </center>
              </Form>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-5">
              <Form>
                <p class="icn"><i class="fa fa-mobile" style={{ fontSize: '50px', color: 'red' }}></i> &nbsp;&nbsp;+919629758567</p>
                <p class="icn"><i class="fa fa-whatsapp" style={{ fontSize: '40px', color: 'red' }}></i>&nbsp;&nbsp;+919876543210</p>
                <p class="icn"><i class="fa fa-envelope" style={{ fontSize: '30px', color: 'red' }}></i>&nbsp;&nbsp;kickstartkitchen@gmail.com</p>
              </Form>
              <div class="media-left">
                <ul class="list-unstyled">
                  <li>
                    <a href="#"><i class="fa fa-twitter contact-media" style={{ color: '#03A9F4' }}></i></a>
                    <a href="#"><i class="fa fa-facebook contact-media" style={{ color: '#4267B2' }}></i></a>
                    <a href="#"><span class="instagram instagram-icon " ></span></a>
                    <a href="#"><span class="linkedin-icon" style={{ color: '#0077B7' }}></span></a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </Modal.Body>

      </Modal >
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contactpopup: state.appReducer.contactpopup,
  };
};
// const mapDispatchToProps = dispatch => ({

// })
//export default Contact;
export default withRouter(connect(mapStateToProps, null)(ContactPage));

// export default connect(null, null)(withRouter(Homepage))
