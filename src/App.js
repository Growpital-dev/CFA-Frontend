import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard"
import Login from "./component/Login-signup/Login"
import Signup from "./component/Login-signup/Signup"
import Landing from "./component/Landing_Page/Landing";
import FullContactUs from "./component/contactUs/fullContactUs";
import NewInvestment from "./component/new_investment/NewInvestment";
import Profile from "./component/Profile_page/Profile";
import Protected from "./component/Protected/Protected";
import Wallet from "./component/Wallet/Wallet";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Landing />} />

          <Route path="login" element={<Login checkLoggedIn={(bool) => { setIsLoggedIn(bool) }} />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={
            <Protected isLoggedIn={isLoggedIn}>
              <Dashboard />
            </Protected>
          } />
          <Route path="contactUs" element={
            <Protected isLoggedIn={isLoggedIn}>
              <FullContactUs />
            </Protected>} />

          <Route path="newInvestment" element={
            <Protected isLoggedIn={isLoggedIn}>
              <NewInvestment />
            </Protected>
          } />

          <Route path="profile" element={
            <Protected isLoggedIn={isLoggedIn}>
              <Profile />
            </Protected>
          } />
          <Route path="wallet" element={
            <Protected isLoggedIn={isLoggedIn}>
              <Wallet />
            </Protected>
          } />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
