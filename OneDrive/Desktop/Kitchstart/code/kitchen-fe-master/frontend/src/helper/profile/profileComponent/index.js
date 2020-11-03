import React from "react";
// import Header from "./../header";
import "./index.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
class profileComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
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
    render() {
        const { userDetails } = this.props
        console.log("check userdetails", userDetails)
        return (
            <div>
                <div className="name">
                    <img className="profile-icon" />
                    <span style={{ marginLeft: '10%', color: '#D7210A' }}>{userDetails.name}</span>
                </div>
                <div className="email">
                    <span style={{ color: '#215512' }}>EMAIL ID</span>
                    <span style={{ marginLeft: '10%', color: '#D7210A' }}>{userDetails.email}</span>
                </div>
                <div className="phone">
                    <span style={{ color: '#215512' }}>PHONE NUMBER</span>
                    <span style={{ marginLeft: '10%', color: '#D7210A' }}>{userDetails.phonenumber}</span>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userDetails: state.appReducer.userDetails
    };
};
// const mapDispatchToProps = dispatch => ({

// })
export default withRouter(connect(mapStateToProps, null)(profileComponent));
