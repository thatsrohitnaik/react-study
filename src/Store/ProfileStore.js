import { action, observable, toJS, computed } from "mobx";
import { get } from "../Utility/rest";
import Storage from "../Utility/localStorage";

const storage = new Storage();

class ProfileStore {
  
  constructor() {
    const profile = storage.getFromLocalStorage("profile") || {};
    profile && (this.profile = profile)
  }
  @observable profile = {};
  @observable loading = false;

  @action getProfile = async () => {
    const response = await get("db.json");
    this.profile = response.data.profile;
    this.loading = true;
    storage.setInLocalStorage("profile", this.profile)
  }
}

export default ProfileStore;
