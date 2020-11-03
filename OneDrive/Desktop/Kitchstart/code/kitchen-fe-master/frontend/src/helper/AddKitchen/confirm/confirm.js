import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import store from "./../../../store";
import Row from "react-bootstrap/Row";
import Dropdown from 'react-bootstrap/Dropdown'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './confirm.css'
import { jsonKitchenForm } from './../basic'
import kitchData from './../../../store/action/action'
import actionType from './../../../store/constant/constant'
var count = 0;
let kitchen_id;
let kitch_img = []
class Confirmation extends React.Component {
    fileObj = [];
    fileArray = [];
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: true,
            next: false,
            file: [],



        };
        this.inputOpenFileRef = React.createRef()
        this.fileChangedHandler = this.fileChangedHandler.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }
    onChangeBasic(event) {
        console.log("debug 1'", event.target.value);
    }

    nextclick() {
        this.setState({ next: true });
    }
    handlePreview() {
        store.dispatch({ type: actionType.PREVIEW_KITCHEN, payload: true });
        // kitchData.createKitchen(jsonKitchenForm).then(result => {
        //     kitchen_id = result.id
        // })
        this.props.history.push('/KitchenDetail')
    }
    handleSubmit() {
        let submitData = {
            "id": "",
            "is_active": true
        }
        submitData.id = kitchen_id;
        // kitchData.KitcehnPutApi(submitData).then(result => {
        // })
        kitchData.UploadPhotos(kitch_img, this.fileObj).then(result => {

        })
    }
    showOpenFileDlg = (event) => {
        this.inputOpenFileRef.current.click()
    }
    fileChangedHandler = (event) => {
        this.fileObj.push(event.target.files)

        for (let i = 0; i < this.fileObj[0].length; i++) {
            let fileTypeSplit = this.fileObj[0][i].type.split('/')
            console.log("checkkk file", fileTypeSplit[1], this.fileObj[0][i].name)
            console.log("checkkkk image....", this.fileObj[0][i])
            // let checkImage = { "fileName": URL.createObjectURL(this.fileObj[0][i]), "fileType": fileTypeSplit[1] }
            let checkImage = { "fileName": this.fileObj[0][i].name, "fileType": fileTypeSplit[1] }
            kitch_img.push(checkImage)
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }

        this.setState({ file: this.fileArray })
    }
    handleChange = (data, event) => {
        if (data === 'description')
            jsonKitchenForm.description = event.target.value

    }
    uploadFiles(event) {
        event.preventDefault()
        console.log(this.state.file)
    }
    render() {
        return <div className="d-flex flex-columns">
            <form>
                <div className="form-group">
                    <div className="row" style={{ position: 'absolute' }}>
                        <div className="col-lg-12" >
                            <div className="confirm-title">Photos of your kitchen</div>
                            <div className="confirm-text">Upload photos of your kitchen and equipment to show off to potential food businesses. We recommend at least 5 photos - including the inside and outside of your kitchen as well as any equipment and/or unique space.</div>
                        </div>
                        <div>
                            <div className="col-lg-6" >
                                <div className="upload-rect">
                                </div>
                                <div className="upload" onClick={this.showOpenFileDlg} >
                                    <input type="file" multiple ref={this.inputOpenFileRef} onChange={this.fileChangedHandler} />

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="upload-btn" onClick={this.uploadFiles}>
                                    <div className="upload-txt">Upload Photos</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="kitch-title" style={{ marginLeft: 320, marginTop: 340 }}>
                                Kitchen Description{" "}
                            </div>
                            <label className="kitch-label" style={{ marginTop: 400, marginLeft: 320, width: 500 }}>
                                What makes your kitchen space great? You can provide your unique
                                offering here.
                             </label>

                            <input
                                className="kitch-input"
                                style={{ width: 453, height: 69, marginTop: 350, marginLeft: 220 }}
                                maxLength="100"
                                onChange={event => this.handleChange('description', event)}
                            ></input>
                        </div>
                        <div className="col-lg-12">
                            <div className="confirm-title" style={{ marginTop: 440 }}>Confirmation</div>
                            <div className="confirm-title" style={{ marginTop: 480, fontSize: 20, width: 600, textAlign: 'justify' }}>I hereby confirm all the details provided about the kitchen that I want to list and accept the terms and conditions.</div>
                            <input className="check-rect" type="checkbox"></input>
                            <div className="confirm-title" style={{ marginTop: 520, marginLeft: 30, fontSize: 20, width: 500 }}>Read and Accept the terms and conditions</div>
                            <input className="check-rect" type="checkbox" style={{ marginTop: 30 }}></input>
                            <div className="confirm-title" style={{ marginTop: 550, marginLeft: 30, fontSize: 20, width: 500 }}>Confirm</div>
                        </div>
                        <div className="col-lg-12">
                            <div className="submit-btn" onClick={() => this.handleSubmit()}>
                                <div className="submit-txt">Submit Kitchen</div>
                            </div>
                            <div className="submit-btn" style={{ marginLeft: 200 }} onClick={() => this.handlePreview()}>
                                <div className="submit-txt" >Preview Kitchen</div>
                            </div>
                        </div>
                        {/* <input className="upload" type="file" multiple onChange={this.fileChangedHandler} ref={this.inputOpenFileRef} /> */}

                        <div className="form-group multi-preview">
                            {(this.fileObj || []).forEach(function (url, index) {
                                console.log("cshgdhjsakslfsdhf", url, index)
                                return <div>
                                    <p key={url.name} className="group-picture">{url.name}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </form>
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
export default withRouter(connect(mapStateToProps, null)(Confirmation));
