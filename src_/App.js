import React, { Component } from "react";
import ReactDOM from "react-dom";
import { observer } from 'mobx-react';
import Profile from "./pages/profile";
import ProfileStore from "./store/ProfileStore";
import CounterStore from "./store/CounterStore";
import { StoreProvider } from "./context/StoreContext";
import { StoreConsumer } from './context/StoreContext';


@observer class App extends Component {

  render() {
    const { counterStore, profileStore } = this.props.store;
    return (
      <div>
        <Profile store={store}/>
    <div>Count:{counterStore.counter}{profileStore.data}</div>
        <div>
          <button onClick={profileStore.getProfileData2}> Count +</button>
          <button onClick={counterStore.decCount}> Count -</button>
          <button onClick={counterStore.resetCount}> Reset</button>
        </div>
      </div>
    );
  }
};

const store = {
  profileStore: new ProfileStore(),
  counterStore: new CounterStore()
}


ReactDOM.render(<StoreProvider value={store}>
  <StoreConsumer>
    {
      (value) => <App store={value} />
    }
  </StoreConsumer>
</StoreProvider>, document.querySelector("#root"));