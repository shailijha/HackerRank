import React from "react";
import Header from "./../../header";
import "./main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import HomeSpacingGrid from './../../Homepage/KitchenCards/kitchencardmd'
import Footer from './../../footer'
import store from './../../../store'
import actionType from './../../../store/constant/constant'
import { searchData } from './../../Homepage/App'
import { GoSearch } from "react-icons/go";
import { withRouter } from "react-router-dom";
import { connect, ReactReduxContext } from "react-redux";
class KitchenMain extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            is_Search: '',
            searchActive: false
        };
        console.log(props);
    }
    handleClick = (e) => {
        e.preventDefault();
        store.dispatch({ type: actionType.IS_SEARCH, payload: true });
        console.log("The link was clicked.");
    };
    componentWillReceiveProps(nextProps) {
        //call your API and update state with new props
        console.log(nextProps);
    }
    onTextChange = value => {
        console.log("value", value)
        this.setState({ is_Search: value })
        // localStorage.setItem('')
        searchData.searchKey = value
    }
    searchButtonClick = () => {
        this.setState({ searchActive: true })
        store.dispatch({ type: actionType.IS_SEARCH, payload: true });
    }
    render() {
        const { isSearch } = this.props
        return (
            <React.Fragment>
                <Header />
                <section>
                    <div className="view-kitch-img">
                        <div className="form-search">
                            <div className="form-search-inner">
                                <div className="banner-text">
                                    EXPLORE OUR COMPREHENSIVE LIST OF KITCHENS
                                </div>
                                <div className="form-text">
                                    <div className="input-group custom-group-input">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text searchIcon" id=""><GoSearch /></span>
                                        </div>
                                        <input type="text" onChange={(e) => this.onTextChange(e.target.value)} className="form-control searchForm" placeholder="Enter Area or Zip Code.." />
                                        <div class="input-group-append">
                                            <button className="btn btn-danger" type="button" onClick={() => this.searchButtonClick()}>Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Container className="mt-5 mb-5">
                    <Row>
                        {!this.state.searchActive ? <HomeSpacingGrid data={this.props.isSearch} searchData={this.props.location.state} /> : <HomeSpacingGrid searchData={this.state.is_Search} />}

                    </Row>
                </Container>
                <Footer />
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isSearch: state.appReducer.isSearch
    };
};
// const mapDispatchToProps = dispatch => ({

// })
export default withRouter(connect(mapStateToProps, null)(KitchenMain));
// export default connect(null, null)(withRouter(Homepage))
