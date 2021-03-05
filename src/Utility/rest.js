import axios from "axios";

//const urlbase = "https://api.npoint.io/";

const urlbase = window.location.href + "/specs/";

export async function get(url, config = {}) {
  try {
    const response = await axios.get(urlbase + url);
    return response;
  } catch (error) {
    return null;
  }
}
