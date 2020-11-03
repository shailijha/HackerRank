import React from "react";
// import Header from "./../header";
import "./index.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { history } from "../history/history";
// import ViewKitchens from "../Viewkitchens/index";
// import AddKitchen from "../AddKitchen/index";
// import Body from './body'
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Footer from './../../footer'
import Header from './../../header'
import store from "../../../store";
import actionType from '../../../store/constant/constant'
import ProfileComponent from './../profileComponent'
import FavSpacingGrid from './../favkitchen'
import MyKitchenSpacingGrid from './../mykitchen'
class Profile extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('profile props');
        console.log(props);
        console.log(this.props.profile && (!this.props.fav && !this.props.kitchen));
    }
    handleClick = (data) => {
        console.log("handle click", data)
        if (data === 'prof') {
            store.dispatch({ type: actionType.PROFILE, payload: true })
            store.dispatch({ type: actionType.FAVORITES, payload: false })
            store.dispatch({ type: actionType.KITCHEN, payload: false })
        }
        if (data === 'favKitch') {
            store.dispatch({ type: actionType.FAVORITES, payload: true })
            store.dispatch({ type: actionType.PROFILE, payload: false })
            store.dispatch({ type: actionType.KITCHEN, payload: false })
        }
        if (data === 'Kitch') {
            store.dispatch({ type: actionType.KITCHEN, payload: true })
            store.dispatch({ type: actionType.PROFILE, payload: false })
            store.dispatch({ type: actionType.FAVORITES, payload: false })
        }
        console.log("The link was clicked.......");
    };
    componentWillReceiveProps(nextProps) {
        //call your API and update state with new props
        console.log(nextProps);
    }
    render() {
        const { profile, fav, kitchen } = this.props
        return (
            <div>
                <div>
                    <Row>
                        <div className="profile-background">
                            <div>
                                <Header />
                            </div>
                        </div>
                    </Row>
                    {/* <div className="profile-rect" style={{ height: 790 }}> */}
                        <div className="d-flex flex-columns">
                            <div class="sidebar">
                                <a onClick={() => this.handleClick('prof')}>MY PROFILE</a>
                                <a onClick={() => this.handleClick('favKitch')}>FAVOURITE <br /> KITCHENS</a>
                                <a onClick={() => this.handleClick('Kitch')}>MY KITCHENS</a>
                            </div>
                        </div>
                    {/* </div> */}
                    {this.props.profile ? <ProfileComponent /> : this.props.fav ? <FavSpacingGrid /> : this.props.kitchen ? <MyKitchenSpacingGrid /> : null}
                    <Row>
                        <div style={{ position: 'absolute', width: "100%", marginTop: this.props.profile ? 850 : this.props.fav ? 420 : 590 }} >
                            <Footer />
                        </div>
                    </Row>
                </div>
            </div >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.appReducer.profile,
        fav: state.appReducer.fav,
        kitchen: state.appReducer.kitchen
    };
};
export default connect(mapStateToProps, null)(withRouter(Profile))
