import store from '../index'
import actionType from '../constant/constant'
// import { showSnack, dismissSnack } from "react-redux-snackbar";
var BasePath = 'http://kitchen-alb-619682180.us-east-2.elb.amazonaws.com/api'
let token = localStorage.getItem('AccessToken')
async function getAllKitchenDetails(data) {
    let token = localStorage.getItem('AccessToken')
    let res;
    var url = BasePath + '/kitchens'
    var response = await fetch(url, {
        method: "GET",
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    })
    var resp = await response.json();
    if (data === 'HomePageGrid') {
        resp = resp.splice(0, 4)
    }
    console.log("checkkkkk response", resp)
    return resp
}
async function getKitchenDetail(kitchenid) {
    let token = localStorage.getItem('AccessToken')
    let res;
    var url = BasePath + '/kitchens?id=' + kitchenid
    var response = await fetch(url, {
        method: "GET",
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    })
    let resp = await response.json();
    console.log("rvbnmk", res)
    return resp
}
async function getBusinessType(data) {
    let token = localStorage.getItem('AccessToken')
    let businessID;
    var url = BasePath + '/businesstypes/?name=' + data
    var response = await fetch(url, {
        method: "GET",
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    })
    let resp = await response.json();
    console.log("testtttttt", resp)
    businessID = resp[0].id
    return businessID
}
async function getFacilities(data) {
    let token = localStorage.getItem('AccessToken')
    console.log("check data", data)
    let facilityID;
    var url = BasePath + 'facilities/?name=' + data
    var response = await fetch(url, {
        method: "GET",
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    })
    let resp = await response.json();
    console.log("testtttttt", resp)
    facilityID = resp[0].id
    return facilityID
}
async function getEquipment(data) {
    let token = localStorage.getItem('AccessToken')
    let equipmentID;
    var url = BasePath + '/equipments/?name=' + data
    var response = await fetch(url, {
        method: "GET",
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    })
    let resp = await response.json();
    console.log("testtttttt", resp)
    equipmentID = resp[0].id
    return equipmentID
}
async function createKitchen(data) {
    let token = localStorage.getItem('AccessToken')
    console.log("dta", data)
    const response = await fetch("http://kitchen-alb-619682180.us-east-2.elb.amazonaws.com/api/kitchens/create-with-children", {
        method: 'POST',
        body: data,
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    });
    let resp = await response.json();
    console.log("check dataaaaa", resp)
    if (resp.message === "Unauthorized") {
        store.dispatch({ type: actionType.LOGIN_POPUP, payload: true })
    }
    else {
        return resp
    }

}
async function LoginApi(data) {
    console.log("login api data.....", JSON.stringify(data))
    const response = await fetch(BasePath + "/users/login", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
        }
    });
    let resp = await response.json();
    console.log("check respppp", resp)
    if (resp.access_token) {
        return await onLoginSuccess(resp);
    }
    else {
        alert("Invalid Email or Password")
    }

    // console.log("check dataaaaa", resp)
}
async function getUserDetails() {
    // console.log("login api data.....", JSON.stringify(data))
    let token = localStorage.getItem('AccessToken')
    console.log("check token", token)
    try {
        const response = await fetch(BasePath + "/user-details", {
            method: 'GET',
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,

            }
        });
        let resp = await response.json();
        console.log("get user details", resp)
        store.dispatch({ type: actionType.USER_DETAILS, payload: resp })
        return resp
    }
    catch {
        console.log("error in api")
    }

    // console.log("check dataaaaa", resp)
}
function onLoginSuccess(response) {
    let token = localStorage.getItem('AccessToken')
    console.log("login sucess", response)
    if (response.access_token) {
        localStorage.setItem("AccessToken", response.access_token);
        console.log("token checkkkkkkkkkk", JSON.stringify(localStorage.getItem('AccessToken')))
        store.dispatch({ type: actionType.LOGIN_POPUP, payload: false })
        getUserDetails()
    }
}
async function validateToken() {
    console.log("validate token")
    let token = localStorage.getItem('AccessToken')
    try {
        const response = await fetch(BasePath + "/token/validate", {
            method: 'GET',
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,

            }
        });
        let resp = await response.json();
        // if (resp.message === 'Unauthorized') {
        //     store.dispatch({ type: actionType.LOGIN_POPUP, payload: true })
        // }
        console.log("call user details", resp)

        if (JSON.stringify(resp) === '{}') {
            console.log("call user details")
            getUserDetails()
            return resp
        }
        else if (resp.message === 'Unauthorized') {
            console.log("open login popup")
            store.dispatch({ type: actionType.LOGIN_POPUP, payload: true })
        } else {
            return resp
        }
    }
    catch {
        console.log("error in api")
    }
}

