import { action, observable, toJS, computed } from "mobx";
import { get } from "../Utility/rest";

class ProfileStore {
  @observable profile = {};
  @observable loading = "false";

  @action getProfile = async() => {
    const response = await get("db.json");
    this.profile = response.data.profile;
    this.loading = "true";
    console.log(this.loading);
  }
}

export default ProfileStore;
