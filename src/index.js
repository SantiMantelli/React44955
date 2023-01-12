import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";
import { CartContextProvider } from "./contexts/CartContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDHikdlpGZg9kYHddfFSAtKVtfQk3vnZx0",
  authDomain: "ecommerce-lc-50884.firebaseapp.com",
  projectId: "ecommerce-lc-50884",
  storageBucket: "ecommerce-lc-50884.appspot.com",
  messagingSenderId: "545215902203",
  appId: "1:545215902203:web:b87d9c52ef00a8c4001b5e"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

reportWebVitals();