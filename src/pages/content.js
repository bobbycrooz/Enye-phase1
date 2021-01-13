import React, { useState, useEffect } from "react";
import Style from "styled-components";
import { ProfileCard } from "../components/profilecard";
import Skelecton, { SkeletonTheme } from "react-loading-skeleton";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  delay: 50,
  duration: 2000,
});

const BodyDiv = Style.div`

background-color:#fff;
border-radius:20px;
margin-top:15px;
height:80vh;
padding:10px;
margin:10px 20px;
box-shadow:0px 5px 5px -9px #2a313c;
opacity:0.9;

overflow-y: scroll;
display:flex;
justify-content:center;


`;

export const Content = (props) => {
  const APIendoint = "https://api.enye.tech/v1/challenge/records";

  const [profile, setProfile] = useState(false);
  const [pageContent, setPageContent] = useState(profile);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await fetch(APIendoint);
    const userDataJson = await userData.json();
    const { records } = userDataJson;
    setProfile(records.profiles);
  };

  return (
    <>
      {pageContent ? (
        pageContent.map((item, index) => (
          <ProfileCard name={item.FirstName} lname={item.LastName} />
        ))
      ) : (
        <Shima />
      )}
    </>
  );
};

const Shima = () => {
  return <Skelecton height={200} count={4} width={300} className="m-3" />;
};
