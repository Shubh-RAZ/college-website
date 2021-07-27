import React ,  { useState } from 'react';
import './Campus_life.css'
import SwipeableViews from 'react-swipeable-views';
const Campus_life = () => {

    const [ index , setIndex ] = useState(0)
    
    const handleChangeIndex = index => {
        setIndex(index)
    };

    return ( 
        <div className="campus">
                  
                        <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
                        <div className="pagination-campus-img">
                            <img src="./campus1.jpg"></img>
                        </div>
                     
                        <div className="pagination-campus-img">
                            <img src="./campus2.jpg"></img>
                        </div>
                     
                        <div className="pagination-campus-img">
                            <img src="./campus3.jpg"></img>
                        </div>
                     
                      
                        </SwipeableViews>

                        <div className="pagination-campus">
                            <div className={ index === 0 ? "active-campus" : "pagination-option" } onClick={ () => setIndex(0) } >
                                <img src="./campus1.jpg"></img>
                                <div className="gradient-box">
                                    <div className="campus-heading">Study Room</div>
                                </div>
                            </div>
                            <div className={ index === 1 ? "active-campus" : "pagination-option" }  onClick={ () => setIndex(1) }>
                                <img src="./campus2.jpg"></img>
                                <div className="gradient-box">
                                        <div className="campus-heading">Library</div>
                                </div>
                            </div>
                            <div className={ index === 2 ? "active-campus" : "pagination-option" }  onClick={ () => setIndex(2) }>
                                <img src="./campus3.jpg"></img>
                                <div className="gradient-box">
                                    <div className="campus-heading">Class Room</div>
                                </div>
                            </div>
                        </div>
        </div>
     );
}
 
export default Campus_life;