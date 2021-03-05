import { action, observable, toJS } from "mobx";
import axios from "axios";

class ProfileStore {

   @observable profiledata = null;
   @observable data = "hh";

   @action getProfileData2 = async (id) => {
    try {
      const response = await axios.get('http://localhost:3000/profile/');
      this.profiledata = response.data;
      toJS(this.profiledata);
      this.data = "true";
    } catch (error) {
      console.error(error);
    }
    debugger;
    console.log(toJS(this.profiledata))
    return toJS(this.profiledata);
  }

@action async getProfileData() {
    try {
      const response = await axios.get('http://localhost:3000/profile/')
      this.profiledata = response.data
      this.data = "true";
    } catch (error) {

    }
  }

   @action.bound
   getProfileData2(){
    let data = null;
    axios.get('http://localhost:3000/profile/', {
        params: {
          ID: 12345
        }
      })
      .then( function() {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });  
   }
}

export default ProfileStore;