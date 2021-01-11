import React, { useState } from 'react'
import Style from 'styled-components'
import { ProfileCard } from '../components/profilecard'
import Skelecton, {SkeletonTheme} from 'react-loading-skeleton' 




const BodyDiv = Style.div`
background-color:#fff;
border-radius:20px;
margin-top:15px;
height:80vh;
padding:10px;
margin:10px 20px;
box-shadow:0px 5px 5px -9px #2a313c;
opacity:0.7;
overflow-x: scroll;
overflow-y: scroll;
display:flex;
flex-direction:column;
justify-content:center;

`
const DangerDiv = Style.div`
padding:15px;
background-color:red;
text-align:center;
`


export const Page = (props) => {
    const [arr, setArr] = useState(false);
     
    return(
        <BodyDiv>
          
           
{/*           
           {
                   
                   arr?arr.map((item,index)=><ProfileCard/>): <DangerDiv><h1>No data yet</h1></DangerDiv>

                   
               
           } */}


           <SkeletonTheme color='green' highlightColor='red'>
           <Skelecton  duration={5} count={10} height={200} />

           </SkeletonTheme>

                
            </BodyDiv>
    )
}