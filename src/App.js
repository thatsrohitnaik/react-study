import React from "react";
import "./style.css";
import { observer } from "mobx-react";
import Profile from "./Pages/Profile/";
import ReactDOM from "react-dom";
import ProfileStore from "./Store/ProfileStore";
import { StoreContext } from "./Context/context";
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import SignUp from "./Pages/SignUp/";
import NavBar from "./Components/Navbar/";
import Datepicker from "./Pages/Calendar/";
import ProtectedRoute from "./ProtectedRoute";

const App = observer(() => {
  return (<>
    <BrowserRouter>
      <NavBar>
        <NavLink className="normal" activeClassName="active" exact to="/profile?auth=true&usr=rohit">Home</NavLink>
        <NavLink className="normal" activeClassName="active" exact to="/signup">Signup</NavLink>
      </NavBar>
      <Switch>
      <ProtectedRoute path="/profile" component={Profile} />
        <Route path="/">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter></>);
});

export default App;

const store = {
  profileStore: new ProfileStore()
};
// hydrate
ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);