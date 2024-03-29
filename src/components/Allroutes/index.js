import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Dashboard from "../User-Dash/Dashboard/dashboard";
import Dashbaord2 from "../User-Dash/Dashboard2/dashboard2";
import Session from "../User-Dash/Session/session";
import Community from "../User-Dash/Community/community";
import Community2 from "../User-Dash/Community2/community2";
import Community3 from "../User-Dash/Community3/community3";
import CounsellorDashboard from "../Counsellor-Dash/Dash-counsellor/dashboard";
import CounsellorSession from "../Counsellor-Dash/Session-Counsellor/session";
import SessionClientDetail from "../Counsellor-Dash/Session-Clients-detail/session";
import CounsellorManageCommunity from "../Counsellor-Dash/Counsellor-Manage-Community/community";
import CounsellorCommunity from "../Counsellor-Dash/Counsellor-community/communuty";
import CounsellorCommunityDiscussion from "../Counsellor-Dash/Counsellor-community-discussion/community";
import Profile from "../User-Dash/Profile/profile";
import ProfileSelfAssessment from "../User-Dash/Profile-self-assesment/profile";
import Payment from "../User-Dash/Payment-History/payment";
import Addpayment from "../User-Dash/Payment-add-details/paymentAdd";
import Book from "../Book-Session/book";
import Confirmation from "../Confirmation/confirmation";
import Created from "../Created/created";
import Profilecounsellor from "../Counsellor-Dash/Profile-counsellor/profile";
import PaymentCo from "../Counsellor-Dash/Payment-Counsellor/payment";
import PaymentAddC from "../Counsellor-Dash/Payment-add-details-counsellor/paymentAdd";
import Login from "../Main/Registration/Login/Login";
import Homecontent from "../Main/Home";
import SignUp from "../Main/Registration/SignUp/SignUp";
import Aboutus from "../Main/Aboutus";
import ContactUs from "../Main/Contactus";
import Counsellors from "../Main/Counsellors/Counsellors";
import { AnimatePresence } from "framer-motion";
import Chat from "../User-Dash/Chats/Chats";
import Mood from "../Main/Mood/mood";
import Cookies from "js-cookie";
import axios from "axios";
import Assessment from "../User-Dash/Assessment/assessment";

export default function Allroutes() {
  const location = useLocation();
  const [session, setSession] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    p1: [],
    p2: [],
    p3: [],
    p4: [],
    p5: [],
    p6: [],
    bankDetail: {
      bank_name: "",
      ac_no: "",
      ifsc_code: "",
      branch_name: "",
      upi: "",
      card_no: "",
    },
  });

  useEffect(() => {
    const getSession = async () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://back-zm-01.onrender.com/session/" + Cookies.get("data"),
        headers: {},
      };

      await axios
        .request(config)
        .then((response) => {
          setSession(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const gu = async () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://back-zm-01.onrender.com/users/" + Cookies.get("data"),
        headers: {
          "Content-Type": "application/json",
        },
        //data: data,
      };

      await axios
        .request(config)
        .then((response) => {
          if (response.data.success) {
            //console.log(response.data.data);
            setUser(response.data.data);
          } else {
            //console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (Cookies.get("data") !== undefined) {
      getSession();
      gu();
    }
  }, []);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homecontent />} />
        <Route path="/home" element={<Homecontent />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/counsellors" element={<Counsellors />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path='/' element={<Dashbaord2/>}/> */}
        <Route
          path="/dashboard2"
          element={
            session.length > 0 ? (
              <Dashbaord2 data={[session, user]} />
            ) : (
              <Dashboard data={user} />
            )
          }
        />
        <Route path="/session" element={<Session />} />
        <Route path="/community" element={<Community2 />} />
        <Route path="/community2" element={<Community2 />} />
        <Route path="/community3" element={<Community3 />} />
        <Route path="/dashboard-counsellor" element={<CounsellorDashboard />} />
        <Route path="/session-counsellor" element={<CounsellorSession />} />
        <Route
          path="/session-client-details"
          element={<SessionClientDetail />}
        />
        <Route
          path="/counsellor-manage-community"
          element={<CounsellorManageCommunity />}
        />
        <Route path="/counsellor-community" element={<CounsellorCommunity />} />
        <Route
          path="/counsellor-community-discussion"
          element={<CounsellorCommunityDiscussion />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/profile-self-assessment"
          element={<ProfileSelfAssessment />}
        />
        <Route path="/payment-history" element={<Payment />} />
        <Route path="/add-payment-details" element={<Addpayment />} />
        <Route path="/book-session" element={<Book />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/created" element={<Created />} />
        <Route path="/profile-counsellor" element={<Profilecounsellor />} />
        <Route path="/payment-counsellor" element={<PaymentCo />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route
          path="/add-payment-details-counsellor"
          element={<PaymentAddC />}
        />
      </Routes>
    </AnimatePresence>
  );
}
