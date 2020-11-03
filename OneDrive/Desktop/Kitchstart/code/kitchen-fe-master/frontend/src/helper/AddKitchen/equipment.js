import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import store from "../../store";
import actionType from '../../store/constant/constant'
import Header from "../header";
import Row from "react-bootstrap/Row";
import "./index.css";
import Dropdown from 'react-bootstrap/Dropdown'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './index.css'
import './equip.css'
import { jsonKitchenForm } from './basic'
import kitchData from './../../store/action/action'
class Equipment extends React.Component {
    equipmentButton = []
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: true,
            next: false,
            equipment: [],
            color: '#FFFFFF'
        };
    }
    onChangeBasic(event) {
        console.log("cfvghbjknlm,;'", event.target.value);
    }
    nextclick() {
        // this.setState({ next: true });
        store.dispatch({ type: actionType.CONFIRMATION, payload: true });
        store.dispatch({ type: actionType.EQUIPMENT, payload: false })
    }
    handleButtonClickData = (data) => {
        this.equipmentButton.push(data)
        this.setState({ equipment: this.equipmentButton, color: '#32CD32' })
        console.log("Check equipment", this.state.equipment)
        if (data) {
            kitchData.getEquipment(data).then(result => {
                let equipment_id = { "equipment_id": result }
                jsonKitchenForm.kitchen_equipments.push(equipment_id)
            })
        }
    }
    render() {
        return <div className="d-flex flex-columns">

            <Container style={{ display: "flex", position: "absolute" }}>
                <div className="kitch-title" style={{ marginTop: 100, marginLeft: 320 }}>Equipments</div>
                <label className="kitch-label" style={{ marginTop: 160, marginLeft: 320 }}>Select all the equipments that you have and can be provided along with the space.</label>
                <Row xs={4} md={4}>
                    <Col>
                        <div className="store-btn" style={{ background: this.state.equipment.indexOf('Commercial Burner') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Commercial Burner')}>
                            <div className="equi-txt">Commercial Burner</div>
                            <div className="burner-img"></div>
                        </div>
                    </Col>
                    <Col >
                        <div className="store-btn" style={{
                            marginLeft: 480, background: this.state.equipment.indexOf('RO Water') > -1 ? this.state.color : '#FFFFFF'
                        }} onClick={() => this.handleButtonClickData('RO Water')}>
                            < div className="equi-txt" > Commercial DosaPlate</div>
                            <div className="dosa-img"></div>
                        </div>
                    </Col>
                    <Col >
                        <div className="store-btn" style={{ marginLeft: 660, background: this.state.equipment.indexOf('Food Processor') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Food Processor')}>
                            <div className="equi-txt" style={{ marginTop: 5 }}>Food Processor</div>
                            <div className="food-img"></div>
                        </div>
                    </Col>
                    <Col >
                        <div className="store-btn" style={{ marginLeft: 840, background: this.state.equipment.indexOf('Commercial Grinder') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Commercial Grinder')}>
                            <div className="equi-txt" style={{ marginTop: 5 }}>Commercial Grinder</div>
                            <div className="grinder-img"></div>
                        </div>
                    </Col>
                </Row>
                <Row  >
                    <Col>
                        <div className="store-btn" style={{ marginTop: 260, marginLeft: 210, background: this.state.equipment.indexOf('Oven') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Oven')}>
                            <div className="equi-txt">Combi Oven</div>
                            <div className="oven-img"></div>
                        </div>
                    </Col>
                    <Col>
                        <div className="store-btn" style={{ marginTop: 260, marginLeft: 390, background: this.state.equipment.indexOf('Domestic Microwave') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Domestic Microwave')}>
                            <div className="equi-txt" style={{ marginTop: 5 }}>Domestic Microwave</div>
                            <div className="domestic-img"></div>
                        </div>
                    </Col>
                    <Col>
                        <div className="store-btn" style={{ marginTop: 260, marginLeft: 570, background: this.state.equipment.indexOf('Deep Fryer') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Deep Fryer')}>
                            <div className="equi-txt">Deep Fryer</div>
                            <div className="deepfryer-img"></div>
                        </div>
                    </Col>
                    <Col>
                        <div className="store-btn" style={{ marginTop: 260, marginLeft: 750, background: this.state.equipment.indexOf('Tandoor') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Tandoor')}>
                            <div className="equi-txt" style={{ marginTop: 15 }}>Tandoor</div>
                            <div className="tandoor-img" style={{ marginTop: 15 }}></div>
                        </div>
                    </Col>
                </Row>
                <Row  >
                    <Col>
                        <div className="store-btn" style={{ marginTop: 340, marginLeft: 120, background: this.state.equipment.indexOf('Chargrill') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Chargrill')}>
                            <div className="equi-txt" style={{ marginTop: 15 }}>Chargrill</div>
                            <div className="grill-img" ></div>
                        </div>
                    </Col>
                    <Col>
                        <div className="store-btn" style={{ marginTop: 340, marginLeft: 300, background: this.state.equipment.indexOf('Steamer') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Steamer')}>
                            <div className="equi-txt" style={{ marginTop: 15 }}>Steamer</div>
                            <div className="steam-img"></div>
                        </div>
                    </Col>
                    <Col>
                        <div className="store-btn" style={{ marginTop: 340, marginLeft: 480, background: this.state.equipment.indexOf('Blast Freezer') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Blast Freezer')}>
                            <div className="equi-txt">Blast Freezer</div>
                            <div className="fridge-img"></div>
                        </div>
                    </Col>
                    <Col>
                        <div className="store-btn" style={{ marginTop: 340, marginLeft: 660, background: this.state.equipment.indexOf('Waffle Iron') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Waffle Iron')}>
                            <div className="equi-txt">Waffle Iron</div>
                            <div className="waffle-img"></div>
                        </div>
                    </Col>
                </Row>
                <Row  >
                    <Col style={{ position: 'absolute' }}>
                        <div className="store-btn" style={{ marginTop: 420, marginLeft: 30, background: this.state.equipment.indexOf('Toaster') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Toaster')}>
                            <div className="equi-txt" style={{ marginTop: 15 }}>Toaster</div>
                            <div className="toast-img" ></div>
                        </div>
                    </Col>
                    <Col style={{ position: 'absolute' }}>
                        <div className="store-btn" style={{ marginTop: 420, marginLeft: 240, background: this.state.equipment.indexOf('Cutlery') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Cutlery')}>
                            <div className="equi-txt" style={{ marginTop: 15 }}>Cutlery</div>
                            <div className="cutlery-img"></div>
                        </div>
                    </Col>
                    <Col style={{ position: 'absolute' }}>
                        <div className="store-btn" style={{ marginTop: 420, marginLeft: 450, background: this.state.equipment.indexOf('Ice Cream Maker') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Ice Cream Maker')}>
                            <div className="equi-txt" >IceCream Maker</div>
                            <div className="ice-img"></div>
                        </div>
                    </Col>
                    <Col style={{ position: 'absolute' }}>
                        <div className="store-btn" style={{ marginTop: 420, marginLeft: 660, background: this.state.equipment.indexOf('Blender') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Blender')}>
                            <div className="equi-txt" style={{ marginTop: 15 }}>Blender</div>
                            <div className="blender-img" ></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="store-btn" style={{ marginTop: 500, marginLeft: 60, background: this.state.equipment.indexOf('Juicer') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Juicer')}>
                            <div className="equi-txt" style={{ marginTop: 15 }}>Juicer</div>
                            <div className="juicer-img"></div>
                        </div>
                    </Col>
                    <Col>
                        <div className="store-btn" style={{ marginTop: 500, marginLeft: 240, background: this.state.equipment.indexOf('Pizza Oven') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Pizza Oven')}>
                            <div className="equi-txt">Pizza Oven</div>
                            <div className="pizza-img"></div>
                        </div>
                    </Col>
                    <Col>
                        <div className="store-btn" style={{ marginTop: 500, marginLeft: 420, background: this.state.equipment.indexOf('Servingware') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Servingware')}>
                            <div className="equi-txt" style={{ marginTop: 15 }}>Servingware</div>
                            <div className="serve-img"></div>
                        </div>
                    </Col>
                    <Col>
                        <div className="store-btn" style={{ marginTop: 500, marginLeft: 600, background: this.state.equipment.indexOf('Food Slicer') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Food Slicer')}>
                            <div className="equi-txt">Food Slicer</div>
                            <div className="foodslice-img"></div>
                        </div>
                    </Col>
                </Row>
            </Container >
            <Container style={{ display: "flex", position: "absolute" }}>

                <Row>
                    <Col>
                        <div className="store-btn" style={{ marginTop: 580, marginLeft: 300, background: this.state.equipment.indexOf('Dough Mixer') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Dough Mixer')}>
                            <div className="equi-txt">Dough Mixer</div>
                            <div className="mixer-img"></div>
                        </div>
                        <div className="store-btn" style={{ marginTop: 580, marginLeft: 510, background: this.state.equipment.indexOf('Barbeque') > -1 ? this.state.color : '#FFFFFF' }} onClick={() => this.handleButtonClickData('Barbeque')}>
                            <div className="equi-txt" style={{ marginTop: 15 }}>Barbeque</div>
                            <div className="barbeq-img"></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="kitch-title" style={{ display: "flex", marginTop: 640, marginLeft: 320 }}>Other
                         <label className="kitch-label" style={{ width: 500, marginTop: 50, marginLeft: 5 }}>Provide details about any other equipment/facility you are providing.</label>
                            <input className="equi-input"></input>
                        </div>
                        <div className="kitch-nxt" style={{ marginTop: 740, marginLeft: 970 }}>
                            <div className="kitch-nxt-txt" onClick={this.nextclick}>Next</div>
                        </div>
                    </Col>

                </Row>

            </Container>

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
export default withRouter(connect(mapStateToProps, null)(Equipment));
