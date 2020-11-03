import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter, Link, BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Header from './../header'
import './index.css'
import sampleJson from './../../kitchenSample.json'
import store from './../../store'
import actionType from './../../store/constant/constant'
import MainKitchenDetails from './main'
import Carousel from 'react-bootstrap/Carousel'
import kitchDetail from './../../store/action/action'
import { Ellipsis } from "react-bootstrap/esm/PageItem";
import { connect, ReactReduxContext } from "react-redux";
import Footer from './../footer'
// import sampleData from './../../kitchenSample.json'
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    SvgIcon,
    CardHeader
} from '@material-ui/core/'
let sampleData, equi, storageFacilites;
// let kitchen_id;
class KitchenDetails extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            loadPage: false,
            load: false
        };
    }
    handleClick = (e) => {
        e.preventDefault();
        console.log("The link was clicked.");
    };
    enquireClick = (e) => {
        store.dispatch({ type: actionType.CONTACT_POPUP, payload: true });
        console.log('enquiry click')
    }
    handleSubmit() {
        let submitData = {
            "id": "",
            "is_active": true
        }
    }
    componentDidMount() {
        if (this.props.preview === true) {
            let response = kitchDetail.getKitchenDetail(this.props.location.state.id).then(result => {
                sampleData = result

                if (sampleData === undefined) {
                    store.dispatch({ type: actionType.LOGIN_POPUP, payload: true });
                } else {
                    equi = sampleData[0].kitchen_facilities
                    storageFacilites = sampleData[0].kitchen_equipments
                    this.setState({ loadPage: true })
                }

            })
            console.log("coming hereee")
        }
        else {
            let response = kitchDetail.getKitchenDetail(this.props.location.state.id).then(result => {
                sampleData = result
                if (sampleData === undefined) {
                    store.dispatch({ type: actionType.LOGIN_POPUP, payload: true });
                } else {
                    equi = sampleData[0].kitchen_facilities
                    storageFacilites = sampleData[0].kitchen_equipments
                    this.setState({ loadPage: true })
                }
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        //call your API and update state with new props
        console.log(nextProps);
    }
    render() {

        const state = this.props
        const { preview } = this.props
        console.log("checkkk debug printtt", this.props.location.state.id, this.props.preview)
        return (
            <div>
                {console.log("checkkkkkk", this.state.loadPage, this.state.load)}
                {this.state.loadPage === true ?
                    < div className="detail-img" >
                        <div style={{ background: 'rgba(60, 59, 59, 0.6)', height: 64, position: 'absolute', top: 0, width: 1500 }}>
                            <Header />
                        </div>
                        <div className="detail-place">
                            <div className="detail-txt">
                                {sampleData[0].size}.sq.ft</div>
                        </div>
                        <Container>
                            <Row style={{ position: 'absolute' }}>
                                <Col style={{ position: 'absolute' }}>
                                    <div className="detail-title">
                                        <div className="detail-title-txt">KITCHEN TITLE</div>
                                    </div>
                                </Col>
                                <Col style={{ position: 'absolute' }}>
                                    <div className="detail-rectangle">
                                        <div className="detail-rect-title">Ideal for</div>
                                        <Grid container direction={'row'} style={{ 'flexGrow': 1 }}>
                                            <Grid item xs={4}  >
                                                {sampleData[0].kitchen_businesstypes.map((obj) => (
                                                    // console.log("obj.equipment.name", obj.equipment.name)
                                                    < Grid key={obj.id} item spacing={10} padding={20} >
                                                        <Row style={{ position: 'absolute', justify: 'space-evenly' }}>
                                                            <div className="detail-rect-box">
                                                                <div className="detail-rect-box-text">{obj.businesstype.name}</div>
                                                            </div>
                                                        </Row>

                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Grid>
                                        <div className="detail-rect-title" style={{ marginTop: 90, marginLeft: -60 }}>Occupancy Type</div>
                                        <div className="detail-rect-box" style={{ width: 80, marginTop: 80 }}>
                                            <div className="detail-rect-box-text">{sampleData[0].kitchen_pricings[0].occupancy_type}</div>
                                        </div>
                                        <div className="detail-rect-title" style={{ marginTop: 170, marginLeft: -70 }}>Furnish Type</div>
                                        <div className="detail-rect-box" style={{ width: 80, marginTop: 160 }}>
                                            <div className="detail-rect-box-text">BYOE</div>
                                        </div>
                                        <div className="detail-space">Like this kitchen space?</div>
                                        <div className="detail-enquire" onClick={() => this.enquireClick()}>
                                            <div className="detail-enquire-txt">Enquire Now</div>
                                        </div>
                                        <div className="detail-enquire" style={{ width: 165, marginTop: 320, marginLeft: 175 }}>
                                            <div className="detail-enquire-txt">Add To Favorites</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col style={{ position: 'absolute' }}>
                                    <div className="address">
                                        {sampleData[0].kitchen_addresses[0].address_line_1 + ', ' + sampleData[0].kitchen_addresses[0].address_line_2 + ', ' + sampleData[0].kitchen_addresses[0].city + ', ' + sampleData[0].kitchen_addresses[0].state + ', ' + sampleData[0].kitchen_addresses[0].zipcode}
                                    </div>
                                </Col >
                                <Col style={{ position: 'absolute' }}>
                                    <div className='deatil-description'>{sampleData[0].description}</div>
                                </Col>
                                <Col style={{ position: 'absolute' }}>
                                    <div className="detail-equi" >
                                        <div className="detail-title-txt">STORAGE AND FACILITIES</div>
                                    </div>
                                </Col>

                                <Col style={{ position: 'absolute' }}>
                                    <div className="detail-store" >
                                        <div className="detail-title-txt">EQUIPMENTS</div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Container style={{ position: 'absolute', marginTop: 700, marginLeft: 50 }}>


                            <Grid container direction={'row'} spacing={50} style={{ 'flexGrow': 1, position: 'absolute' }}>


                                {storageFacilites.map((obj) => (
                                    <Grid item xs={3} spacing={30} style={{ positon: 'absolute' }} >
                                        < Grid key={obj.id} item padding={10} >
                                            <div style={{ position: 'absolute', marginTop: -5, marginLeft: 10 }}>
                                                <img className="equi-img" src={obj.equipment.icon_url} ></img>
                                            </div>
                                            <div style={{ position: 'relative', marginLeft: 60 }}>
                                                <div className="equi-list">{obj.equipment.name}</div>
                                            </div>


                                        </Grid>
                                    </Grid>
                                ))}

                            </Grid>

                        </Container>
                        <Container style={{ position: 'absolute', marginTop: 1100, marginLeft: 50 }}>


                            <Grid container direction={'row'} justify="space-around" style={{ 'flexGrow': 1 }}>

                                {equi.map((obj) => (
                                    <Grid item xs={3} spacing={60} justify="space-evenly" style={{ positon: 'absolute' }} >
                                        < Grid key={obj.id} item padding={10} >
                                            <div style={{ position: 'absolute', marginTop: -5, marginLeft: 10 }}>
                                                <img className="equi-img" src={obj.facility.icon_url} ></img>
                                            </div>
                                            <div style={{ position: 'relative', marginLeft: 60 }}>
                                                <div className="equi-list">{obj.facility.name}</div>
                                            </div>


                                        </Grid>
                                    </Grid>
                                ))}

                            </Grid>

                        </Container>
                        <div className="col-lg-12">
                            <div className="submit-btn" style={{ marginTop: 650 }} onClick={() => this.handleSubmit()}>
                                <div className="submit-txt">Submit Kitchen</div>
                            </div>
                            <div className="submit-btn" style={{ marginTop: 650, marginLeft: 200 }} onClick={() => this.editKitchen()}>
                                <div className="submit-txt" >Edit Kitchen</div>
                            </div>
                        </div>
                    </div >
                    : null
                }
                <div style={{ position: 'absolute', marginTop: 1500, width: 1500 }}>
                    <Footer />
                </div>
            </div >


        );
    }
}
const mapStateToProps = (state) => {
    return {
        preview: state.appReducer.preview
    };
};
// const mapDispatchToProps = dispatch => ({

// })
export default withRouter(connect(mapStateToProps, null)(KitchenDetails));
// export default KitchenDetails;

