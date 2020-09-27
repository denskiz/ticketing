// build client takes a incoming request with headers and build a pre-confired version of axios
import axios from "axios";

// receive a context object that has a key 'req', which contains the request-related properties
export default ({ req }) => {
  // first check what environment we are in: browser or server
  if (typeof window === "undefined") {
    // we are on the server
    return axios.create({
      baseURL: process.env.BASE_URL,
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    // Browsers gonna take care of the headers for us
    return axios.create({
      baseURL: "/",
    });
  }
};
