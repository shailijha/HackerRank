import React, { Component } from "react";
import './index.css'
import Header from '../header'
import Footer from './../footer'
import { Button, Col, Row, Container } from "react-bootstrap";
import HowItWorksCard from './card'

class HowThisWorks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: true,
        };
        // this.openModal = this.openModal.bind(this);
        // this.closeModal = this.closeModal.bind(this);
        // this.saveData = this.saveData.bind(this);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <section className="body-content">
                    <section className="bgwhite">
                        <Container className="pt-5 pb-5">
                            <Row>
                                <Col lg="6">
                                    <div className="howitworkscnt">
                                        <div className="block-content">
                                            <h4>KITCHSTART’S MISSION</h4>
                                            <p>
                                                We connect passionate foodpreneurs to their dream kitchens, and kitchen owners to their dream tenants. Our mission is to support you in the journey of your idea- from <span className="highlight">recipe to table</span>.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="img-holder">
                                        <img src={require('./../../assets/images/how_we_works.jpg')} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <Container className="pt-5 pb-4">
                        <Row>
                            <Col lg="12">
                                <Row>
                                    <Col lg="3" sm="6" xs="12">
                                        <HowItWorksCard data={{img:require('./../../assets/icons/hitwblck1.svg'),content:"Join India’s 1st growing network of food businesses and kitchen owners for competitive rentals"}} />
                                    </Col>
                                    <Col lg="3" sm="6" xs="12">
                                        <HowItWorksCard data={{img:require('./../../assets/icons/hitwblck2.svg'),content:"Monetize under-utilized kitchen space using shift and share based rental"}} />
                                    </Col>
                                    <Col lg="3" sm="6" xs="12">
                                        <HowItWorksCard data={{img:require('./../../assets/icons/hitwblck5.svg'),content:"Take your food business through a hassle-free process from recipe to table"}} />
                                    </Col>
                                    <Col lg="3" sm="6" xs="12">
                                        <HowItWorksCard data={{img:require('./../../assets/icons/hitwblck6.svg'),content:"India’s first database of Pre-vetted, licensed commercial kitchens"}} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="3" sm="6" xs="12">
                                        <HowItWorksCard data={{img:require('./../../assets/icons/hitwblck3.svg'),content:"Mark your kitchen’s presence among the growing food businesses in your city"}} />
                                    </Col>
                                    <Col lg="3" sm="6" xs="12">
                                        <HowItWorksCard data={{img:require('./../../assets/icons/hitwblck4.svg'),content:"Get access to reliable foodpreneurs who have been pre-vetted for licenses."}} />
                                    </Col>
                                    <Col lg="3" sm="6" xs="12">
                                        <HowItWorksCard data={{img:require('./../../assets/icons/hitwblck7.svg'),content:"Reduced capital expenditure for new setup and scaling to new location"}} />
                                    </Col>
                                    <Col lg="3" sm="6" xs="12">
                                        <HowItWorksCard data={{img:require('./../../assets/icons/hitwblck8.svg'),content:"Scale your business easily to multiple kitchen outlets with flexible rental agreements"}} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <section className="bgwhite">
                        <Container className="pb-5 pt-5">
                            <Row>
                                <Col lg="6">
                                    <h4 className="heading">Kitchen Owners, are you monetizing underutilized kitchen space?</h4>
                                    <p>Here’s some food for thought – having underutilized or vacant kitchens for rent is like sitting on a gold mine. List your property on Kitchstart and meet foodpreneurs, restaurateurs, caterers, and other potential tenants at the click of a button.</p>
                                    <a href="" className="btn btn-success">LIST KITCHEN</a>
                                </Col>
                                <Col lg="6">
                                    <h4 className="heading">Foodpreneurs, Finding the ideal commercial kitchen is now a piece of cake</h4>
                                    <p>Struggling to find a kitchen that caters to your specific needs? We hear you! From versatile BYOE (Bring Your Own Equipment) spaces to fully-furnished Plug n' Play units, at Kitchstart, we’re building India's largest database of commercial kitchen spaces to help you kickstart your business.</p>
                                    <a href="" className="btn btn-success">EXPLORE KITCHENS</a>
                                </Col>
                            </Row>
                        </Container>
                        <Container className="pb-5 pt-5">
                            <Row>
                                <Col>
                                    <h4 className="heading">Simple steps to kickstart your kitchen</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="sub-heading-green">Are you looking to rent a kitchen space?</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="text-center mt-2 mb-3">
                                        <img src={require('./../../assets/icons/howitworks_rent.svg')} alt="" />
                                    </div>
                                </Col>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col lg="4">
                                    <p>Use our free search tool and apply filters like location and sq.ft to narrow the results. Browse the photo gallery and read the property description to make sure it checks all your boxes.</p>
                                </Col>
                                <Col lg="4">
                                    <p>Fill out the form to let us know which kitchen(s) you're interested in viewing and we'll connect you to the property owner. This is an opportunity to meet them and assess if this is indeed the right fit for you.</p>
                                </Col>
                                <Col lg="4">
                                    <p>Once you've found your dream kitchen, give us a holler and we’ll help you seal the deal in a few simple steps. Starting a cloud kitchen doesn’t get easier than this.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="sub-heading-green">Looking to list your kitchen space on Kitchstart?</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="text-center mt-2 mb-3">
                                        <img src={require('./../../assets/icons/howitworks_list.svg')} alt="" />
                                    </div>
                                </Col>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col lg="4">
                                    <p>Does your kitchen come with a commercial dosa dough table? Are you located right next to a grocery store? Sign up for free to list your property on our website. Share photos, videos and other details to ‘wow’ potential renters.</p>
                                </Col>
                                <Col lg="4">
                                    <p>Whenever we receive a 'request to view' from an interested party, we connect them to you  — so you have a chance to show them your property and give them more reasons to fall in love with it.</p>
                                </Col>
                                <Col lg="4">
                                    <p>After the viewing, we’ll touch base with you and your potential renter to achieve alignment on costs & services, and facilitate the final steps. Monetising underutilized kitchen space doesn’t get easier than this.</p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <Container className="pb-5 pt-5">
                        <Row>
                            <Col lg={{span: 8, offset: 2}}>
                                <div>
                                    <div className="card" 
                                    style={{
                                        marginTop: '0px',
                                        border: '1px solid #CFCFCF',
                                        boxSizing: 'border-box',
                                        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                                        borderRadius: '5px'
                                    }}>
                                        <div className="card-body text-center">
                                            <p style={{fontSize: '16px'}} class="color-red">Having trouble finding/listing a kitchen?<br/>
                                            Write to us at <a class="color-green" href="mailto:contact@kitchstart.com">contact@kitchstart.com</a> and our team will jump right in to assist you.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Footer/>
                </section>
            </React.Fragment>
        )
    }
}
export default HowThisWorks;