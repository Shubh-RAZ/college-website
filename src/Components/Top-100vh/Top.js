import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Comma_bottom from '../../Assets/comma-bottom'
import Comma_top from '../../Assets/comma-top'
import './Top.css'
const Top_100vh = () => {

    const [ index , setIndex ] = useState(0)
    
    const handleChangeIndex = index => {
        setIndex(index)
    };


    return (  
        <div className="Top-100vh">
            <div className="top-content">
                <div className="left-content">
                    <div>
                    <div className="slogan-top">
                        <div className="top-comma-svg">
                            <Comma_top></Comma_top>
                        </div>
                        <div className="slogan-ln-1">
                            We educate 
                        </div>
                        <div className="slogan-ln-1">
                            With care 
                        </div>
                        <div className="bottom-comma-svg">
                            <Comma_bottom></Comma_bottom>
                        </div>
                    </div>

                    <div className="slide-content">
                        {/* <Tabs value={index} fullWidth onChange={this.handleChange} style={styles.tabs}>
                            <Tab label="tab n°1" />
                            <Tab label="tab n°2" />
                            <Tab label="tab n°3" />
                        </Tabs> */}
                        <div className="pagination-top">
                            <div className={ index === 0 ? "active-index" : "pagination-list" } onClick={ () => setIndex(0) } ></div>
                            <div className={ index === 1 ? "active-index" : "pagination-list" }  onClick={ () => setIndex(1) }></div>
                            <div className={ index === 2 ? "active-index" : "pagination-list" }  onClick={ () => setIndex(2) }></div>
                        </div>
                        <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
                        <div className="pagination-content-box">
                            <div className="pagination-heading">Our Purpose</div>
                            <div className="pagination-content">    Avadh Bihar College Karmanpur with its high ideal gives assurance to meet the common standard of excellence in order to make a mark in the academic world. It is then to make a separate identity in this region through the  ( teaching system )
and experienced teacher. And in order to maintain that trust, we have to work day and night. </div>
                        </div>
                     
                        <div className="pagination-content-box">
                            <div className="pagination-heading">Our Purpose</div>
                            <div className="pagination-content">But
one day the result of this effort is found in the form of people's unbelief, people's faith. There is a
parallel. The constant interaction with the worthy concomitant thoughts and positive thinking will
intensify and raise the flag of the money that people in this area look at this organization with
great respect and respect. </div>
                        </div>
                     
                        <div className="pagination-content-box">
                            <div className="pagination-heading">Our Purpose</div>
                            <div className="pagination-content"> . Upcoming newcomer students want to attract students in upcoming
future with best means of sports , best system of reading , learning lessons , their students and their
students' appreciation from other students Will create a level of trust from the root . We are here to fulfill
their faith.  </div>
                        </div>
                     
                        </SwipeableViews>
                    </div>
                    </div>
                </div>

                <div className="right-content">
                    <img className="right-img" src="./girl.png"></img>
                </div>
            </div>
        </div>
    );
}
 
export default Top_100vh;