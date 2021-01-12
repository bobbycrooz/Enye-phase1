import React, { useState, useEffect } from 'react'
import Style from 'styled-components'
import { ProfileCard } from '../components/profilecard'
import Skelecton, {SkeletonTheme} from 'react-loading-skeleton' 
import {Row} from 'react-bootstrap'



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


`
const DangerDiv = Style.div`
padding:15px;
background-color:red;
text-align:center;
`


export const Page = (props) => {
    const APIendoint = 'https://api.enye.tech/v1/challenge/records';

    const [arr, setArr] = useState(true);
    const [profile, setProfile] = useState(false)

    useEffect(()=>{
        getUserData();
},[])

            

         const getUserData = async () => {
             const userData = await fetch(APIendoint)
             const userDataJson = await userData.json();
             const {records} = userDataJson
             setProfile(records.profiles);
     }
     

    return(
        <BodyDiv>
            <Row>
            {
                  profile? profile.map((item,index)=> <ProfileCard name={item.FirstName} lname={item.LastName}/>):<DangerDiv>no data</DangerDiv>
               }
            </Row>
               
        </BodyDiv>
    )
}