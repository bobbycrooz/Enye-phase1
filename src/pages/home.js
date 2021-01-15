import React, { useState, useEffect, useContext } from "react";
import Style from "styled-components";
import { ProfileCard } from "../components/profilecard";
import Skelecton, { SkeletonTheme } from "react-loading-skeleton";
import { Row } from "react-bootstrap";
import { Content } from "./content";
import logo2 from "../asset/illustration/info.svg";
import profileContext from "../profileContext";

const BodyDiv = Style.div`

background-color:#fff;
border-radius:20px;
margin-top:15px;
height:80vh;
padding:10px;
margin:10px 20px;
box-shadow:0px 5px 5px -9px #2a313c;
opacity:0.9;
overflow-x: hidden;
overflow-y: scroll;
display:flex;
justify-content:center;
`;

export const Home = (props) => {
  
  const value = useContext(profileContext)

 



  return (
    <BodyDiv>
      <Row>
        {
          value.showContent?<Content/>:<Welcome/>
        }
      </Row>

    </BodyDiv>
  );
};


const Welcome = ()=>{

  const value = useContext(profileContext)
  return(
    <div className="welcome">
    <div className="welcome__image">
      <img src={logo2} alt="reading docs" />
    </div>
    <div className="welcome__text">
      welcome to the patient record page
    </div>
    <button onClick={value.toggler} className="welcome__button">
      View Profiles
    </button>
  </div>

  )
}

