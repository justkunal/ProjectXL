import React, { useEffect, useState } from "react";
import axios from "axios";
import "./session.css";

import Profile from "../images/user-profile.png";
import DashboardIcon from "../images/session-w.png";
import ProfileIcon from "../images/profile-icon.png";
import SessionIcon from "../images/dash-b.png";
import ChatbotIcon from "../images/chat-icon.png";
import CommunityIcon from "../images/community-icon.png";
import PackageIcon from "../images/package-icon.png";
import PaymentIcon from "../images/payment-icon.png";
import DownbarIcon from "../images/downbar.png";
import Counsellor1 from "../images/counsellor1.png";
import Counsellor2 from "../images/counsellor2.png";
import timeIcon from "../images/time.png";
import CalenderIcon from "../images/calender.png";

import Minicalender from "../images/minicalender.png";
import CancelIcon from "../images/cancel.png";
import RightbarIcon from "../images/right-bar.png";
import LeftbarIcon from "../images/left-bar.png";
// import SearchBarIcon from "../images/search.png";
import PrevSessionImg from "../images/prev-session-img.png";
import RecomProfile1 from "../images/recom-profile-1.png";
import RecomProfile2 from "../images/recom-profile-2.png";
import RecomProfile3 from "../images/recom-profile-3.png";
import Star from "../images/star.png";
import SpecIcon from "../images/spec.png";
import TickIcon from "../images/tick.png";
import MiniProfile from "../images/mb-profile.png";
import MbUp from "../images/mb-up.png";
import MbDown from "../images/mb-down.png";
import RightCounBanner from "../images/counsellor-right-banner.png";
import LeftCounBanner from "../images/counsellor-left-banner.png";
import Navbar from "../Navbar/navbar";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Session = () => {
  const [clist, setClist] = useState([]);
  const [dlist, setDlist] = useState([]);

  useEffect(() => {
    //console.log(Cookies.get("data"))

    const getClist = async () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://back-zm-01.onrender.com/session/" + Cookies.get("data"),
        headers: {},
      };

      await axios
        .request(config)
        .then((response) => {
          console.log(response.data);
          setClist(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const getDoc = async (id) => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://back-zm-01.onrender.com/doc/",
        headers: {},
      };

      await axios
        .request(config)
        .then((response) => {
          if (response.data.success) {
            console.log(response.data);
            setDlist(response.data.data);
          } else {
            setDlist([{ name: "Councellor Name" }]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getClist();
    getDoc();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="dashboard-main">
        <div className="dashboard-left">
          <div className="dashboard-profile">
            <img src={Profile} alt="Profile" />
            <div className="dash-profile-name">Martin Stanton</div>
          </div>

          <div className="admin-options">
            <a href="/dashboard2" className="admin-list">
              <img src={SessionIcon} alt="Session" />
              <div>Dashboard</div>
            </a>
            <a href="/profile" className="admin-list">
              <img src={ProfileIcon} alt="Profile" />
              <div>Profile</div>
            </a>

            <div className="admin-list-dashboard">
              <a href="/session" className="admin-list-cont">
                <img src={DashboardIcon} alt="Dashboard" />
                <div>Session</div>
              </a>
            </div>
            <a href="/chat" className="admin-list">
              <img src={ChatbotIcon} alt="Chatbot" />
              <div>Chatbot</div>
            </a>
            <a href="/community" className="admin-list">
              <img src={CommunityIcon} alt="Community" />
              <div>Community</div>
            </a>
            <a className="admin-list">
              <img src={PackageIcon} alt="Package Details" />
              <div>Package Details</div>
            </a>
            <a href="/payment-history" className="admin-list">
              <img src={PaymentIcon} alt="Payment History" />
              <div>Payment History</div>
            </a>
          </div>
        </div>

        <div className="dashboard-right">
          <div className="dashboard-right-container">
            <div className="session-starter session-starter-mb">
              <div className="session-starter-h">Session Details</div>
              <div className="session-starter-p">Session</div>
            </div>

            <div className="upcoming-event">
              <div className="upcoming-event-h">Up coming's events</div>
              <div className="today-box">
                <div className="today-box-h">Today</div>
                <img src={DownbarIcon}></img>
              </div>
            </div>

            <div className="upcoming-session-mb">
              <div className="upcoming-session-mb-p">Upcoming Events</div>
              <div className="upcoming-session-box-mb-flex">
                <div className="upcoming-session-mb-date">01/09 - 30/09</div>
                <img src={CalenderIcon}></img>
              </div>
            </div>

            <div className="dash-counsellor-flex">
              {clist.map((us) => {
                if (clist.length > 2) {
                  if (clist.indexOf(us) >= clist.length - 3) {
                    return (
                      <>
                        <div className="dash-counsellor-dash2">
                          <div className="dash-counsellor-left">
                            <div className="counsellor-main">
                              <div className="counsellor-details">
                                <img src={Counsellor1}></img>
                                <div className="counsellor-info">
                                  <div className="counsellor-name-dash2">
                                    {dlist[
                                      dlist.findIndex(
                                        (item) => item._id === us.docId
                                      )
                                    ].name ?? ""}
                                  </div>
                                  <div className="anx-dp-dash2">{us.title}</div>
                                </div>
                              </div>
                              <div className="counsellor-schedule">
                                <div className="schedule-date">
                                  <img src={Minicalender}></img>
                                  <div className="schedule-date-t-dash2">
                                    {us.date}
                                  </div>
                                </div>
                                <div className="schedule-date">
                                  <img src={timeIcon}></img>
                                  <div className="schedule-date-t-dash2">
                                    {us.time}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="schedule-cancel-dash2">
                              <img src={CancelIcon}></img>
                              <div>Cancel the session</div>
                            </div>
                          </div>

                          <div className="join-reschedule-dash2">
                            <div className="join-btn-dash2">Join Now</div>
                            <div className="reschedule-dash2">Reschedule</div>
                            <div className="cancel-dash">Cancel</div>
                          </div>
                        </div>
                      </>
                    );
                  }
                } else {
                  //console.log(dlist)
                  //console.log(dlist.findIndex(item => item._id == us.docId))
                  return (
                    <>
                      <div className="dash-counsellor-dash2">
                        <div className="dash-counsellor-left">
                          <div className="counsellor-main">
                            <div className="counsellor-details">
                              <img src={Counsellor1}></img>
                              <div className="counsellor-info">
                                <div className="counsellor-name-dash2">
                                  {dlist[
                                    dlist.findIndex(
                                      (item) => item._id === us.docId
                                    )
                                  ].name ?? ""}
                                </div>
                                <div className="anx-dp-dash2">{us.title}</div>
                              </div>
                            </div>
                            <div className="counsellor-schedule">
                              <div className="schedule-date">
                                <img src={Minicalender}></img>
                                <div className="schedule-date-t-dash2">
                                  {us.date}
                                </div>
                              </div>
                              <div className="schedule-date">
                                <img src={timeIcon}></img>
                                <div className="schedule-date-t-dash2">
                                  {us.time}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="schedule-cancel-dash2">
                            <img src={CancelIcon}></img>
                            <div>Cancel the session</div>
                          </div>
                        </div>

                        <div className="join-reschedule-dash2">
                          <div className="join-btn-dash2">Join Now</div>
                          <div className="reschedule-dash2">Reschedule</div>
                          <div className="cancel-dash">Cancel</div>
                        </div>
                      </div>
                    </>
                  );
                }
              })}
            </div>

            <div className="question-container">
              <div className="question-container-h">
                All your Question about therapy{" "}
              </div>
              <div className="questions-flex">
                <img src={LeftbarIcon}></img>
                <div className="questions-box">
                  <div className="questions-box-h">
                    Why should I talk to a therapist?
                  </div>
                  <div className="questions-box-h questions-box-h-p">
                    How do I find the right therapist?
                  </div>
                  <div className="questions-box-h">
                    What happens in the first therapy?
                  </div>
                </div>
                <img src={RightbarIcon}></img>
              </div>
            </div>

            <div className="prev-session">Previous Sessions</div>

            <div className="session-filter">
              <div className="session-filter-date">
                <div className="session-filter-dates">
                  <div>Select date</div>
                  <img src={Minicalender}></img>
                </div>
                <div className="session-filter-dates">
                  <div>Select a slot</div>
                  <img src={DownbarIcon}></img>
                </div>
              </div>
              <div className="session-nav-search">
                <input
                  type="search"
                  placeholder="Search by name..."
                  className="session-search-input"
                />
                {/* <img className="session-search-img" src={SearchBarIcon}></img> */}
              </div>
            </div>

            <div className="previous-session">
              {clist.map((se) => {
                if (clist.indexOf(se) % 2 === 0) {
                  return (
                    <>
                      <div className="prev-session-padding">
                        <div className="previos-session-container">
                          <div className="prev-session-flex">
                            <img src={PrevSessionImg}></img>
                            <div className="prev-session-counsellor">
                              <div className="prev-session-counsellor-name">
                                {dlist[
                                  dlist.findIndex(
                                    (item) => item._id === se.docId
                                  )
                                ].name ?? ""}
                              </div>
                              <div className="prev-session-counsellor-topic">
                                {se.title}
                              </div>
                            </div>
                          </div>

                          <div className="prev-session-time">
                            {se.time} , {se.date}
                          </div>

                          <div className="prev-session-options">
                            <div>Prescription</div>
                            <div>Feedbacks</div>
                            <div>Session Notes</div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div className="prev-session-padding prev-session-padding-gray">
                        <div className="previos-session-container">
                          <div className="prev-session-flex">
                            <img src={PrevSessionImg}></img>
                            <div className="prev-session-counsellor">
                              <div className="prev-session-counsellor-name">
                                {dlist[
                                  dlist.findIndex(
                                    (item) => item._id === se.docId
                                  )
                                ].name ?? ""}
                              </div>
                              <div className="prev-session-counsellor-topic">
                                Topic
                              </div>
                            </div>
                          </div>

                          <div className="prev-session-time">
                            29 Feb 2024 7:30 - 8:30 PM
                          </div>

                          <div className="prev-session-options">
                            <div>Prescription</div>
                            <div>Feedbacks</div>
                            <div>Session Notes</div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }
              })}
            </div>

            <div className="prev-session-mb prev-session-mb-1">
              {clist.map((se) => {
                return (
                  <>
                    <div className="mb-prev">
                      <div className="mb-prev-rl">
                        <div className="mb-profile">
                          <img src={MiniProfile}></img>
                          <div className="mb-profile-cont">
                            <div className="mb-profile-cont-u">
                              {dlist[
                                dlist.findIndex((item) => item._id === se.docId)
                              ].name ?? ""}
                            </div>
                            <div className="mb-profile-cont-l">{se.title}</div>
                          </div>
                        </div>
                        <img src={MbDown}></img>
                      </div>
                      <div className="mb-more">
                        <div className="mb-more-u">
                          {" "}
                          {se.date} {se.time}
                        </div>
                        <div className="mb-more-l">
                          <div>Prescription</div>
                          <div>Feedbacks</div>
                          <div>Session Notes</div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="view-more-container">
              <div className="view-more">View More</div>
            </div>

            <div className="recommended-counsellor">
              <div className="recommended-counsellor-h">
                Recommended Counsellor
              </div>

              <div className="recommended-filter">
                <div className="recommended-filter-cont">
                  <div className="recommended-filter-h">Available Date</div>
                  <div className="recommended-filter-h">
                    <div className="recommended-text">Select a Slot</div>
                    <img src={DownbarIcon}></img>
                  </div>

                  <div className="recommended-filter-h">
                    <div className="recommended-text">Specialization</div>
                    <img src={DownbarIcon} alt="Down Icon" />
                  </div>

                  <div className="recommended-filter-h">
                    <div className="recommended-text">language</div>
                    <img src={DownbarIcon}></img>
                  </div>
                </div>
                <div className="session-nav-search">
                  <input
                    type="search"
                    placeholder="Search by name..."
                    className="session-search-input"
                  />
                  {/* <img className="session-search-img" src={SearchBarIcon}></img> */}
                </div>
              </div>
            </div>

            <div className="recom-profile-container">
              {dlist.map((d) => {
                return (
                  <>
                    <div className="Recom-Profile">
                      <div className="recom-profile-upper">
                        <div className="recom-counsellor-profile">
                          <img src={RecomProfile1}></img>
                          <div>
                            <div className="recom-profile-name">
                              {d.name ?? ""}
                            </div>
                            <div className="recom-profile-desc">
                              PHD, MSc. in Applies Psychology (RCI Licensed)
                            </div>
                            <img src={Star}></img>
                          </div>
                        </div>
                        <div className="recom-profile-l">
                          <div className="recom-view">View Profile</div>
                          <Link to="/book-session" className="recom-book">
                            Book Session
                          </Link>
                        </div>
                      </div>

                      <div className="counsellor-spec-cont">
                        <div className="counsellor-spec">
                          <img className="spec-icon" src={SpecIcon}></img>
                          <div className="counsellor-spec-h">
                            Specialization :
                          </div>
                          <div className="counsellor-spec-p">
                            {d.about ?? ""} <span>Show More..</span>
                          </div>
                        </div>

                        <div className="counsellor-spec">
                          <img className="tick-icon" src={TickIcon}></img>
                          <div className="counsellor-spec-h">
                            Available Slots :
                          </div>
                          <div className="counsellor-spec-p1">custom slots</div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="mb-recom-cont">
              {dlist.map((d) => {
                return (
                  <>
                    <div className="mb-recom">
                      <div className="mb-recom-profile">
                        <img src={MiniProfile}></img>
                        <div className="mb-recom-pro">
                          <div className="mb-recom-pro-u">{d.name ?? ""}</div>
                          <div className="mb-recom-pro-l">{d.about ?? ""}</div>
                        </div>
                      </div>
                      <div className="mb-recom-btn">Book</div>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="view-more-container">
              <div className="view-more">View More</div>
            </div>

            <div className="dash-counsellor-banner-mb dash-counsellor-banner-mb-se">
              <img
                className="dash-counsellor-banner-mb-imgl"
                src={LeftCounBanner}
              ></img>
              <div className="dash-counsellor-banner-mb-u">
                <img
                  className="dash-counsellor-banner-mb-imgr"
                  src={RightCounBanner}
                ></img>
                <div className="dash-counsellor-banner-mb-cont">
                  <div className="dash-counsellor-banner-mb-cont-p">
                    Assess Yourself with Assesment
                  </div>
                  <div className="dash-counsellor-banner-mb-cont-btn">
                    Take Assessment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Session;
