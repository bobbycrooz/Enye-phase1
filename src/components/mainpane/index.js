import React, { useState } from 'react'
import Styles from './mainpane.module.css'
import Style from 'styled-components'
import {Page} from '../../pages/home'


const HeadDiv = Style.div`
    background-color:#fff;
    border-radius:20px;
    margin-top:15px;
    display:flex;
    justify-content:space-between;
    padding:10px;
    margin:10px 20px;
    box-shadow:0px 5px 10px -10px #2a313c;
   

`


const Mainpane = (props) => {
    const [input, setInput] = useState('')

    return(
        <div className={Styles.pane__main}>
            <HeadDiv className={Styles.pane__title}>
                
                <div className={Styles.pane__title_logo}>Dashboard</div>
                <div className={Styles.pane__title_search}>
                    <div className={Styles.search__container}>
                    <input 
                    className={Styles.pane__search}
                    type="text" 
                    onChange={(e)=> {
                        return 
                        e.preventDefault();
                        setInput(e.target.value)
                    }}
                    placeholder='Search Patient' />
                    <button
                     type="submit"
                     className={Styles.pane__button}
                     >
                        O
                    </button>
                    </div>
                    
                </div>
            </HeadDiv>
            <Page text='an array here'/>
        </div>
        
    )
}

export default Mainpane;