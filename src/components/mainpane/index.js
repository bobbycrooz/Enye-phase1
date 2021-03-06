import React, { useState, useContext } from "react";
import Styles from "./mainpane.module.css";
import Style from "styled-components";
import { Home } from "../../pages/home";
import profileContext from "../../profileContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const HeadDiv = Style.div`
    background-color:#fff;
    border-radius:20px;
    margin-top:15px;
    display:flex;
    justify-content:space-between;
    padding:10px;
    margin:10px 20px;
    box-shadow:0px 5px 10px -10px #2a313c;
`;

const Mainpane = (props) => {
  const value = useContext(profileContext);
  const [input, setInput] = useState();

  return (
    <div className={Styles.pane__main}>
      <HeadDiv className={Styles.pane__title}>
        <div className={Styles.pane__title_logo}> Patients Dashboard</div>
        <div className={Styles.pane__title_search}>
          <div className={Styles.search__container}>
            <input
              className={Styles.pane__search}
              type="text"
              id="search-item"
              onChange={(e) => {
                return;
                e.preventDefault();
                setInput(e.target.value);
              }}
              placeholder="Search patient by name"
            />
            <button
              type="submit"
              className={Styles.pane__button}
              onClick={props.searchHandler}
            >
              <FontAwesomeIcon
                icon={faSearch}
                size="1x"
                className="search_icon"
              />
            </button>
          </div>
        </div>
      </HeadDiv>
      <Home profile={props.profile} />
    </div>
  );
};

export default Mainpane;
