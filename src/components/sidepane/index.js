import React, { useContext } from 'react'
import Styles from './sidepane.module.css'
import  logo  from "../../asset/illustration/info.svg";
import logo1 from '../../asset/illustration/enye.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
import profileContext from '../../profileContext';
AOS.init(
    {
        delay:50,
        duration:2000
    }
);

const Sidepane = (props) => {
const value = useContext(profileContext)

    return(
        <div className={Styles.pane__side}>
            <span className={Styles.pane__title}>
                <img
                 src={logo1}
                 alt='logo'
                 onClick={value.toggler}

                />
            </span>
           
        <div className={Styles.pane__body}>
            <select name="Filter" id="filter" className='filter'>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
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