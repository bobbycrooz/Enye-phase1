import React, { useState, useEffect, useContext } from "react";
import Style, { StyleSheetManager } from "styled-components";
import { ProfileCard } from "../components/profilecard";
import Skelecton, { SkeletonTheme } from "react-loading-skeleton";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import AOS from "aos";
import "aos/dist/aos.css";
import profileContext from "../profileContext";

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
  const value = useContext(profileContext);

  const [pageContent, setPageContent] = useState(false);

  useEffect(() => {
    setPageContent(value.pages[0]);
  }, [value]);

  const gotoPageHandler = (pageNumber) =>
    setPageContent(value.pages[pageNumber]);

  return (
    <>
      {pageContent ? (
        pageContent.map((item) => (
          <ProfileCard
            name={item.FirstName}
            lname={item.LastName}
            gender={item.Gender}
            uname={item.UserName}
            phone={item.PhoneNumber}
            email={item.Email}
          />
        ))
      ) : (
        <Shima />
      )}

      <div className="pagination">
        {value.pages.map((item, index) => (
          <Pagination
            clickHandler={() => gotoPageHandler(index)}
            pageNum={index}
          />
        ))}

        {}
      </div>
    </>
  );
};

const Shima = () => {
  return <Skelecton height={200} count={4} width={300} className="m-3" />;
};

const Pagination = (props) => {
  // const values = useContext(profileContext);
  return (
    <button className="pages" onClick={props.clickHandler}>
      {props.pageNum + 1}
    </button>
  );
};
