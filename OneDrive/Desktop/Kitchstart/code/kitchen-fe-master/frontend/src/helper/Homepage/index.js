import React from "react";
import App from "./App";
import Header from "./../header";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { history } from "../history/history";
import ViewKitchens from "../Viewkitchens/index";
import AddKitchen from "../AddKitchen/index";
import Body from './body'
import { Container, Carousel } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Footer from './../footer'
import ContactPage from './../Contact'
import { withRouter } from "react-router-dom";
import { connect, ReactReduxContext } from "react-redux";

class Homepage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      direction: null
    };
    this.handleSelect = this.handleSelect.bind(this);
    console.log(props);
  }
  handleClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
  };

  componentWillReceiveProps(nextProps) {
    //call your API and update state with new props
    console.log(nextProps);
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex
    });
  }
  render() {
    const { index, direction } = this.state;
    const { contactpopup, loginpopup, registerpopup } = this.props
    // if (this.props.contactpopup === true) return <ContactPage />
    return (
      <React.Fragment>
        <Header />
        <section className="homepage-slider">
          {(this.props.contactpopup || this.props.loginpopup || this.props.registerpopup) ?
              <App />
            :
              <App />
          }
          <Carousel
            activeIndex={index}
            indicators={false}
            controls={false}
            interval={5000}
            // direction={direction}
            onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <div className="banner-img bg"></div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="banner-img bg1"></div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="banner-img bg2"></div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="banner-img bg3"></div>
            </Carousel.Item>
          </Carousel >
        </section>

        < Body />
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contactpopup: state.appReducer.contactpopup,
    loginpopup: state.appReducer.loginpopup,
    registerpopup: state.appReducer.registerpopup
  };
};
// const mapDispatchToProps = dispatch => ({

// })
export default withRouter(connect(mapStateToProps, null)(Homepage));
// export default Homepage;
// export default connect(null, null)(withRouter(Homepage))
