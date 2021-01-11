import React from 'react'
import Style from 'styled-components'
import Styles from './profilecard.module.css'




const ProfileDiv = Style.div`
`

export const ProfileCard = (props) => {
    return(
       <div className={Styles.main}>
           Data from jason goes in here
       </div>
    )
}