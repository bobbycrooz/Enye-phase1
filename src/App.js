import { useState, useEffect } from "react";
import "./global.css";
import Sidepane from "./components/sidepane";
import Mainpane from "./components/mainpane";
import profileContext from "./profileContext";
const _ = require("lodash");

const App = (props) => {
  const [profile, setProfile] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const APIendoint = "https://api.enye.tech/v1/challenge/records";
    const fetchData = await fetch(APIendoint);
    const fetchedData = await fetchData.json();
    setProfile(fetchedData.records.profiles);
  };

  const toggler = () =>
    showContent ? setShowContent(false) : setShowContent(true);

  const pages = _.chunk(profile, 20);

  const searchHandler = () => {
    const inputValue = document.getElementById("search-item").value;
    const searchResultArr = profile.filter(function (item) {
      return item.FirstName.includes(inputValue);
    });
    console.log(searchResultArr);
    console.log(inputValue);
    console.log(profile);
  };

  return (
    <profileContext.Provider value={{ profile, showContent, toggler, pages }}>
      <div className="main">
        <Mainpane searchHandler={searchHandler} />
      </div>
    </profileContext.Provider>
  );
};
export default App;
