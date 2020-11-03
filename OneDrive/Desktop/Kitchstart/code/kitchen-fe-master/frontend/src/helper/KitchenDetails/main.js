import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Header from './../header'
import './index.css'
import sampleJson from './../../kitchenSample.json'
class MainKitchenDetails extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            address: ''
        };
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
        const cardId = this.props
        console.log("state id", cardId)
        return (
            <div>
                <div className="detail-address">adres</div>
                {/* {sampleJson.filter(el => {
                    if (el.id === cardId.id) {
                        let adres = el.kitchen_addresses[0].address_line_2
                        console.log("check data ", el.kitchen_addresses[0].address_line_2)
                        return < div className={"address"} > adres</div>
                    }
                })
                } */}




            </div >
        );
    }
}
const mapStateToProps = (state) => {
    return {};
};
// const mapDispatchToProps = dispatch => ({

// })
export default MainKitchenDetails;

