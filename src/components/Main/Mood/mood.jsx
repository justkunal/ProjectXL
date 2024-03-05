import React, { useState } from "react";
import Terrible from "../Images/regret.png";
import Sad from "../Images/crying.png";
import Okay from "../Images/okay.png";
import Happy from "../Images/happy.png";
import Excellent from "../Images/excellent.png";
import Navbar from "../Navbar/index";
import Sun from "../Images/sun.png";
import Cloud from "../Images/clouds.png";
import Rainy from "../Images/rainy.png";
import Windy from "../Images/windy.png";
import Snowy from "../Images/snowman.png";
import Family from "../Images/family.png";
import Friends from "../Images/friend.png";
import Beloved from "../Images/beloved.png";
import Travelling from "../Images/travelling.png";
import Stranger from "../Images/stranger.png";
import Party from "../Images/party.png";
import Dating from "../Images/date.png";

import "./mood.css";

const MoodTrackerApp = () => {
  const [mood, setMood] = useState("");
  const [weather, setWeather] = useState("");
  const [activities, setActivities] = useState({
    weather: "",
    social: "",
    notes: "",
  });
  const [showSummary, setShowSummary] = useState(false);

  const handleMoodChange = (selectedMood) => {
    setMood(selectedMood);
  };

  const handleActivityChange = (field, value) => {
    setActivities((prevActivities) => ({
      ...prevActivities,
      [field]: value,
    }));
  };

  const saveActivities = () => {
    // You can save the activities to a database or local storage here
    console.log("Activities saved:", activities);
    setShowSummary(true);
  };

  const handleWeatherChange = (selectedWeather) => {
    setWeather(selectedWeather);
  };

  const handleSocialChange = (selectedSocial) => {
    setActivities((prevActivities) => ({
      ...prevActivities,
      social: selectedSocial,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="mood-tracker-app">
        {mood ? (
          <>
            <h1 className="mood-track">
              <span className="mood-yellow">Mood</span>{" "}
              <span className="tracker-blue">Tracker</span>
            </h1>

            <div className="activity-input">
              <div className="mood-img">{mood}</div>
              <p className="save-mood">What activities make this feeling ?</p>
              <div className="weather-options">
                <p className="sel-wc">Weather</p>

                <div className="weather-btn">
                  <div
                    className="weather-div"
                    onClick={() => handleWeatherChange(<img></img>)}
                  >
                    <img className="weather-img" src={Sun}></img>
                    <div>Sunny</div>
                  </div>

                  <div
                    className="weather-div"
                    onClick={() => handleWeatherChange("Cloudy")}
                  >
                    <img src={Cloud} className="weather-img"></img>
                    <div>Cloudy</div>
                  </div>

                  <div
                    className="weather-div"
                    onClick={() => handleWeatherChange("Rainy")}
                  >
                    <img src={Rainy} className="weather-img"></img>
                    <div>Rainy</div>
                  </div>

                  <div
                    className="weather-div"
                    onClick={() => handleWeatherChange("Windy")}
                  >
                    <img src={Windy} className="weather-img"></img>
                    <div>Windy</div>
                  </div>

                  <div
                    className="weather-div"
                    onClick={() => handleWeatherChange("Snowy")}
                  >
                    <img src={Snowy} className="weather-img"></img>
                    <div>Snowy</div>
                  </div>
                </div>
              </div>
              <div className="weather-options">
                <p className="sel-sa">Social</p>
                <div className="weather-btn">
                  <div
                    className="weather-div"
                    onClick={() => handleSocialChange("Family")}
                  >
                    <img src={Family} className="weather-img"></img>
                    <div>Family</div>
                  </div>

                  <div
                    className="weather-div"
                    onClick={() => handleSocialChange("Friends")}
                  >
                    <img src={Friends} className="weather-img"></img>
                    <div>Friends</div>
                  </div>

                  <div
                    className="weather-div"
                    onClick={() => handleSocialChange("Beloved")}
                  >
                    <img src={Beloved} className="weather-img"></img>
                    <div>Beloved</div>
                  </div>

                  <div
                    className="weather-div"
                    onClick={() => handleSocialChange("Travelling")}
                  >
                    <img src={Travelling} className="weather-img"></img>
                    <div>Travelling</div>
                  </div>

                  <div
                    className="weather-div"
                    onClick={() => handleSocialChange("Socialize")}
                  >
                    <img src={Stranger} className="weather-img"></img>
                    <div>Stranger</div>
                  </div>

                  <div
                    className="weather-div"
                    onClick={() => handleSocialChange("Party")}
                  >
                    <img src={Party} className="weather-img"></img>
                    <div>Party</div>
                  </div>

                  <div
                    className="weather-div"
                    onClick={() => handleSocialChange("Socialize")}
                  >
                    <img src={Dating} className="weather-img"></img>
                    <div>Dating</div>
                  </div>
                </div>
              </div>
              <textarea
                className="add-notes"
                type="text"
                placeholder="Additional notes"
                value={activities.notes}
                onChange={(e) => handleActivityChange("notes", e.target.value)}
              />
            </div>

            <div className="mood-save" onClick={saveActivities}>
              Save
            </div>
          </>
        ) : (
          <>
            <h1 className="mood-track">
              <span className="mood-yellow">Mood</span>{" "}
              <span className="tracker-blue">Tracker</span>
            </h1>
            <p className="sel-mood">Select Your Current Mood :</p>
            <div className="mood-emotions ">
              <button
                className="mood-btn"
                onClick={() =>
                  handleMoodChange(
                    <img className="terrible-img" src={Terrible}></img>
                  )
                }
              >
                <img className="terrible-img" src={Terrible}></img>
                <div>Terrible</div>
              </button>

              <button
                className="mood-btn"
                onClick={() =>
                  handleMoodChange(
                    <img className="terrible-img" src={Sad}></img>
                  )
                }
              >
                <img className="terrible-img" src={Sad}></img>
                <div>Sad</div>
              </button>

              <button
                className="mood-btn"
                onClick={() =>
                  handleMoodChange(
                    <img className="terrible-img" src={Okay}></img>
                  )
                }
              >
                <img className="terrible-img" src={Okay}></img>
                <div>Okay</div>
              </button>
              <button
                className="mood-btn"
                onClick={() =>
                  handleMoodChange(
                    <img className="terrible-img" src={Happy}></img>
                  )
                }
              >
                <img className="terrible-img" src={Happy}></img>
                <div>Good</div>
              </button>

              <button
                className="mood-btn"
                onClick={() =>
                  handleMoodChange(
                    <img className="terrible-img" src={Excellent}></img>
                  )
                }
              >
                <img className="terrible-img" src={Excellent}></img>
                <div>Excellent</div>
              </button>
            </div>
          </>
        )}
        {showSummary && (
          <div className="summary">
            <h2>Summary</h2>
            <p>Mood: {mood}</p>
            <p>Weather: {weather}</p>
            <p>Social Activity: {activities.social}</p>
            <p>Notes: {activities.notes}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MoodTrackerApp;
