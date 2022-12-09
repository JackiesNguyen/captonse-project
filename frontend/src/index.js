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
    <GoogleOAuthProvider clientId="433914861965-8iorcoh56ce6og5as0ksn045u0puf0lf.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </DataProvider>
  // </React.StrictMode>
);
serviceWorker.unregister();
