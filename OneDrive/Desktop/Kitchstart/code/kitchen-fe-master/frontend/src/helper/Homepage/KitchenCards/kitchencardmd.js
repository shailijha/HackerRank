import React, { Component, useEffect } from "react";
import { withRouter, Link, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "react-modal";
import './index.css'
import Header from './../../header'
// // import { Grid, Row, Col, Container } from 'react-bootstrap'
// import sampleJSON from './../../../kitchenSample.json'
import { history } from './../../history/history'
import { makeStyles } from '@material-ui/core/styles'
import kitchDetail from './../../../store/action/action'
import ClockLoader from 'react-spinners'
import Col from "react-bootstrap/Col";
import './index.css'
import store from './../../../store'
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css'
// import Snackbar from '@material-ui/core/Snackbar';
// import { showSnack, dismissSnack } from "react-redux-snackbar";
// import { checkres as sampleJSON } from './../../App'
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    SvgIcon,
    CardHeader
} from '@material-ui/core/'
// import KitchenDetails from './../KitchenDetails'
let sampleJSON;
var indexArr = []
const useStyles = makeStyles((theme) => ({
    root: {
        /*flexGrow: 1,
        position: 'absolute',
        marginLeft: 80,*/
    },
    paper: {
        /*height: 140,
        width: 100,*/
    },
    mediaIcon: {
        float: 'right',
        onClick: {
            color: 'red'
        },
        cursor: 'pointer',
        /*marginTop: -60,
        marginLeft: 235,
        width: 59,
        height: 30,
        */
    },
    control: {
        //padding: theme.spacing(8),
    },
}));

