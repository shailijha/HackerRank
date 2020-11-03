import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import store from "../../store";
import actionType from "./../../store/constant/constant";
import Header from "../header";
import Row from "react-bootstrap/Row";
import "./index.css";
import BasicKitchen from "./basic";
import AvailableKitchen from './availability'
import Storage from './storage'
import Equipment from './equipment'
import Confirmation from './confirm/confirm'
import Footer from '../footer'

class AddKitchen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      next: false,
    };
  }
  onChangeBasic(event) {
    // console.log("cfvghbjknlm,;'", event.target.value);
  }

  nextclick = e => {
    //this.setState({ next: true });
  }
  // handleClick(data) {

  // }
  handleClick = (data) => {
    // e.preventDefault()
    if (data === 'basic') {
      store.dispatch({ type: actionType.BASIC, payload: true });
      store.dispatch({ type: actionType.AVAILABILITY, payload: false });
      store.dispatch({ type: actionType.STORAGE, payload: false });
      store.dispatch({ type: actionType.EQUIPMENT, payload: false });
      store.dispatch({ type: actionType.CONFIRMATION, payload: false });
    }
    if (data === 'avail') {
      store.dispatch({ type: actionType.BASIC, payload: false });
      store.dispatch({ type: actionType.STORAGE, payload: false });
      store.dispatch({ type: actionType.EQUIPMENT, payload: false });
      store.dispatch({ type: actionType.CONFIRMATION, payload: false });
      store.dispatch({ type: actionType.AVAILABILITY, payload: true });
    }
    if (data === 'store') {
      store.dispatch({ type: actionType.AVAILABILITY, payload: false });
      store.dispatch({ type: actionType.STORAGE, payload: true });
      store.dispatch({ type: actionType.BASIC, payload: false });
      store.dispatch({ type: actionType.EQUIPMENT, payload: false });
      store.dispatch({ type: actionType.CONFIRMATION, payload: false });
    }
    if (data === 'equi') {
      store.dispatch({ type: actionType.STORAGE, payload: false });
      store.dispatch({ type: actionType.EQUIPMENT, payload: true });
      store.dispatch({ type: actionType.AVAILABILITY, payload: false });
      store.dispatch({ type: actionType.BASIC, payload: false });
      store.dispatch({ type: actionType.CONFIRMATION, payload: false });
    }
    if (data === 'confi') {
      store.dispatch({ type: actionType.STORAGE, payload: false });
      store.dispatch({ type: actionType.EQUIPMENT, payload: false });
      store.dispatch({ type: actionType.AVAILABILITY, payload: false });
      store.dispatch({ type: actionType.BASIC, payload: false });
      store.dispatch({ type: actionType.CONFIRMATION, payload: true });
    }

  }
  render() {
    const { availability, storage, equipment, confirmation, basic } = this.props;
    // if (this.props.availability === false) return <BasicKitchen />
    // if (this.props.availability) return <AvailableKitchen />
    return (
      <div>

        <div className="addkitch-ban">
          <Header />
          <div className="list-kitch">LIST YOUR KITCHEN</div>
          {/* <div className="list-txt">
            <div className="list-text">
              Fill details about your kitchen so that foodpreneurs can
            </div>

          </div>
          <div
            className="list-txt"
            style={{ position: "absolute", width: 148, height: 30, marginTop: 190 }}
          >
            find your space
          </div> */}
          {/* </div> */}
        </div>
        <div>

          <div className="list-rect">
            <div className="d-flex flex-columns">
              <Row>
                {(this.props.basic && (!this.props.availability && !this.props.storage && !this.props.equipment && !this.props.confirmation)) ?
                  <div className="list-basic">
                    <div
                      className="list-basic-txt"
                      style={{ marginLeft: 220 }}
                      onClick={() => this.handleClick('basic')}
                    >
                      BASIC
                </div>

                  </div>
                  :
                  <div
                    className="list-basic-avail-txt"
                    style={{ marginTop: 140, marginLeft: 220 }}
                    onClick={() => this.handleClick('basic')}>
                    BASIC
                    </div>
                }

                {this.props.availability ?
                  <div className="list-basic" style={{ marginTop: 200 }}
                    onClick={() => this.handleClick('avail')}>
                    <div
                      className="list-basic-txt"
                      style={{ marginLeft: 125 }}
                    >AVAILABILITY</div>
                  </div> :
                  this.props.basic ?
                    <div
                      className="list-basic-avail-txt"
                      style={{ marginTop: 220 }}
                      onClick={() => this.handleClick('avail')}
                    >
                      AVAILABILITY
                  </div> :
                    <div

                      className="list-basic-avail-txt"
                      style={{ marginTop: 30, marginLeft: 145 }}
                      onClick={() => this.handleClick('avail')}
                    >
                      AVAILABILITY
                  </div>
                }
                {this.props.storage ?
                  <div className="list-basic" style={{ marginTop: 250 }}>
                    <div className="list-basic-txt" onClick={() => this.handleClick('store')} style={{ marginLeft: 70 }}>
                      STORAGE & FACILITES
                </div>
                  </div> :

                  this.props.availability ?
                    <div
                      className="list-basic-avail-txt"
                      style={{ marginTop: 100, marginLeft: 100 }}
                      onClick={() => this.handleClick('store')}
                    >
                      STORAGE & FACILITES
                      </div>
                    :
                    <div
                      className="list-basic-avail-txt"
                      style={{ marginTop: 30, marginLeft: 50 }}
                      onClick={() => this.handleClick('store')}
                    >
                      STORAGE & FACILITES
                    </div>

                }
                {this.props.equipment ?
                  <div className="list-basic" style={{ marginTop: 300 }}>
                    <div className="list-basic-txt"
                      style={{ marginLeft: 150 }}
                      onClick={() => this.handleClick('equi')}>
                      EQUIPMENTS
           </div>
                  </div> :
                  this.props.storage ?
                    <div
                      className="list-basic-avail-txt"
                      style={{ marginTop: 100 }}
                      onClick={() => this.handleClick('equi')}
                    >
                      EQUIPMENTS
                   </div> :
                    <div
                      className="list-basic-avail-txt"
                      style={{ marginTop: 30, marginLeft: 145 }}
                      onClick={() => this.handleClick('equi')}
                    >
                      EQUIPMENTS
                </div>
                }
                {this.props.confirmation ?
                  <div className="list-basic" style={{ marginTop: 350 }}>
                    <div className="list-basic-txt"
                      onClick={() => this.handleClick('confi')}>
                      CONFIRMATION
                </div>
                  </div> :
                  this.props.equipment ?
                    <div
                      className="list-basic-avail-txt"
                      style={{ marginTop: 100, marginLeft: 130 }}
                      onClick={() => this.handleClick('confi')}
                    >
                      CONFIRMATION
                </div> :
                    <div
                      className="list-basic-avail-txt"
                      style={{ marginTop: 30, marginLeft: 130 }}
                      onClick={() => this.handleClick('confi')}
                    >
                      CONFIRMATION
              </div>
                }


              </Row>
            </div>
          </div>
          {/* <AvailableKitchen /> */}
          {this.props.basic ? <BasicKitchen /> : (this.props.availability) ? <AvailableKitchen /> : (this.props.storage) ? <Storage /> : (this.props.equipment) ? <Equipment /> : (this.props.confirmation) ? <Confirmation /> : <BasicKitchen />}
          {/* {!this.props.availability ? <BasicKitchen /> : <AvailableKitchen />}
          {this.props.storage ? <Storage /> : null} */}

        </div>
        <div className="kitch-title" style={{ width: 300, marginTop: 420, marginLeft: 1100 }}>
          Need help to fill the form?
        </div>
        <button className="contactbasic-btn" onClick={() => this.contactbtnClick()}>
          <div className="contactbasic-txt">
            Contact
            </div>
        </button>
        <div style={{ position: 'absolute', width: 1500, marginTop: 1055 }}>
          <Footer />
        </div>
      </div >

    );
  }
}
const mapStateToProps = (state) => {
  return {
    contactpopup: state.appReducer.contactpopup,
    loginpopup: state.appReducer.loginpopup,
    registerpopup: state.appReducer.registerpopup,
    availability: state.appReducer.availability,
    storage: state.appReducer.storage,
    equipment: state.appReducer.equipment,
    confirmation: state.appReducer.confirmation,
    basic: state.appReducer.basic
  };
};
// const mapDispatchToProps = dispatch => ({

// })
//export default Contact;
export default withRouter(connect(mapStateToProps, null)(AddKitchen));
