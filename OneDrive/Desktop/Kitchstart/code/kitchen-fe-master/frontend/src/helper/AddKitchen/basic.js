import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import store from "../../store";
import actionType from "../../store/constant/constant";
import Header from "../header";
import Row from "react-bootstrap/Row";
import "./index.css";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
// import BootstrapInput from './availability'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import kitchData from '../../store/action/action'
let storageFacilities;

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(1),
    },
  },
  input: {
    width: 102,
    height: 40,
    borderRadius: 7,
    position: 'relative',
    // marginLeft: 320,
    // marginTop: 70,
    background: '#FFFCFC',
    border: '2px solid #215512',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: theme.palette.background.paper,
    // border: '1px solid #ced4da',
    fontSize: 16,
    // padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },

  },
}))(InputBase);
const states = [
  { title: ' Andhra Pradesh' },
  { title: 'Assam' },
  { title: 'Bihar' },
  { title: 'Karnataka' },
  { title: 'Chhattisgarh' },
  { title: 'Uttar Pradesh' },
  { title: 'Goa' },
  { title: 'Haryana' },
  { title: 'Jharkhand' },
  { title: 'Gujarat' },
  { title: 'West Bengal' },
  { title: 'West Bengal' },
  { title: 'Maharashtra' },
  { title: 'Tamil Nadu' },
  { title: 'Telangana' },
  { title: 'Rajasthan' },
]
const city = [
  { title: 'Delhi' },
  { title: 'Hyderabad' },
  { title: 'Bangalore' },
  { title: 'Karnataka' },
  { title: 'Mumbai' },
  { title: 'Chennai' },
  { title: 'Visakhapatnam' },
  { title: 'Ranchi' },
  { title: 'Jaipur' }
]
export let jsonKitchenForm =
{
  "title": 'My favorite kitchen',
  "description": "",
  "size": "1500",
  "is_active": "false",
  "ownership_type": "",
  "kitchen_addresses": [
    {
      "address_line_1": " ",
      "address_line_2": "",
      "city": "",
      "state": "",
      "zipcode": "",
      "latitude": '',
      "longitude": ''
    }
  ],
  "kitchen_pricings": [
    {
      "sale_type": "",
      "price_model": "",
      "price": "",
      "deposit": "",
      "occupancy_type": "",
      "tenure": ""
    }
  ],
  "kitchen_images": [],
  "kitchen_facilities": [

  ],
  "kitchen_equipments": [

  ],
  "kitchen_businesstypes": [

  ]
}
class BasicKitchen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      next: false,
      dropDown: 'Rent',
      dropDownPrice: 'Months',
      businessPerson: '',
      basicData: {}
    };
  }
  onChangeBasic(event) {
    console.log("cfvghbjknlm,;'", event.target.value);
  }
  setType(data) {
    this.setState({ businessPerson: data })
    jsonKitchenForm.ownership_type = data
  }
  nextclick() {
    //this.setState({ next: true });
    store.dispatch({ type: actionType.BASIC, payload: false });
    store.dispatch({ type: actionType.AVAILABILITY, payload: true });
  }
  contactbtnClick() {
    store.dispatch({ type: actionType.CONTACT_POPUP, payload: true });
  }
  handleChange = (data, event) => {
    if (data === 'input')
      jsonKitchenForm.title = event.target.value
    if (data === 'description')
      jsonKitchenForm.description = event.target.value
    if (data === 'adress1')
      jsonKitchenForm.kitchen_addresses[0].address_line_1 = event.target.value
    if (data === 'adress2')
      jsonKitchenForm.kitchen_addresses[0].city = event.target.value
    if (data === 'pinCode')
      jsonKitchenForm.kitchen_addresses[0].zipcode = event.target.value
    if (data === 'kitchensize')
      jsonKitchenForm.size = event.target.value
  }
  handleDropdown = (event) => {
    this.setState({ dropDown: event.target.value })
    jsonKitchenForm.kitchen_pricings[0].sale_type = event.target.value
  }
  handleButtonClickData = (e, data) => {
    e.preventDefault();
    // window.location.reload(false);
    if (data === 'Private' || data === 'Shared' || data === 'Shift') {
      jsonKitchenForm.kitchen_pricings[0].occupancy_type = data
      this.setState({ color: '#32CD32', occupancy: data })

    }
  }
  handleDropdownPrice = (event) => {
    this.setState({ dropDownPrice: event.target.value })
    jsonKitchenForm.kitchen_pricings[0].price_model = event.target.value

  }
  componentDidMount() {
    kitchData.StorageFacilites().then(result => {
      storageFacilities = result
    })
  }
  formClick(val) {
  }
  render() {
    return (
      // <div className="d-flex flex-columns">
      <form>
        <div className="form-group">
          <div className="container">
            <div className="row" style={{ position: 'absolute' }}>
              <div className="col-lg-12">
                < div className="kitch-title" >
                  Kitchen Location
                  </div>
                <label className="kitch-label">
                  Address Line 1 (Street){" "}
                </label>

              </div>

              <div className="col-lg-12" >
                <input
                  className="kitch-input"
                  style={{ width: 328, marginLeft: 15 }}
                  onChange={event => this.handleChange('adress1', event)}
                ></input>
              </div>
              <div className="col-lg-12">
                <label className="kitch-label" style={{ marginTop: 130 }}>
                  {" "}
                  Address Line 2(Street)
                </label>
                <input
                  className="kitch-input"
                  style={{ marginTop: 70, marginLeft: 15 }}
                  onChange={event => this.handleChange('adress2', event)}
                ></input>
              </div>
              <div className="col-lg-12">
                <div style={{ position: 'absolute', marginLeft: 120, marginTop: 210 }}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={city}
                    getOptionLabel={(option) => option.title}
                    style={{
                      width: 214, border: '2px solid #215512', margin: 0,
                      padding: 0,
                      boxSizing: 'border-box',
                      boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.25)',
                      borderRadius: '5px'
                    }}
                    renderInput={(props) => <TextField {...props} height="34" label="City" variant="outlined" />}
                  />
                </div>
                <div style={{ position: 'absolute', marginTop: 280, marginLeft: 120 }}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={states}
                    getOptionLabel={(option) => option.title}
                    style={{
                      width: 214, border: '2px solid #215512', margin: 0,
                      padding: 0,
                      boxSizing: 'border-box',
                      boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.25)',
                      borderRadius: '5px'
                    }}
                    renderInput={(props) => <TextField {...props} height="34" label="State" variant="outlined" />}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <label className="kitch-label" style={{ position: 'absolute', marginTop: 330 }}>
                  Zip Code
               </label>
                <input
                  className="kitch-input"
                  style={{ marginTop: 270, width: 214, marginLeft: 15 }}
                  onChange={event => this.handleChange('pinCode', event)}
                ></input>
              </div>
              <div className="col-lg-12" style={{ position: 'absolute' }}>
                <div className="kitch-title" style={{ marginTop: 370 }}>Type of Agreement</div>
                <label className="kitch-label" style={{ position: 'absolute', marginTop: 440 }} >
                  Is your kitchen for rent, sale, or lease?
               </label>
                <div style={{ position: 'absolute', marginTop: 460, marginLeft: 120 }}>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={this.state.dropDown}
                    onClick={(event) => this.handleDropdown(event)}
                    input={<BootstrapInput />}
                  >
                    <MenuItem value={'Rent'}>Rent</MenuItem>
                    <MenuItem value={'Lease'}>Lease</MenuItem>
                    <MenuItem value={'Sale'}>Sale</MenuItem>
                  </Select>
                </div>
              </div>
              <div className="col-lg-12" style={{ position: 'absolute' }}>
                <div
                  className="kitch-title"
                  style={{ marginLeft: 120, marginTop: 480 }}
                >
                  Kitchen Size
               </div>
                <label
                  className="kitch-label"
                  style={{ marginTop: 550 }}
                >
                  Mention the size of your kitchen in sq. ft.
            </label>
                <input
                  type="number"
                  className="kitch-input"
                  style={{ marginTop: 490, width: 127, marginLeft: 15 }}
                  onChange={event => this.handleChange('kitchensize', event)}
                ></input>
              </div>

              <div className="col-lg-12">

                <div
                  className="kitch-title"
                  style={{ marginLeft: 120, marginTop: 590 }}
                >
                  Owner/Agent
            </div>
              </div>
              <div>
                <div className="col-lg-3">
                  <input
                    type="radio"
                    name="Owner"
                    style={{
                      position: "absolute",
                      width: 15,
                      marginLeft: 120,
                      marginTop: 670,
                      // display: "flex",
                    }}
                    onChange={() => this.setType('Owner')}
                    checked={this.state.businessPerson === 'Owner'}
                  ></input>
                  <div
                    className="kitch-title"
                    style={{ marginLeft: 140, marginTop: 628, display: "flex" }}
                  >
                    Owner
             </div>
                </div>

                <div className="col-lg-3">
                  <input
                    type="radio"
                    name="Agent"
                    style={{
                      position: "absolute",
                      width: 15,
                      marginLeft: 220,
                      marginTop: 670,
                      color: "green",
                      // display: "flex",
                    }}
                    checked={this.state.businessPerson === 'Agent'}
                    onChange={() => this.setType('Agent')}
                  ></input>
                  <div
                    className="kitch-title"
                    style={{ marginLeft: 240, marginTop: 630, display: "flex" }}
                  >
                    Agent
            </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="kitch-title" style={{ marginTop: 660 }}>Type of Occupancy</div>
                <label className="kitch-label" style={{ marginTop: 725 }}>
                  What type of occupancy are you willing to let out your kitchen to? Select one or more.
              </label>
              </div>
              <div >
                <div className="col-lg-4">
                  <button className="dropdown" style={{ marginTop: 750, width: 134, background: this.state.occupancy === 'Private' ? this.state.color : '#FFFCFC' }} onClick={(e) => this.handleButtonClickData(e, 'Private')}>
                    Private
                  </button>
                  <button className="dropdown" style={{ marginTop: 750, marginLeft: 270, width: 134, background: this.state.occupancy === 'Shared' ? this.state.color : '#FFFCFC' }} onClick={(e) => this.handleButtonClickData(e, 'Shared')} >
                    Shared
                </button>
                  <button className="dropdown" style={{ marginTop: 750, marginLeft: 420, width: 134, background: this.state.occupancy === 'Shift' ? this.state.color : '#FFFCFC' }} onClick={(e) => this.handleButtonClickData(e, 'Shift')}>
                    Shift
                 </button>
                </div>
                <div className="col-lg-4">
                  < div className="kitch-title" style={{ marginTop: 770 }
                  }>

                    Price</div >
                  <label className="kitch-label" style={{ marginTop: 830, width: 450 }}>You can mention the rates according to the agreement selected above </label>

                  <div style={{ position: 'absolute' }}>
                    <input className="price-input" type="text" onChange={event => this.handleChange('price', event)}></input>
                    {
                      this.state.dropDown === 'Sale' ? null :
                        <input className="price-input" type="text" style={{ width: 51, marginLeft: 270 }} onChange={event => this.handleChange('month', event)}></input>
                    }
                  </div>

                  <div style={{ position: 'absolute', marginLeft: 320 }}>
                    {
                      this.state.dropDown === 'Sale' ? null :
                        <div style={{ position: 'absolute', marginTop: 848, marginLeft: 20 }}>
                          <Select
                            // labelId="demo-customized-select-label"
                            // id="demo-customized-select"
                            value={this.state.dropDownPrice}
                            onClick={(event) => this.handleDropdownPrice(event)}
                            input={<BootstrapInput />}
                          >
                            <MenuItem value={'Rent'}>Months</MenuItem>
                            {this.state.dropDown === 'Lease' ? null :
                              <MenuItem value={'Lease'}>Hours</MenuItem>}
                            {this.state.dropDown === 'Rent' ? null :
                              <MenuItem value={'Sale'}>Years</MenuItem>}
                            {this.state.dropDown === 'Lease' ?
                              <MenuItem value={'Sale'}>Days</MenuItem> : null}
                          </Select>
                        </div>
                    }
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="kitch-title" style={{ marginTop: 860, marginLeft: 120 }}>Deposit</div>
                  <label className="kitch-label" style={{ marginTop: 920, marginLeft: 120, width: 450 }}>
                    Mention your security deposit amount in Rs. here.
                  </label>

                </div>
                <div className="col-lg-6">
                  <input className="price-input" style={{ marginTop: 90 }} onChange={event => this.handleChange('deposit', event)}></input>
                  <button className="kitch-nxt" style={{ marginTop: 940 }} onClick={this.nextclick}>
                    <div className="kitch-nxt-txt">Next</div>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>






      </form >
      // </div >
    );
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
export default withRouter(connect(mapStateToProps, null)(BasicKitchen));
export { storageFacilities }
