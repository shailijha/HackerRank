import React, { Component, useEffect } from "react";
import { withRouter, Link, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "react-modal";
import './index.css'
import Header from './../header'
// // import { Grid, Row, Col, Container } from 'react-bootstrap'
// import sampleJSON from './../../kitchenSample.json'
import { history } from './../history/history'
import { makeStyles } from '@material-ui/core/styles'
import kitchDetail from './../../store/action/action'
import ClockLoader from 'react-spinners'
import store from './../../store'
// import actions from './../../store/action/action'

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
import KitchenDetails from './../KitchenDetails'
let sampleJSON;
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    position: 'absolute',
    marginLeft: 5,
  },
  paper: {
    height: 140,
    width: 100,
  },
  mediaIcon: {
    marginTop: -60,
    width: 59,
    height: 30,
    marginLeft: 220,
    pointer: 'cursor',
    onClick: {
      color: 'red'
    }
  },
  control: {
    padding: theme.spacing(8),
  },
}));

function SpacingGrid(props) {
  const [spacing, setSpacing] = React.useState(8);
  const [fillcolor, setfillcolor] = React.useState('false')
  const [load, setload] = React.useState('true')
  const [search, setSearch] = React.useState('false')

  const classes = useStyles();
  const svgClick = (cardID) => {
    let iconClick = false
    sampleJSON.forEach(function (obj) {
      if (obj.id != cardID) {
        console.log("node id matched")
        setfillcolor('true')
        console.log("check debug print", fillcolor)
        // iconClick = true
      }
      setfillcolor('false')
      console.log("check debug print", fillcolor)
      // else {
      //   seticoncolor('grey')
      // }
    })

    // sampleJSON.filter(el => {
    //   console.log("test print...", el.id, cardID)
    //   if (el.id === cardID) {
    //     console.log("node id matched")
    //     seticoncolor('red')
    //     console.log("node id matched", iconcolor)
    //   }
    //   else {
    //     seticoncolor('grey')
    //   }
    // })

  }
  useEffect(() => {
    let state = store.getState()
    var searchAPi = state.appReducer.isSearch
    if (searchAPi === true || props.data === true) {
      setSearch(props.data)
      let searchdata = localStorage.getItem('searchData')
      let check = kitchDetail.SearchApi(searchdata).then(result => {
        sampleJSON = result
        if (sampleJSON != undefined) {
          setload('false')
        }
        else {
          alert("No kitchens found")
          window.location.reload()
        }
      })
    }
    else {
      let list = kitchDetail.getAllKitchenDetails().then(result => {
        sampleJSON = result
        setload('false')
      }
      )
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

    <Grid container direction={'row'} className={classes.root
    } spacing={0.1} >
      {load === 'false' ?
        <Grid item xs={12}  >
          <Grid container justify="space-evenly" spacing={2} >
            {sampleJSON.map((eachCard) => (
              <Grid key={eachCard.id} item spacing={5} padding={10}>
                <div className='test-card' >
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
                          // position: "absolute",
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
                    {fillcolor === 'true' ?
                      <SvgIcon key={eachCard.id} className={classes.mediaIcon} onClick={() => svgClick(eachCard.id)} >

                        <path d="M9.66531 14.1657C9.60422 14.1997 9.5495 14.2298 9.50164 14.2559C9.45357 14.2293 9.39854 14.1987 9.33709 14.1641C9.0819 14.0204 8.71612 13.8091 8.27666 13.5402C7.39674 13.0016 6.22633 12.2347 5.05851 11.3192C3.88799 10.4014 2.73595 9.34661 1.88068 8.23483C1.02038 7.1165 0.5 5.99219 0.5 4.92538C0.5 2.50381 2.56698 0.500149 5.16802 0.500163L5.17173 0.500135C6.75897 0.488338 8.233 1.24945 9.08679 2.50281L9.49761 3.10588L9.91172 2.50505C10.7723 1.25646 12.2438 0.496678 13.8302 0.500146C16.4264 0.51249 18.487 2.50915 18.5 4.92679C18.4995 6.01275 17.9779 7.14608 17.1189 8.26594C16.264 9.38045 15.1125 10.4327 13.9424 11.3456C12.775 12.2564 11.605 13.0163 10.7254 13.5492C10.286 13.8152 9.92039 14.0239 9.66531 14.1657Z" fill={'red'} svgcolor />

                      </SvgIcon> :
                      <SvgIcon key={eachCard.id} className={classes.mediaIcon} onClick={() => svgClick(eachCard.id)} >

                        <path d="M9.66531 14.1657C9.60422 14.1997 9.5495 14.2298 9.50164 14.2559C9.45357 14.2293 9.39854 14.1987 9.33709 14.1641C9.0819 14.0204 8.71612 13.8091 8.27666 13.5402C7.39674 13.0016 6.22633 12.2347 5.05851 11.3192C3.88799 10.4014 2.73595 9.34661 1.88068 8.23483C1.02038 7.1165 0.5 5.99219 0.5 4.92538C0.5 2.50381 2.56698 0.500149 5.16802 0.500163L5.17173 0.500135C6.75897 0.488338 8.233 1.24945 9.08679 2.50281L9.49761 3.10588L9.91172 2.50505C10.7723 1.25646 12.2438 0.496678 13.8302 0.500146C16.4264 0.51249 18.487 2.50915 18.5 4.92679C18.4995 6.01275 17.9779 7.14608 17.1189 8.26594C16.264 9.38045 15.1125 10.4327 13.9424 11.3456C12.775 12.2564 11.605 13.0163 10.7254 13.5492C10.286 13.8152 9.92039 14.0239 9.66531 14.1657Z" fill={'grey'} svgcolor />

                      </SvgIcon>
                    }

                    <CardContent className="content" onClick={() => handleClick(eachCard.id)}>
                      <Typography style={{
                        position: "absolute",
                        left: 170,
                        top: 10,
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
                        marginLeft: -20,
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
        null
      }
    </Grid >


  );
}
export default SpacingGrid
// export default connect(null, null)(withRouter(SpacingGrid))