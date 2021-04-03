import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { observer } from "mobx-react";
import Profile from "./Pages/Profile/";
import ReactDOM from "react-dom";
import ProfileStore from "./Store/ProfileStore";
import { StoreContext } from "./Context/StoreContext";
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import SignUp from "./Pages/SignUp/";
import NavBar from "./Components/Navbar/";
import ProtectedRoute from "./ProtectedRoute";
import { AppContext } from "./Context/AppContext";
import Storage from "./Utility/localStorage";
import Language from "./Utility/langTool";
import LanguageSelector from "./Components/LanguageSelector/";
import Topics from "./Pages/Topics/";

const store = {
  profileStore: new ProfileStore()
};


const App = observer(() => {
  const [lang, setLang] = useState("en");
  const onLanguageChange = (value) => setLang(value);

  const langTool = new Language(lang);
  const { translation } = langTool;

  return (

    <AppContext.Provider value={translation}>
      <StoreContext.Provider value={store}>
        <BrowserRouter>
          <NavBar>
            <NavLink className="normal" activeClassName="active" exact to="/profile?auth=true&usr=rohit">Home</NavLink>
            <NavLink className="normal" activeClassName="active" exact to="/signup">Signup</NavLink>
            <NavLink className="normal" activeClassName="active" exact to="/topics">Topics</NavLink>
          </NavBar>
          <LanguageSelector lang={lang} onLanguageChange={onLanguageChange} />
          <Switch>
            <ProtectedRoute path="/profile" component={Profile} />
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
          </Switch>
        </BrowserRouter>
      </StoreContext.Provider>
    </AppContext.Provider>);
});

export default App;



// const storage = {
//   storage: new Storage()
// }

// hydrate


ReactDOM.render(<App />,
  document.getElementById("root")
);