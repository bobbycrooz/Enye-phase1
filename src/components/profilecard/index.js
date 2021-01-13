import React from 'react'
import Style from 'styled-components'
import Styles from './profilecard.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Table} from "react-bootstrap"
import logo from '../../asset/illustration/random.svg'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init(
    {
        delay:50,
        duration:500
    }
);



const ProfileDiv = Style.div`
    padding:4px;
    margin:15px 0;
    background-color:#fff;
    color:black;
    border-radius:5px;
    box-shadow: 0 2px 10px -5px black;
    height:300px;
    width:100%;
    position:relative;
    
    

`

export const ProfileCard = (props) => {
    return(
        <Col sm={12} md={6} lg={4} >
        <ProfileDiv>
        
           
           <div className={Styles.Caption}>
                    {props.name} {props.lname}
               </div>
               <div className={Styles.ProImage}>
               <img src={logo} alt="something"/>
              
           </div>
       

       <div className={Styles.body}>



        <div className={Styles.CardTitle}>
            Patient details:
        </div>


       <table className={Styles.Table}>
           <tbody>
               <tr>
                   <th>Gender</th>
                   <td>Male</td>
               </tr>
               <tr>
                   <th>Username</th>
                   <td>Bobby</td>
               </tr>
               <tr>
                   <th>Phone</th>
                   <td>09077726791</td>
               </tr>
               <tr>
                   <th>Email</th>
                   <td>idrisloove@gmail.com</td>
               </tr>

           </tbody>
       </table>


      
       </div>
       
       
       <button class={Styles.btn}>
           view
       </button>
       
       
       
       
           {/* <h2>
           {props.name} {props.lname}
               </h2>  */}
               
            
            
        </ProfileDiv>
        </Col>
    )
}