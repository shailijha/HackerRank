import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import store from '../store'
import Carousel from "react-bootstrap/Carousel";
import kitchen from "./../../assets/images/kitchenspace.jpg";
import Card from "react-bootstrap/Card";
// import Header from "./../header";
//import finalLogo from "./../../assets/icons/Logo Black.svg";
import finalLogo from "./../../assets/icons/logo_kitchen.svg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Reach from "./../../assets/icons/Reach.svg";
import Login from "./../modals/login";
import ContactPage from "./../Contact";
import store from "./../../store";
import actionType from "./../../store/constant/constant";
import actions from './../../store/action/action'
import Register from "./../modals/register";
import "./index.css";
import { history } from "../history/history";
import AddKitchen from "../AddKitchen";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from '@material-ui/core/Button';
import {Add} from '@material-ui/icons';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
  }

  componentWillUnmount() {
    //document.body.style.overflow = "unset";
  }
  loginModal = () => {
    //document.body.style.overflow = "hidden";
    // e.preventDefault();
    store.dispatch({ type: actionType.LOGIN_POPUP, payload: true });
  };
  registerModal = () => {
    //document.body.style.overflow = "hidden";
    // e.preventDefault();
    store.dispatch({ type: actionType.REGISTER_POPUP, payload: true });
  };
  addKitchen = () => {
    console.log("clicked")
    let checkToken = actions.validateToken().then((result) => {
      console.log("resultttt", result)
      if (result.message === "Unauthorized") {
        store.dispatch({ type: actionType.LOGIN_POPUP, payload: true });
      }
      else {
        store.dispatch({ type: actionType.BASIC, payload: true });
        this.props.history.push("/AddKitchen");
      }
    })
    console.log("add kitchen clicked", checkToken)


  };
  editContact = () => {
    // e.preventDefault();
    console.log("Edit contact page");
    store.dispatch({ type: actionType.CONTACT_POPUP, payload: true });
    // return <contactModal />;
  };
  profilePage = () => {
    store.dispatch({ type: actionType.PROFILE, payload: true })
    this.props.history.push('/Dashboard')
  }
  changeData = () => {
    this.props.history.push('/')
  }
  render() {
    if (this.props.contactpopup === true) return <ContactPage />;
    if (this.props.loginpopup === true) return <Login />;
    if (this.props.registerpopup === true) return <Register />;
    // console.log("contact page");
    const { contactpopup, loginpopup, registerpopup, userDetails } = this.props;

    // if (contactpopup) return <contactModal />;
    return (
      <header>
        <Navbar bg="dark" expand="lg" className="fixed-header">
          <Navbar.Brand href="/">
            <img
              src={finalLogo}
              className="d-inline-block align-top logo"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Button
            variant="contained"
            className="menu-btn d-block d-sm-none"
            color="secondary"
            size="small"
            startIcon={<Add />}
            onClick={this.addKitchen}
          >
            Add Kitchen
          </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="togglebtn" />
          <Navbar.Collapse id="basic-navbar-nav" className="header-navbar">
            <Nav className="">
              <Nav.Link href="/">HOW THIS WORKS</Nav.Link>
              <Nav.Link href="#" rel="no-refresh" onClick={this.editContact}>CONTACT US</Nav.Link>
              {this.props.userDetails != '' ?
                <Nav.Link href="#" onClick={this.profilePage}>{userDetails.name.toUpperCase()}</Nav.Link>
              :
                <React.Fragment>
                  <Nav.Link href="#" onClick={this.loginModal}>LOGIN</Nav.Link>
                  <span className="menu-splitter d-xs-none">|</span>
                  <Nav.Link href="#" onClick={this.registerModal}>REGISTER</Nav.Link>
                </React.Fragment>
              }
            </Nav>
            <Button
              variant="contained"
              className="menu-btn d-xs-none"
              color="secondary"
              size="small"
              startIcon={<Add />}
              onClick={this.addKitchen}
            >
              Add Kitchen
            </Button>
          </Navbar.Collapse>
        </Navbar>
          
      </header>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contactpopup: state.appReducer.contactpopup,
    loginpopup: state.appReducer.loginpopup,
    registerpopup: state.appReducer.registerpopup,
    userDetails: state.appReducer.userDetails
  };
};
const mapDispatchToProps = dispatch => {
  return {
    validateToken: () => dispatch(actions.validateToken()),
  }
}
//export default Contact;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
