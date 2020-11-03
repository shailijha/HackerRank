import React, { Component } from "react";
import { history } from "../history/history";
import { withRouter } from "react-router-dom";
import { connect, ReactReduxContext } from "react-redux";
import store from './../../store'
import { Carousel, Col, Row, Container, Form } from "react-bootstrap";
import kitchen from "./../../assets/images/kitchenspace.jpg";
import Card from "react-bootstrap/Card";
import Header from "./../header";
import kitchenChimney from "./../../assets/images/icons8-cooker-hood-16.png";
import { GoSearch } from 'react-icons/go'
import actions from './../../store/action/action'
import actionType from './../../store/constant/constant'
import "./index.css";
import Button from '@material-ui/core/Button';

export let searchData = {
  "searchKey": ""
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: ''
    };
    console.log(props);
  }
  viewKitchen = () => {
    this.props.history.push("/viewKitchens");
  };
  addKitchen = () => {
    this.props.history.push("/addKitchens");
  };
  findButtonClick = () => {
    this.props.history.push({
      pathname: "/viewKitchens",
      state: this.state.searchVal
    });
    store.dispatch({ type: actionType.IS_SEARCH, payload: true });
    localStorage.setItem('searchData', JSON.stringify(searchData))
    //actions.SearchApi(searchData)
  }
  onTextChange = value => {
    searchData.searchKey = value
    this.setState({ searchVal: value })
    console.log("value", value)
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="slider-content">
        <h1>KICKSTART YOUR KITCHEN</h1>
        <h2 className="">Find the idea commercial kitchen for your business!</h2>
        <div className="sliderForm">
          <Col sm={{ span: 6, offset: 3 }}>
            <Form.Control type="text" onChange={(e) => this.onTextChange(e.target.value)} placeholder="Enter Area or Zip Code.." />
          </Col>
        </div>
        {/*<div className={'search-input-apartment'} >
          <GoSearch className={'search-icon'} />
          <input onChange={(e) => this.onTextChange(e.target.value)} className={'search-apartment'} placeholder={"Enter Area or Zip Code.."} />
        </div>*/}
        <Button
          variant="outlined"
          className="mt-3 slider-content-btn"
          onClick={() => this.findButtonClick()}
        >
          Find my Kitchen
        </Button>

        <div className="here-bg">
          <div className="here-txt">WHY AM I HERE?</div>
        </div>
      </div >

    );
  }
}
const mapStateToProps = (state) => {
  return {
    loginpopup: state.appReducer.loginpopup,
  };
};
const mapDispatchToProps = dispatch => ({
  SearchApi: (data) => dispatch(actions.SearchApi())
})
//export default Contact;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
// const mapStateToProps = (state) => {
//   return {};
// };
// // const mapDispatchToProps = dispatch => ({

// // })
// export default App;
// export default connect(null, null)(withRouter(Homepage))
