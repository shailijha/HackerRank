import React from "react";
import logo from "./logo.svg";
import "./App.css";
import contact from "./helper/Contact";
import Homepage from "./helper/Homepage";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AddKitchen from "./helper/AddKitchen";
import ViewKitchen from './helper/Viewkitchens/mainComponent/main'
import KitchenDetails from './helper/KitchenDetails'
import action from './store/action/action'
import Profile from './helper/profile/myprofile'
import Blog from './helper/blog'
import HowThisWorks from './helper/how_this_works'
// import Contact from "./helper/Contact/index";
export let checkres
class App extends React.Component {
  // componentWillMount() {
  //   var url = 'http://kitchen-alb-619682180.us-east-2.elb.amazonaws.com/kitchens'
  //   var response = fetch(url, {
  //     method: "GET"
  //   }).then(function (response) {
  //     response.json().then(resp => {
  //       checkres = resp
  //       console.log("checkkkkkk", checkres)
  //     })

  //   })
  // }
  componentDidMount() {
    action.validateToken()
  }
  render() {
    return (
      <div>
        <div className="App" >
          <div className="center">
            <Provider store={store}>
              <Router>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/AddKitchen" component={AddKitchen} />
                <Route exact path="/ViewKitchens" component={ViewKitchen} />
                <Route exact path="/KitchenDetail" component={KitchenDetails} />
                <Route exact path="/Dashboard" component={Profile} />
                <Route exact path="/Blog" component={Blog} />
                <Route exact path="/HowThisWorks" component={HowThisWorks} />
              </Router>
            </Provider>
            {/* <Route exact path="/contact" component={contact} /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
