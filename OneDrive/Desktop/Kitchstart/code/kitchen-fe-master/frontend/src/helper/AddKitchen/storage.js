import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import store from "../../store";
import actionType from "../../store/constant/constant";
import Header from "../header";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import "./index.css";
import Dropdown from 'react-bootstrap/Dropdown'
import Footer from './../footer'
import { jsonKitchenForm } from './basic'
import kitchData from './../../store/action/action'
class Storage extends React.Component {
    storageButton = []
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: true,
            next: false,
            storage: [],
            color: '#FFFFFF'
        };
    }
    componentDidMount() {

    }
    onChangeBasic(event) {
        console.log("cfvghbjknlm,;'", event.target.value);
    }
    handleButtonClickData = (data) => {
        this.storageButton.push(data)
        this.setState({ storage: this.storageButton, color: '#32CD32' })
        if (data) {
            kitchData.getFacilities(data).then(result => {
                let facility_id = { "facility_id": result }
                jsonKitchenForm.kitchen_facilities.push(facility_id)
            })
        }
    }
    nextclick() {
        store.dispatch({ type: actionType.STORAGE, payload: false });
        store.dispatch({ type: actionType.EQUIPMENT, payload: true });
        // this.setState({ next: true });
    }
    render() {
        return <div>
            <div className="d-flex flex-columns">

                <Container style={{ display: "flex", position: "absolute" }}>
                    <Row>
                        <div className="col-lg-12">
                            <div className="kitch-title" style={{ marginTop: 100, marginLeft: 320 }}>Facilites</div>
                            <label className="kitch-label" style={{ marginTop: 160, marginLeft: 320, width: 450 }}>Select the facilities that can provided along with your kitchen</label>
                        </div>
                    </Row>

                    <Row xs={4} md={4}>
                        <Col>
                            <div className="store-btn" style={{ background: this.state.storage.indexOf('RO Water') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('RO Water')}>
                                <div className="store-txt"> RO Water</div>
                                <div className="store-img"></div>
                            </div>
                        </Col>
                        <Col >
                            <div className="store-btn" style={{ marginLeft: 480, background: this.state.storage.indexOf('Sewage Line') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Sewage Line')}>
                                <div className="store-txt"> Sewage Line</div>
                                <div className="sewage-img"></div>
                            </div>
                        </Col>
                        <Col >
                            <div className="store-btn" style={{ marginLeft: 660, background: this.state.storage.indexOf('Water Supply') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Water Supply')}>
                                <div className="store-txt"> Water Supply</div>
                                <div className="water-img"></div>
                            </div>
                        </Col>
                        <Col >
                            <div className="store-btn" style={{ marginLeft: 840, background: this.state.storage.indexOf('Power Backup') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Power Backup')}>
                                <div className="store-txt"> Power Backup</div>
                                <div className="power-img"></div>
                            </div>
                        </Col>
                    </Row>
                    <Row  >
                        <Col>
                            <div className="store-btn" style={{ marginTop: 260, marginLeft: 210, background: this.state.storage.indexOf('Exhaust') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Exhaust')}>
                                <div className="store-txt" style={{ marginTop: 20 }}> Exhaust</div>
                                <div className="exhaust-img"></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="store-btn" style={{ marginTop: 260, marginLeft: 390, background: this.state.storage.indexOf('Gas Line') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Gas Line')}>
                                <div className="store-txt">Gas Line</div>
                                <div className="gas-img"></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="store-btn" style={{ marginTop: 260, marginLeft: 570, background: this.state.storage.indexOf('Dining space') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Dining space')}>
                                <div className="store-txt">Dining Space</div>
                                <div className="dinner-img"></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="store-btn" style={{ marginTop: 260, marginLeft: 750, background: this.state.storage.indexOf('Working Tables') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Working Tables')}>
                                <div className="store-txt" style={{ marginTop: 5 }}>Working Tables</div>
                                <div className="desk-img" style={{ marginTop: -10 }}></div>
                            </div>
                        </Col>
                    </Row>
                    <Row  >
                        <Col>
                            <div className="store-btn" style={{ marginTop: 340, marginLeft: 120, background: this.state.storage.indexOf('Wifi') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Wifi')}>
                                <div className="store-txt"> Wifi</div>
                                <div className="wifi-img"></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="store-btn" style={{ marginTop: 340, marginLeft: 300, background: this.state.storage.indexOf('24/7 Access') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('24/7 Access')}>
                                <div className="store-txt">Key</div>
                                <div className="key-img"></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="store-btn" style={{ marginTop: 340, marginLeft: 480, background: this.state.storage.indexOf('Event Space') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Event Space')}>
                                <div className="store-txt">Event Space</div>
                                <div className="event-img" style={{ marginTop: -20 }}></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="store-btn" style={{ marginTop: 340, marginLeft: 660, background: this.state.storage.indexOf('Toilets') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Toilets')}>
                                <div className="store-txt" style={{ marginTop: 20 }}>Toilet</div>
                                <div className="toilet-img" style={{ marginTop: -20 }}></div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="store-btn" style={{ marginTop: 420, marginLeft: 30, background: this.state.storage.indexOf('Fire safety system') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Fire safety system')}>
                                <div className="store-txt" style={{ marginTop: 5, width: 150, marginLeft: 45 }}>Fire Safety System</div>
                                <div className="fire-img" ></div>
                            </div>
                        </Col>
                    </Row>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="kitch-title" style={{ marginTop: 460, marginLeft: 40 }}>Storage</div>
                            <label className="kitch-label" style={{ marginTop: 520, marginLeft: 40, width: 450 }}>Select the storage facilities included in your kitchen</label>
                        </div>
                    </div>
                </Container>

                <Container style={{ display: "flex", position: "absolute" }}>


                    <Row>
                        <Col>
                            <div className="store-btn" style={{ marginTop: 540, marginLeft: 300, background: this.state.storage.indexOf('Refrigerator') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Refrigerator')}>
                                <div className="store-txt" style={{ marginLeft: 60, marginTop: 20 }}>Refrigerator</div>
                                <div className="refri-img" style={{ marginTop: -30 }}></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="store-btn" style={{ marginTop: 540, marginLeft: 480, background: this.state.storage.indexOf('Deep Freezer') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Deep Freezer')}>
                                <div className="store-txt">Deep Freezer</div>
                                <div className="fryer-img" ></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="store-btn" style={{ marginTop: 540, marginLeft: 660, background: this.state.storage.indexOf('Shelves/Racks') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Shelves/Racks')}>
                                <div className="store-txt" style={{ marginLeft: 90 }}>Shelves/ Racks</div>
                                <div className="shelve-img" ></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="store-btn" style={{ marginTop: 540, marginLeft: 840, background: this.state.storage.indexOf('Containers') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Containers')}>
                                <div className="store-txt" style={{ marginLeft: 70, marginTop: 20 }}>Containers</div>
                                <div className="lunch-img" style={{ marginTop: -30 }}></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container style={{ display: "flex", position: "absolute" }}>
                    <div className="kitch-title" style={{ marginTop: 580, marginLeft: 320 }}>Cleaning</div>
                    <label className="kitch-label" style={{ marginTop: 640, marginLeft: 320 }}>Select the storage facilities included in your kitchen</label>
                    <Row>
                        <Col>
                            <div className="store-btn" style={{ marginTop: 660, marginLeft: 300, background: this.state.storage.indexOf('Sink') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Sink')}>
                                <div className="store-txt" style={{ marginTop: 20 }}>Sink</div>
                                <div className="sink-img" style={{ marginTop: -25 }}></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="store-btn" style={{ marginTop: 660, marginLeft: 480, background: this.state.storage.indexOf('Industrial Dishwasher') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Industrial Dishwasher')}>
                                <div className="store-txt">Dish Washer</div>
                                <div className="dish-img" ></div>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ position: 'absolute' }}>
                        <Col>
                            <div className="kitch-nxt" style={{ marginLeft: 970, marginTop: 670 }}>
                                <div className="kitch-nxt-txt" onClick={this.nextclick}>Next</div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* <div style={{
                    position: "fixed",
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: -1

                }}>
                    <Footer />
                </div> */}
            </div >



            {/* <Footer /> */}
        </div >
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
export default withRouter(connect(mapStateToProps, null)(Storage));
