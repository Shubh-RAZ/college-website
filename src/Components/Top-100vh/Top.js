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
                            <div className="pagination-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                        </div>
                     
                        <div className="pagination-content-box">
                            <div className="pagination-heading">Campus</div>
                            <div className="pagination-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                        </div>
                     
                        <div className="pagination-content-box">
                            <div className="pagination-heading">Campus</div>
                            <div className="pagination-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
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