import React, { Component } from "react";
import './index.css'
import { Card } from "react-bootstrap";

class HowItWorksCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Card className="works-card">
                    <Card.Body>
                        <div className="text-center icon-img">
                            {
                                (this.props.data.img) ?
                                    <img src={this.props.data.img} alt="" />
                                :
                                    null
                            }
                        </div>
                        <Card.Text>
                            {this.props.data.content}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </React.Fragment>
        )
    }
}
export default HowItWorksCard;