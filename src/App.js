import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard"
import Login from "./component/Login-signup/Login"
import Signup from "./component/Login-signup/Signup"
import Landing from "./component/Landing_Page/Landing";
import FullContactUs from "./component/contactUs/fullContactUs";
import NewInvestment from "./component/new_investment/NewInvestment";
import Profile from "./component/Profile_page/Profile";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Landing />} />

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contactUs" element={<FullContactUs />} />
          <Route path="newInvestment" element={<NewInvestment />} />
          <Route path="profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
