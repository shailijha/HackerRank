import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import store from "../../store";
import actionType from "../../store/constant/constant";
import Header from "../header";
import Row from "react-bootstrap/Row";
import "./index.css";
import { Dropdown, DropdownButton } from 'react-bootstrap'
import './availability.css'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import { ClickAwayListener } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { jsonKitchenForm } from './basic'
import kitchData from './../../store/action/action'
import InputBase from '@material-ui/core/InputBase';
import NativeSelect from '@material-ui/core/NativeSelect';
let business;
class AvailableKitchen extends React.Component {
  businessButton = [];
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      next: false,
      open: false,
      dropDown: 'Rent',
      dropDownPrice: 'Months',
      color: '#FFFCFC',
      occupancy: '',
      businessOccupancy: []
    };
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleButtonClickData = this.handleButtonClickData.bind(this)
    this.wrapperRef = React.createRef();
    // this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  // componentDidMount() {
  //   document.addEventListener('mousedown', this.handleClickOutside);
  // }
  // componentWillUnmount() {
  //   document.removeEventListener('mousedown', this.handleClickOutside);
  // }
  onChangeBasic(event) {
    console.log("cfvghbjknlm,;'", event.target.value);
  }

  nextclick() {
    // this.setState({ next: true });
    store.dispatch({ type: actionType.STORAGE, payload: true });
    store.dispatch({ type: actionType.AVAILABILITY, payload: false })
  }
  handleButtonClick = () => {
    this.setState({ open: true })
  }
  handleButtonClickData = (data) => {
    if (data === 'Private' || data === 'Shared' || data === 'Shift') {
      jsonKitchenForm.kitchen_pricings[0].occupancy_type = data
      this.setState({ color: '#32CD32', occupancy: data })
    }

    if (data === 'Delivery only' || data === 'Restaurant' || data === 'Photoshoot' || data === 'Cafe' || data === 'Cooking classes' || data === 'Recipe Testing' || data === 'Food Production' || data === 'Resto Bar' || data === 'Take Away' || data === 'Caterer') {
      business = data
      let check = { "rentSpace": data }
      this.businessButton.push(data)
      this.setState({ businessOccupancy: this.businessButton })
      if (this.state.businessOccupancy.indexOf('Delivery only') > -1) {
        console.log("Selected")
      }
      kitchData.getBusinessType(data).then(result => {
        let businessid = { "businesstype_id": result }
        jsonKitchenForm.kitchen_facilities.push(businessid)
      })
    }

  }
  handleDropdown = (event) => {
    this.setState({ dropDown: event.target.value })
    jsonKitchenForm.kitchen_pricings[0].sale_type = event.target.value
  }
  handleDropdownPrice = (event) => {
    this.setState({ dropDownPrice: event.target.value })
    jsonKitchenForm.kitchen_pricings[0].price_model = event.target.value

  }
  collapse = () => {
    this.setState({ open: false });
  }
  handleClickOutside = (event) => {
    this.setState({ open: false })
  }
  handleChange = (data, event) => {
    if (data === 'price')
      jsonKitchenForm.kitchen_pricings[0].price = event.target.value
    if (data === 'month')
      jsonKitchenForm.kitchen_pricings[0].tenure = event.target.value
    if (data === 'deposit')
      jsonKitchenForm.kitchen_pricings[0].deposit = event.target.value
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <div className="container">
            <div className="row" style={{ position: 'absolute' }}>
              <div className="col-lg-12" style={{ position: 'absolute' }} >
                <div className="kitch-title" style={{ marginTop: 100, marginLeft: 120, width: 450 }}>What kind of food business can rent your space?</div>
              </div>
              <div className="col-lg-2">
                <div className="avail-btn" style={{ background: this.state.businessOccupancy.indexOf('Delivery only') > -1 ? '#32CD32' : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Delivery only')}>
                  <div className="avail-txt">
                    Delivery only
            </div>
                </div>
                <div className="avail-btn" style={{ marginLeft: 300, background: this.state.businessOccupancy.indexOf('Restaurant') > -1 ? '#32CD32' : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Restaurant')}>
                  < div className="avail-txt" >
                    Restaruant
            </div>
                </div>
                <div className="avail-btn" style={{ marginLeft: 470, background: this.state.businessOccupancy.indexOf('Cafe') > -1 ? '#32CD32' : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Cafe')}>
                  <div className="avail-txt">
                    Cafe
            </div>
                </div>
                <div className="avail-btn" style={{ marginLeft: 640, background: this.state.businessOccupancy.indexOf('Take Away') > -1 ? '#32CD32' : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Take Away')}>
                  <div className="avail-txt">
                    Take Away
            </div>
                </div>
                <div className="avail-btn" style={{ marginLeft: 810, background: this.state.businessOccupancy.indexOf('Resto Bar') > -1 ? '#32CD32' : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Resto Bar')}>
                  <div className="avail-txt">
                    Resto Bar
            </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ position: 'absolute' }}>
              <div className="col-lg-2" >
                <div className="businessType-btn" style={{ background: this.state.businessOccupancy.indexOf('Caterer') > -1 ? '#32CD32' : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Caterer')}>
                  <div className="avail-txt">
                    Caterer
            </div>
                </div>
                <div className="businessType-btn" style={{ marginLeft: 300, background: this.state.businessOccupancy.indexOf('Photoshoot') > -1 ? '#32CD32' : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Photoshoot')}>
                  <div className="avail-txt">
                    Photo shoot
            </div>
                </div>
                <div className="businessType-btn" style={{ marginLeft: 470, background: this.state.businessOccupancy.indexOf('Food Production') > -1 ? '#32CD32' : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Food Production')}>
                  <div className="avail-txt" style={{ marginTop: 12 }}>
                    Food Production
            </div>
                </div>
                <div className="businessType-btn" style={{ marginLeft: 640, background: this.state.businessOccupancy.indexOf('Recipe Testing') > -1 ? '#32CD32' : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Recipe Testing')}>
                  <div className="avail-txt" style={{ marginTop: 12 }}>
                    Recipe Testing
            </div>
                </div>
                <div className="businessType-btn" style={{ marginLeft: 810, background: this.state.businessOccupancy.indexOf('Cooking classes') > -1 ? '#32CD32' : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Cooking classes')}>
                  <div className="avail-txt" style={{ marginTop: 12 }}>
                    Cooking classes
            </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12" >
                  <div className="kitch-title" style={{ marginTop: 330, marginLeft: 120 }}>
                    Other
                  </div>
                  <label className="kitch-label" style={{ marginTop: 390, marginLeft: 120, width: 450 }}>
                    Provide details about any other equipment/facility you are providing
                    </label>

                </div>
              </div>
              <div className="row col-lg-12">
                <input
                  className="kitch-input"
                  style={{ width: 528, height: 101, marginTop: 340, marginLeft: 20 }}
                  onChange={event => this.handleChange('adress1', event)}
                ></input>
              </div>




              <button className="kitch-nxt" style={{ marginTop: 510, marginLeft: 1005 }} onClick={this.nextclick}>
                <div className="kitch-nxt-txt">Next</div>
              </button>
            </div>
          </div>
        </div >;
      </form>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    contactpopup: state.appReducer.contactpopup,
    loginpopup: state.appReducer.loginpopup,
    registerpopup: state.appReducer.registerpopup,
  };
};
// const mapDispatchToProps = dispatch => ({

// })
//export default Contact;
export default withRouter(connect(mapStateToProps, null)(AvailableKitchen));
