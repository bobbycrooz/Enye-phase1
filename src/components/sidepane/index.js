import React from 'react'
import Styles from './sidepane.module.css'
import  logo  from "../../asset/illustration/love.svg";
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init(
    {
        delay:50,
        duration:2000
    }
);

const Sidepane = (props) => {
    return(
        <div className={Styles.pane__side}>
            <span className={Styles.pane__title}>
                Enye Phase 1
            </span>
           
        <div className="side__pane_body">
            <ul>
                <a href="">
                    <li>Dashbboard</li>
                </a>
                <a href="">
                    <li>filter</li>
                </a>
                <a href="">
                    <li>Gender</li>
                </a>
                <a href="">
                    <li>Payment</li>
                </a>
                <a href="">
                    <li>Location</li>
                </a>
            </ul>
        </div>
        <span>
            <img 
             data-aos='fade-right'
            className={Styles.svg__icon} src={logo}
             alt="love"/>
        </span>
        </div>
        
    )
}

export default Sidepane;