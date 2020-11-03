import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import Modal from "react-modal";
import loginImage from "./../../../assets/images/loginbg.png";
import store from "./../../../store";
import actionType from "./../../../store/constant/constant";
import finalLogo from "./../../../assets/icons/loginLogo.svg";
import { Button, Modal, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import actions from './../../../store/action/action'
import GoogleLogin from 'react-google-login'
import "./index.css";
let registerData = {
  "name": "",
  "password": "",
  "email": ""
}
let googleData = {

  "name": "",
  "email": "",
  "role": "KITCHENUSER",
  "type": "google",
  "idtoken": ""
}
const customStyles = {
  content: {
    width: 640,
    height: 650,
    marginLeft: 350,
    marginTop: 50,
    overflow: "hidden",
    background: '#FFFFFF'
  },
};
class Register extends Component {
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
    store.dispatch({ type: actionType.REGISTER_POPUP, payload: false });
    // this.setState({ modalIsOpen: false });
    // this.setState({ saveit: true });
  }
  handleChange = (data, event) => {
    // console.log("data and event", event.target.value, data)
    if (data === 'name')
      registerData.name = event.target.value
    if (data === 'mail')
      registerData.email = event.target.value
    if (data === 'password')
      registerData.password = event.target.value
  }
  signupButtonClick = () => {
    console.log("sign up click", registerData)
    actions.RegisterApi(registerData)
  }
  loginModal() {
    store.dispatch({ type: actionType.REGISTER_POPUP, payload: false });
    store.dispatch({ type: actionType.LOGIN_POPUP, payload: true });
  }
  responseGoogle(response) {
    googleData.name = response.profileObj.givenName
    googleData.email = response.profileObj.email
    googleData.idtoken = response.tokenObj.id_token
    actions.RegisterApi(googleData)
    console.log("google response", response, response.tokenObj.id_token, response.profileObj.givenName, response.profileObj.email)
  }
  render() {
    const { loginpopup } = this.props;
    return (
      <Modal
        show={this.state.modalIsOpen === true}
        onHide={this.closeModal}
        centered
      >
        <Modal.Body closeButton no-border>
          <button type="button" class="close"
            data-dismiss="modal" onClick={this.closeModal}>
            ×
                        </button>
          <h5 class="modal-title text-center">CREATE ACCOUNT
        <br></br>
            <i className="welcome-logo"></i>
          </h5>
          <Form onSubmit={console.log("asfjbhnk")}>
            <Form.Group controlId="formBasicEmail" >
              <input className="form-control email-login" type="name"
                placeholder="Name" onChange={event => this.handleChange('name', event)}
              ></input>

            </Form.Group>
            <Form.Group controlId="formBasicEmail" >
              <input className="form-control email-login" type="email"
                placeholder="Enter email" onChange={event => this.handleChange('mail', event)}
              ></input>

            </Form.Group>
            <Form.Group controlId="formBasicPassword" >
              <input className="form-control email-login" type="password" placeholder="Password" onChange={event => this.handleChange('password', event)}

              ></input>
            </Form.Group>
            <Form.Group controlId="formBasicPassword" >
              <input className="form-control email-login" type="password" placeholder="Re-confirm password" onChange={event => this.handleChange('password', event)}

              ></input>
              <div class="mt-2 custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter" />
                <label class="custom-control-label" for="defaultRegisterFormNewsletter">Read and Accept the
                <a href="" target="_blank"> terms and conditions </a>
                of Kitchstart
                </label>
              </div>
            </Form.Group>


            <Button variant="danger" type="button" block onClick={() => this.signupButtonClick()}>
              SIGN UP
        </Button>
            <h4 class="mt-2">Or</h4>
            <GoogleLogin
              clientId="44166191130-lf36r8j2lspkumbctajq1eb7vjopp94f.apps.googleusercontent.com"
              render={renderProps => (
                <Button onClick={renderProps.onClick} disabled={renderProps.disabled} variant="danger" size="lg" type="button" block>SIGN UP WITH GOOGLE
                  <i className="gle-img" > </i>
                </Button>
              )}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
            />,

            <div class="mt-2 d-flex justify-content-center links">
              Already have an account?<a href="#" onClick={this.loginModal}>Log in</a>
            </div>
          </Form>

        </Modal.Body>

      </Modal >
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loginpopup: state.appReducer.loginpopup,
  };
};
const mapDispatchToProps = dispatch => ({
  RegisterApi: (data) => dispatch(actions.RegisterApi())
})
//export default Contact;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
// export default Login;
