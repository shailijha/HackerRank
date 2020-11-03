import React, { Component, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import Modal from "react-modal";
import loginImage from "./../../../assets/images/loginbg.png";
import store from "./../../../store";
import actionType from "./../../../store/constant/constant";
import finalLogo from "./../../../assets/icons/kitchenLogo.svg";
import { Button, Container, Modal, Form } from "react-bootstrap";
import Register from "./../../modals/register";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import actions from './../../../store/action/action'
import { history } from './../../history/history'
import "./index.css";
import icon from './../../../assets/icons/googleLogo.svg'
import GoogleLogin from 'react-google-login'
const customStyles = {
  // content: {
  //   width: '40%',
  //   height: '60%',
  //   align: 'center',
  //   background: "#585858",
  //   overflow: 'scroll',
  //   verticalAlign: "middle"
  // },
};
let loginData = {
  "email": "",
  "password": ""
}
let googleLoginData = {
  "name": "",
  "email": "",
  "type": "google",
  "idtoken": ""
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      email: '',
      password: ''
    };
    // this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // this.saveData = this.saveData.bind(this);
  }
  registerModal() {
    // document.body.style.overflow = "hidden";
    store.dispatch({ type: actionType.LOGIN_POPUP, payload: false });
    // e.preventDefault();
    store.dispatch({ type: actionType.REGISTER_POPUP, payload: true });
  }
  openModal() {
    this.setState({ modalIsOpen: true });
    // document.body.style.overflow = "unset";
  }

  closeModal() {

    console.log("close modal")
    store.dispatch({ type: actionType.REGISTER_POPUP, payload: false });
    store.dispatch({ type: actionType.LOGIN_POPUP, payload: false });
    document.body.style.OverflowY = "scroll";
  }
  componentWillUnmount() {
    // document.body.style.overflow = "scroll";
  }
  handleMail = (e) => {
    console.log("handle mail", e)
    // this.setState({ email: value })
  }
  handlePwd = (e) => {
    console.log("handle pwd", e)
    // this.setState({ password: value })
  }
  responseGoogle(response) {
    googleLoginData.name = response.profileObj.givenName
    googleLoginData.email = response.profileObj.email
    googleLoginData.idtoken = response.tokenObj.id_token
    actions.LoginApi(googleLoginData)
    //actions.RegisterApi(googleData)
    console.log("google response", response, response.tokenObj.id_token, response.profileObj.givenName, response.profileObj.email)
  }
  handleChange = (data, event) => {
    // console.log("data and event", event.target.value, data)
    if (data === 'mail')
      loginData.email = event.target.value
    if (data === 'password')
      loginData.password = event.target.value
  }
  loginButtonClick = () => {
    console.log("login up click", loginData)
    actions.LoginApi(loginData)
  }
  render() {
    if (this.props.registerpopup) return <Register />;
    const { registerpopup } = this.props;
    return (
      <Modal
        class="modal-dialog modal-dialog-centered"
        scrollable={true}
        show={this.state.modalIsOpen}
        onHide={this.closeModal}
        centered
      >
        <Modal.Body>
          <button type="button" class="close"
            data-dismiss="modal" onClick={this.closeModal}>
            ×
                        </button>
          <h5 class="modal-title text-center">WELCOME TO
                        <br></br>
            <i className="welcome-logo"></i>
          </h5>
          <Form >

            <Form.Group controlId="formBasicEmail">
              <input className="form-control email-login" type="email"
                placeholder="Enter email" onChange={event => this.handleChange('mail', event)}
              ></input>

            </Form.Group>
            <Form.Group controlId="formBasicPassword" >
              <input className="form-control email-login" type="password" placeholder="Password" onChange={event => this.handleChange('password', event)}

              ></input>
            </Form.Group>
            <Button variant="danger" type="button" block onClick={() => this.loginButtonClick()}>
              LOG IN
                        </Button>
            <div class="mt-2 d-flex justify-content-center">
              <a href="#">Forgot your password?</a>
            </div>
            <h4 class="mt-2">Or</h4>
            <GoogleLogin
              clientId="44166191130-lf36r8j2lspkumbctajq1eb7vjopp94f.apps.googleusercontent.com"
              render={renderProps => (
                <Button onClick={renderProps.onClick} disabled={renderProps.disabled} variant="danger" size="lg" className="mt-3 mb-3 login-txt" type="button" block>LOG IN WITH GOOGLE
                  <i className="gle-img" > </i>
                </Button>
              )}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
            />

            <div class="mt-2 d-flex justify-content-center links">
              Don't have an account?<a href="#" onClick={this.registerModal}>Sign Up</a>
            </div>
          </Form>

        </Modal.Body>

      </Modal >
    );
  }
}
const mapStateToProps = (state) => {
  return {
    registerpopup: state.appReducer.registerpopup,
  };
};
const mapDispatchToProps = dispatch => ({
  LoginApi: (data) => dispatch(actions.LoginApi())
})
// const mapDispatchToProps = dispatch => ({

// })
//export default Contact;
export default withRouter(connect(mapStateToProps, null)(Login));
// export default Login;
