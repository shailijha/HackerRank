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
import store from './../../../store'
import actionType from './../../../store/action/action'
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
        flexGrow: 1,
        // position: 'absolute',
        marginLeft: 10,
        marginTop: 150

    },
    paper: {
        height: 140,
        width: 100,
    },
    mediaIcon: {
        marginTop: -60,
        width: 59,
        height: 30,
        marginLeft: 235,
        pointer: 'cursor',
        onClick: {
            color: 'red'
        }
    },
    control: {
        padding: theme.spacing(8),
    },
}));

function FavSpacingGrid(props) {

    const [spacing, setSpacing] = React.useState(8);
    const [colorindex, setcolorindex] = React.useState([])
    const [load, setload] = React.useState('true')
    const [fillcolor, setfillcolor] = React.useState('true')
    const classes = useStyles();
    const svgClick = (cardID) => {
        // indexArr.push(index)
        // setfillcolor('false')
        // setcolorindex(indexArr)
        // console.log("node id matched", index, colorindex, indexArr)
        // let data = {
        //     "kitchen_id": cardID
        // }
        // kitchDetail.FavKitchens(data).then(result => {
        //     console.log("result", result)
        // })
    }
    useEffect(() => {
        let list = kitchDetail.UserFavKitchens().then(result => {
            console.log("check fav result")
            result.forEach(function (id) {
                console.log("fav kitchen print", id)
                let kitchenid = id.kitchen_id
                kitchDetail.getKitchenDetail(kitchenid).then(result => {

                    if (result != '[]') {
                        sampleJSON = result
                        setload('false')
                    }
                    else {
                        console.log("no fav kitchens")
                    }
                    console.log("fav kitchen get", sampleJSON)
                })
            })
        }
        )
        // console.log("first print", list)
        // setTimeout(function () {
        //     svgClick()
        // }, 2000)

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
    const exploreClick = () => {
        console.log("explore btn is clicked")
        // store.dispatch({ type: actionType.IS_SEARCH, payload: false })
        history.push({
            pathname: '/ViewKitchens'
        })
    }

    return (
        <Grid container direction={'row'} className={classes.root
        } spacing={0.1} >
            {load === 'false' ?
                <Grid item xs={12}  >
                    <Grid container justify="space-around" spacing={2} >
                        {sampleJSON.map((eachCard) => (
                            <Grid key={eachCard.id} item spacing={5} padding={10}>
                                <div className='fav-card' >
                                    <Card style={{ background: 'invisible', border: 'none', boxShadow: 'none', overflow: 'hidden' }}>

                                        <CardMedia
                                            style={{ height: 0, paddingTop: '65%', borderRadius: 10 }}
                                            className="media"
                                            image={
                                                "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                                            }

                                        >
                                            {eachCard.is_verified === true ?
                                                <Typography style={{
                                                    position: "absolute",
                                                    marginLeft: 5,
                                                    marginTop: -30,
                                                    width: 82,
                                                    height: 18,
                                                    background: 'rgba(33, 85, 18, 0.943564)',
                                                    borderRadius: 3,
                                                    fontFamily: "Helvetica",
                                                    fontWeight: 'bold',
                                                    fontSize: 12,
                                                    color: '#FFFDFC'
                                                }}>
                                                    Verified
                        </Typography>
                                                : null}
                                        </CardMedia>

                                        <SvgIcon key={eachCard.id} className={classes.mediaIcon} onClick={() => svgClick(eachCard.id)} >

                                            <path d="M9.66531 14.1657C9.60422 14.1997 9.5495 14.2298 9.50164 14.2559C9.45357 14.2293 9.39854 14.1987 9.33709 14.1641C9.0819 14.0204 8.71612 13.8091 8.27666 13.5402C7.39674 13.0016 6.22633 12.2347 5.05851 11.3192C3.88799 10.4014 2.73595 9.34661 1.88068 8.23483C1.02038 7.1165 0.5 5.99219 0.5 4.92538C0.5 2.50381 2.56698 0.500149 5.16802 0.500163L5.17173 0.500135C6.75897 0.488338 8.233 1.24945 9.08679 2.50281L9.49761 3.10588L9.91172 2.50505C10.7723 1.25646 12.2438 0.496678 13.8302 0.500146C16.4264 0.51249 18.487 2.50915 18.5 4.92679C18.4995 6.01275 17.9779 7.14608 17.1189 8.26594C16.264 9.38045 15.1125 10.4327 13.9424 11.3456C12.775 12.2564 11.605 13.0163 10.7254 13.5492C10.286 13.8152 9.92039 14.0239 9.66531 14.1657Z" fill={'red'} svgcolor />

                                        </SvgIcon>



                                        <CardContent style={{ position: 'absolute' }} onClick={() => handleClick(eachCard.id)}>
                                            <Typography style={{
                                                position: "absolute",
                                                left: 170,
                                                top: -200,
                                                width: 92,
                                                height: 15,
                                                // background: '#D7210A',
                                                fontFamily: "Helvetica",
                                                fontStyle: "italic",
                                                fontWeight: "bold",
                                                fontSize: 12,
                                                color: '#FFFDFC',
                                                background: 'rgba(1, 1, 1, 0.479731)',
                                                borderRadius: 5,
                                                cursor: 'pointer'
                                            }}>{eachCard.kitchen_businesstypes[0] ? eachCard.kitchen_businesstypes[0].businesstype.name : null}
                                            </Typography>

                                            <Typography style={{
                                                position: "absolute",
                                                width: 32,
                                                marginLeft: -10,
                                                marginTop: -30,
                                                fontFamily: "Helvetica",
                                                fontStyle: "normal",
                                                fontWeight: "bold",
                                                fontSize: 15,
                                                color: '#0C0C0B'
                                            }}>
                                                {eachCard.kitchen_pricings[0].sale_type.toUpperCase()}
                                            </Typography>
                                            <Typography style={{
                                                position: "absolute",
                                                marginLeft: 190,
                                                marginTop: -30,
                                                width: 82,
                                                height: 18,
                                                background: 'rgba(33, 85, 18, 0.943564)',
                                                borderRadius: 3,
                                                fontFamily: "Helvetica",
                                                fontWeight: 'bold',
                                                fontSize: 12,
                                                color: '#FFFDFC'
                                            }}>
                                                Plug & play
                        </Typography>
                                            <Typography style={{
                                                position: "absolute",
                                                marginLeft: -25,
                                                marginTop: -10,
                                                width: 180,
                                                height: 12,
                                                fontFamily: 'Lato',
                                                fontStyle: 'normal',
                                                fontWeight: 'bold',
                                                fontSize: 18,
                                                color: '#D7210A'
                                            }}>
                                                {eachCard.kitchen_addresses[0].address_line_2}  {eachCard.kitchen_addresses[0].address_line_1}
                                            </Typography>
                                            <Typography style={{
                                                position: "absolute",
                                                marginLeft: -10,
                                                marginTop: 20,
                                                width: 73,
                                                height: 20,
                                                background: '#D7210A',
                                                borderRadius: 3,
                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "bold",
                                                fontSize: 15,
                                                color: '#FFFDFC'
                                            }}>
                                                {eachCard.size}.sq.ft
                        </Typography>
                                            <Typography style={{
                                                position: "absolute",
                                                marginLeft: -10,
                                                marginTop: 45,
                                                width: 220,
                                                height: 44,
                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 15,
                                                textAlign: "justify",
                                                color: '#215512'
                                            }}>
                                                {eachCard.description}
                                                {/* Plug and Play kitchen in HSR Layout ready for immediate setup. Near the silicon valley of Banaglore. */}
                                            </Typography>

                                        </CardContent>
                                        {/* <CardHeader
                        title={eachCard.size}
                        subheader={eachCard.size}
                      />
                      <CardContent>
                        <Typography variant="h5" gutterBottom>
                          Hello World
                                  </Typography>
                      </CardContent> */}
                                    </Card>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                :
                <div>
                    <div className="col-lg-12" style={{ marginTop: 150, marginLeft: 420 }}>
                        <div className="fav-text">You haven’t saved any kitchen yet. View our comprehensive list of kitchens and save the ones you like.</div>

                    </div>
                    <div className="col-lg-12" style={{ marginTop: 240, marginLeft: 690 }}>
                        <div className="find-kitchen-btn" onClick={() => exploreClick()}>
                            <div className="fav-kitch-text">
                                Find Kitchen
                            </div>
                        </div>
                    </div>
                </div>

            }

        </Grid >

    );
}
export default FavSpacingGrid
// export default connect(null, null)(withRouter(SpacingGrid))