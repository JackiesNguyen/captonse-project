import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import DataProvider from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <DataProvider>
    <GoogleOAuthProvider clientId="925184802532-31vhd468q1hu2v4l0ls4juj8v3m56hec.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </DataProvider>
  // </React.StrictMode>
);
serviceWorker.unregister();