async function RegisterApi(data) {
    console.log("register api....", data)
    let token = localStorage.getItem('AccessToken')
    const response = await fetch(BasePath + "/users/register", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    });
    let resp = await response.json();
    if (resp.message === 'Registration successful') {
        store.dispatch({ type: actionType.REGISTER_POPUP, payload: false });
    }
    else if (resp.message.msg === 'E-mail already in use') {
        alert("Mail id is already registered")
    }
    else {
        alert("Invalid mail id")
    }
    console.log("check dataaaaa", resp)
}
// const SearchApi = data => async dispatch => {
async function SearchApi(data) {
    console.log("serach api data", typeof (data), data, JSON.stringify(data))
    var searchData = { "searchKey": data }
    let token = localStorage.getItem('AccessToken')
    const response = await fetch(BasePath + "/kitchens/search", {
        method: 'POST',
        body: JSON.stringify(searchData),
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    });
    let resp = await response.json();
    if (resp.length > 0) {
        return resp
        // store.dispatch({ type: actionType.IS_SEARCH, payload: true });
        //localStorage.setItem()
    }
    // else {
    //     sendSnack(dispatch, resp)
    // }
    console.log("check dataaaaa", resp)
}
async function KitcehnPutApi(data) {
    console.log("serach api data", data)
    let token = localStorage.getItem('AccessToken')
    const response = await fetch(BasePath + "/kitchens/kitchens", {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    });
    let resp = await response.json();
    console.log("check dataaaaa", resp)
}
async function UserFavKitchens() {
    let token = localStorage.getItem('AccessToken')
    console.log("UserFavKitchens api data")
    const response = await fetch(BasePath + "/user-favourites", {
        method: 'GET',
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    });
    let resp = await response.json();
    if (resp.message === "Unauthorized") {
        store.dispatch({ type: actionType.LOGIN_POPUP, payload: true })
    }
    return resp
    console.log("check dataaaaa", resp)
}
async function FavKitchens(data) {
    console.log("Save fav kitchen", data)
    let token = localStorage.getItem('AccessToken')
    let dataToSend = { kitchen_id: data }
    const response = await fetch("http://kitchen-alb-619682180.us-east-2.elb.amazonaws.com/api/user-favourites", {
        method: 'POST',
        body: JSON.stringify(dataToSend),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }

    })
    let resp = await response.json();
    if (resp.message === "Unauthorized") {
        store.dispatch({ type: actionType.LOGIN_POPUP, payload: true })
    }
    console.log("check dataaaaa", resp)

}
async function Equipments() {
    console.log("equipmnt api")
    let token = localStorage.getItem('AccessToken')
    const response = await fetch(BasePath + "/equipments", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }

    })
    let resp = await response.json();
    console.log("check dataaaaa equipments", resp)
    if (resp.message === "Unauthorized") {
        store.dispatch({ type: actionType.LOGIN_POPUP, payload: true })
    } else {
        return resp
    }
}
async function StorageFacilites() {
    console.log("equipmnt api")
    let token = localStorage.getItem('AccessToken')
    const response = await fetch(BasePath + "/facilities", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }

    })
    let resp = await response.json();
    console.log("storage api res")
    if (resp.message === "Unauthorized") {
        store.dispatch({ type: actionType.LOGIN_POPUP, payload: true })
    } else {
        return resp
    }
    console.log("check dataaaaa", resp)


}
async function UserKitchen() {
    console.log("equipmnt api")
    let token = localStorage.getItem('AccessToken')
    const response = await fetch(BasePath + "/user-kitchens", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }

    })
    let resp = await response.json();
    if (resp.message === "Unauthorized") {
        store.dispatch({ type: actionType.LOGIN_POPUP, payload: true })
    } else {
        return resp
    }
    console.log("check dataaaaa", resp)


}
async function upload2AWS(imgdata, fileObj, generateUrl, checkImage) {
    imgdata.forEach(function (obj) {
        if (generateUrl.hasOwnProperty(obj.fileName)) {

            console.log("file name matched", generateUrl[obj.fileName].putUrl, generateUrl[obj.fileName].getUrl)
            var check = obj.fileName
            return new Promise((resolve, reject) => {
                var requestOptions = {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "image/*"
                    },
                    body: 'kitchen2',
                    redirect: 'follow'
                };

                fetch(JSON.stringify(generateUrl[obj.fileName].putUrl), requestOptions)
                    .then(response =>
                        response.text())
                    .then(result => console.log("checkkkkk", result))
                    .catch(error => console.log('error', error));
            })
        }
        //
    })
}
async function UploadPhotos(imgdata, fileObj, checkImage) {
    let token = localStorage.getItem('AccessToken')
    let generateUrl;
    console.log("UploadPhotos api", imgdata, fileObj)
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(imgdata),
        redirect: 'follow'
    };
    const response = await fetch(BasePath + "/kitchen_images/presigned_url", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(imgdata),
        redirect: 'follow'

    })
    generateUrl = await response.json();
    upload2AWS(imgdata, fileObj, generateUrl, checkImage)
}
export default {
    getAllKitchenDetails,
    getKitchenDetail,
    getBusinessType,
    getFacilities,
    getEquipment,
    createKitchen,
    RegisterApi,
    LoginApi,
    SearchApi,
    KitcehnPutApi,
    validateToken,
    UserFavKitchens,
    FavKitchens,
    Equipments,
    StorageFacilites,
    UserKitchen,
    UploadPhotos
}