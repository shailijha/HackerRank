import React from "react";
import Footer from './../footer'
import './index.css'
import Header from '../header'
import { Button, Col, Row, Container } from "react-bootstrap";

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <section className="blog-img">
                    <div className="banner-title">
                        <h4>BLOG</h4>
                    </div>
                </section>
                <Container className="pt-5 pb-5">
                    <Row className="mb-4">
                        <Col>
                            <div class="media position-relative blog-holder">
                                <div class="blog-image mr-3">
                                    <img src={require('./../../assets/images/blog/blog-1.png')} alt="..." />
                                </div>
                                <div class="media-body">
                                    <h5 class="mt-0">Blog Article title one</h5>
                                    <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor.</p>
                                    <a href="#" className="btn btn-success readmore">READ MORE</a>
                                </div>
                            </div>
                        </Col>
                        {/*<Col lg={{span: 2, order: 1}}>
                            <div class="blog-image">
                                <img src={require('./../../assets/images/blog/blog-1.png')} className="rounded mx-auto d-block" alt="..." />
                            </div>
                        </Col>
                        <Col lg={{span: 10, order: 2}}>
                            <div class="blog-content">
                                <h5>Blog Article title one</h5>
                                <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor.</p>
                            </div>
                            <span className="align-bottom">text-bottom</span>
        </Col>*/}
                    </Row>
                    <Row className="mb-4">
                        <Col>
                            <div class="media position-relative text-right blog-holder">
                                <div class="media-body">
                                    <h5 class="mt-0">Blog Article title two</h5>
                                    <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor.</p>
                                    <a href="#" className="btn btn-success readmore">READ MORE</a>
                                </div>
                                <div class="blog-image ml-3">
                                    <img src={require('./../../assets/images/blog/blog-2.png')} alt="..." />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col>
                            <div class="media position-relative blog-holder">
                                <div class="blog-image mr-3">
                                    <img src={require('./../../assets/images/blog/blog-3.png')} alt="..." />
                                </div>
                                <div class="media-body">
                                    <h5 class="mt-0">Blog Article title three</h5>
                                    <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor.</p>
                                    <a href="#" className="btn btn-success readmore">READ MORE</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </React.Fragment>
        )
    }
}
export default BlogPage;