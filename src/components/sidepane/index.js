import React from 'react'
import Styles from './sidepane.module.css'
import  logo  from "../../asset/illustration/info.svg";
import logo1 from '../../asset/illustration/enye.png'
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
                <img src={logo1} alt='logo'/>
            </span>
           
        <div className={Styles.pane__body}>
            
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