function HomeSpacingGrid(data, searchData) {
    const [spacing, setSpacing] = React.useState(8);
    const [colorindex, setcolorindex] = React.useState([])
    const [load, setload] = React.useState('true')
    const [search, setsearch] = React.useState('false')
    const [fillcolor, setfillcolor] = React.useState('true')
    const classes = useStyles();
    const svgClick = (cardID, index) => {
        indexArr.push(index)
        setfillcolor('false')
        setcolorindex(indexArr)
        let data = {
            "kitchen_id": cardID
        }
        kitchDetail.FavKitchens(cardID).then(result => {
        })
    }
    useEffect(() => {
        let state = store.getState()
        var searchAPi = state.appReducer.isSearch
        if (searchAPi === true) {
            let check = kitchDetail.SearchApi(data.searchData).then(result => {
                sampleJSON = result
                if (sampleJSON != undefined) {
                    setload('false')
                    setsearch('true')
                }
                else {
                    alert('No kitchens found')
                    window.location.reload()
                    // return (
                    //     // <div>
                    //     //     <Snackbar
                    //     //         anchorOrigin={{
                    //     //             vertical: 'bottom',
                    //     //             horizontal: 'left',
                    //     //         }}
                    //     //         open={true}
                    //     //         autoHideDuration={6000}
                    //     //         onClose={console.log("close")}
                    //     //         message="Note archived"
                    //     //     />
                    //     // </div>
                    // )
                }
            })
        } else {
            if (data.data === 'HomePageGrid') {
                let list = kitchDetail.getAllKitchenDetails('HomePageGrid').then(result => {
                    sampleJSON = result
                    setload('false')
                })
            } else {
                let list = kitchDetail.getAllKitchenDetails().then(result => {
                    sampleJSON = result
                    setload('false')
                })
            }
        }
    })
    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };
    const handleClick = (cardID) => {
        history.push({
            pathname: '/KitchenDetail',
            state: { id: cardID }
        })
        window.location.reload(false);
    }

    return (

        <React.Fragment>
            {load === 'false' || search === true ?
                sampleJSON.map((eachCard, index) => (
                    <Col lg="3" xs="6" className="mb-5" key={eachCard.id} item>
                        <div className='kitchen-card'>
                            <Card style={{ background: '#F9F9F9', border: 'none', boxShadow: 'none', overflow: 'hidden' }} >
                                <div className="img-holder">
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        className="media"
                                        image={
                                            "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                                        }

                                    />
                                    <Typography style={{
                                        fontFamily: 'Helvetica',
                                        fontStyle: 'italic',
                                        fontWeight: 'bold',
                                        fontSize: '12px',
                                        color: 'rgb(255, 253, 252)',
                                        background: 'rgba(1, 1, 1, 0.48)',
                                        borderRadius: '5px',
                                        position: 'absolute',
                                        right: '6px',
                                        top: '4px',
                                        padding: '2px 8px'
                                    }}>{eachCard.kitchen_businesstypes[0] ? eachCard.kitchen_businesstypes[0].businesstype.name : null}
                                    </Typography>
                                    <div className="kitchen-fav-holder">
                                        <SvgIcon id={eachCard.id} key={index} viewBox="0 0 20 14" className={classes.mediaIcon} onClick={() => svgClick(eachCard.id, index)} >
                                            <path d="M9.66531 14.1657C9.60422 14.1997 9.5495 14.2298 9.50164 14.2559C9.45357 14.2293 9.39854 14.1987 9.33709 14.1641C9.0819 14.0204 8.71612 13.8091 8.27666 13.5402C7.39674 13.0016 6.22633 12.2347 5.05851 11.3192C3.88799 10.4014 2.73595 9.34661 1.88068 8.23483C1.02038 7.1165 0.5 5.99219 0.5 4.92538C0.5 2.50381 2.56698 0.500149 5.16802 0.500163L5.17173 0.500135C6.75897 0.488338 8.233 1.24945 9.08679 2.50281L9.49761 3.10588L9.91172 2.50505C10.7723 1.25646 12.2438 0.496678 13.8302 0.500146C16.4264 0.51249 18.487 2.50915 18.5 4.92679C18.4995 6.01275 17.9779 7.14608 17.1189 8.26594C16.264 9.38045 15.1125 10.4327 13.9424 11.3456C12.775 12.2564 11.605 13.0163 10.7254 13.5492C10.286 13.8152 9.92039 14.0239 9.66531 14.1657Z" fill={(colorindex.indexOf(index) > -1) ? 'red' : 'grey'} svgcolor stroke="white" />
                                        </SvgIcon>
                                        <Typography className="verified">Verified</Typography>
                                    </div>

                                </div>

                                <CardContent className="content" onClick={() => handleClick(eachCard.id)}>
                                    <div className="content-label-holder">
                                        <Typography style={{
                                            fontFamily: "Helvetica",
                                            fontStyle: "normal",
                                            fontWeight: "bolder",
                                            fontSize: "12px",
                                            color: "#0C0C0B",
                                            float: "left",
                                            fontStyle: "italic"
                                        }}>
                                            {eachCard.kitchen_pricings[0].sale_type.toUpperCase()}
                                        </Typography>
                                        <Typography style={{
                                            background: "rgba(33, 85, 18, 0.945)",
                                            borderRadius: "3px",
                                            fontFamily: "Helvetica",
                                            fontWeight: "bolder",
                                            fontSize: "10px",
                                            color: "rgb(255, 253, 252)",
                                            float: "right",
                                            padding: "3px 20px",
                                            fontStyle: "italic"
                                        }}>
                                            Plug & Play
                                        </Typography>
                                        <div className="clearfix"></div>
                                    </div>

                                    <h6 style={{ color: "#D7210A" }}>
                                        <b>{eachCard.kitchen_addresses[0].address_line_2}  {eachCard.kitchen_addresses[0].address_line_1}</b>
                                    </h6>
                                    <div className="card-bottom-info mt-3">
                                        <span style={{
                                            background: '#D7210A',
                                            fontFamily: 'Lato',
                                            fontStyle: 'normal',
                                            fontSize: '15px',
                                            color: 'rgb(255, 253, 252)',
                                            padding: '6px',
                                            fontWeight: 500
                                        }}>
                                            {eachCard.size}.sq.ft
                                        </span>
                                        <Typography className="mt-2" style={{
                                            fontFamily: 'Lato',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            fontSize: '15px',
                                            color: '#215512'
                                        }}>
                                            {eachCard.description}
                                            {/* Plug and Play kitchen in HSR Layout ready for immediate setup. Near the silicon valley of Banaglore. */}
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </Col>
                ))

                :
                null
            }
        </React.Fragment >
    );
}
export default HomeSpacingGrid