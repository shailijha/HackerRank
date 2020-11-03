import React, { Component } from "react";
import { history } from "../history/history";
import { withRouter } from "react-router-dom";
import { connect, ReactReduxContext } from "react-redux";
// import store from '../store'
import Carousel from "react-bootstrap/Carousel";
import kitchen from "./../../assets/images/kitchenspace.jpg";
import Card from "react-bootstrap/Card";
import { Button, Col, Row, Container } from "react-bootstrap";
import Header from "./../header";
import kitchenChimney from "./../../assets/images/icons8-cooker-hood-16.png";
import KitchenCardMd from './KitchenCards/kitchencardmd'
import "./index.css";
import HomeSpacingGrid from './KitchenCards/kitchencardmd'
import store from "../../store";
import actionType from "../../store/constant/constant";
import actions from '../../store/action/action'

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkData: {}
        };
        console.log(props);
    }
    exploreClick = (props) => {
        console.log("explore btn is clicked")
        store.dispatch({ type: actionType.IS_SEARCH, payload: false })
        this.props.history.push('/ViewKitchens')
    }
    addKitchen = () => {
        let checkToken = actions.validateToken().then((result) => {
            console.log("resultttt", result)
            if (result.message === "Unauthorized") {
                store.dispatch({ type: actionType.LOGIN_POPUP, payload: true });
            }
            else {
                store.dispatch({ type: actionType.BASIC, payload: true });
                this.props.history.push("/AddKitchen");
            }
        })
    }
    componentDidMount() {
    }

    render() {
        console.log("cvghbjnkml", this.state.checkData)
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col className="mt-5 text-center">
                            <div className="intro-text">
                                <h5 className="title-color-green">NEED A KITCHEN TO RENT?</h5>
                                <div className="kitch-content">
                                    <p>Explore our collection of commercial kitchens to find one that’s right for your business</p>
                                </div>
                                <Button variant="success" size="lg" className="btn-green" onClick={() => this.exploreClick()}>FIND KITCHENS</Button>
                            </div>
                        </Col>
                        <Col className="mt-5 text-center">
                            <div className="intro-text">
                                <h5 className="title-color-green">HAVE A KITCHEN TO LIST?</h5>
                                <div className="kitch-content">
                                    <p>Join our growing network of kitchens and get discovered by up and coming food businesses</p>
                                </div>
                                <Button variant="success" size="lg" className="btn-green" onClick={() => this.addKitchen()}>ADD KITCHENS</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-5 mb-5">
                            <img src={require('./../../assets/images/Group_home.png')} className="rounded mx-auto d-block" alt="..." />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="4" xs="12">
                            <div calssName="mx-auto d-block">
                                <img src={require('./../../assets/icons/Find.svg')} className="exp-icon mx-auto d-block" alt="..." />
                            </div>

                            <h5 className="title-color-green text-center exp-title mt-2">Explore</h5>
                            <p className="text-center">Find commercial kitchen spaces in the locality of your choice from our comprehensive collection.</p>
                        </Col>
                        <Col lg="4" xs="12">
                            <div calssName="mx-auto d-block">
                                <img src={require('./../../assets/icons/Connect.svg')} className="exp-icon mx-auto d-block" alt="..." />
                            </div>
                            <h5 className="title-color-green text-center exp-title mt-2">Connect</h5>
                            <p className="text-center">Reach out to us to connect you with owners of your favourite kitchens and help you with a hassle-free kitchen setup.</p>
                        </Col>
                        <Col lg="4" xs="12">
                            <div calssName="mx-auto d-block">
                                <img src={require('./../../assets/icons/Kickstart Kitchen.svg')} className="exp-icon mx-auto d-block" alt="..." />
                            </div>
                            <h5 className="title-color-green text-center exp-title mt-2">KickStart Kitchen</h5>
                            <p className="text-center">Wait no more and start cooking your best dishes right after.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mt-2 mb-2">
                            <Button variant="success" size="md" className="btn-green" onClick={console.log("lear more is clicked")}>LEARN MORE</Button>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="spacingGrid">
                    <Row>
                        <Col className="text-center">
                            <h3 class="color-red">Your search for a commercial kitchen ends With KITCHSTART...</h3>
                        </Col>
                    </Row>
                    <Row>
                        <HomeSpacingGrid data={'HomePageGrid'} />
                    </Row>
                    <Row>
                        <Col className="text-center mt-2 mb-2">
                            <Button variant="danger" size="md" className="btn-red" onClick={this.exploreClick}>Explore Kitchens</Button>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-5 mb-5">
                    <Row>
                        <Col xs={6} className="food-prenuer">
                            <div className="food-prenuer-block">
                                <div className="food-prenuer-header-1">
                                    We are here to connect foodpreneurs
                            </div>
                                <div className="food-prenuer-header-2">
                                    with commercial kitchens.
                            </div>
                            </div>
                            <div>
                                <p>
                                    You could be a passionate baker looking for a space to bake the most buttery croissants in town — or a dosa corner ready to grow into the next Saravana Bhavan.
                            </p>
                                <p>
                                    You could be a foodie like us, with a bizarre idea for avocado biryani (no judgement) that you want to test out in a commercial kitchen  — or a restaurant looking to change your business model to a takeout service.
                            </p>
                                <p>
                                    You could be an event caterer who needs a small kitchen for intimate occasions like birthdays, or a more spacious place to cook up a feast for a big fat Indian wedding.
                            </p>
                                <p>
                                    No matter what your needs are, we are here to serve you! Let’s get the laddoos rolling.
                            </p>
                                <p>
                                    Explore some of the most craveworthy kitchens in your city.
                            </p>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <img src={require('./../../assets/images/Connect_foodpreneurs_kitchen.png')} className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    };
};
const mapDispatchToProps = dispatch => {
    return {
        // GetKitchenData: () => dispatch(getData.GetKitchenData()),
    };
}
// export default Body;
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Body))
