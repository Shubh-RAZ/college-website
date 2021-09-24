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
                            <div className="pagination-heading">Campus</div>
                            <div className="pagination-content">We give priority to the great ideas coming from all sides, I am with 'Awadh Vihar'.I welcome you to the College of Karmanparu, Ballia. It is an organization that deals with high standards and will meet all the standards.This teaching institute with its concern for quality teaching as well as for all round development of students. </div>
                        </div>
                     
                        <div className="pagination-content-box">
                            <div className="pagination-heading">Campus</div>
                            <div className="pagination-content">Situated in a lush green, unspoiled, sunny environment, this college has a well-equipped, qualified, experienced lecturer and well-equipped laboratory in our organization. It is equipped
                            with computer and playing facilities with huge study and internet facility. The vehicle will be given.
                            We will provide a platform to the students to achieve not only education but also co-workers and
                            excellence in education. </div>
                        </div>
                     
                        <div className="pagination-content-box">
                            <div className="pagination-heading">Campus</div>
                            <div className="pagination-content"> We invite everyone open to new ideas and suggestions that can connect students and students in
our college on an £-based basis. I welcome young students and wish them success as a responsible
and valuable citizen. I can't believe that if you stay and study in our college, it's always worth the
money for you. </div>
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