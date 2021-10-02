import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './linkpage.css';


const Guidelines = () => {
    return ( 
        <React.Fragment>
            <div className="container-fluid link-wrapper">
                <div className="row">
                    <Navbar />
                    <div className="col-12">
                        <p className="lp-head">General Guidelines</p>
                        <p className="lp-desc">The college is your own, this school has its own dignity, tradition and belief, protecting them, obeying them, is not only your ultimate duty, it is also religion. With good conduct and good behavior, create such an atmosphere of harmony in the college, so that there is cooperation and guidance from the principal and students, disciplinary officers and students, teachers and students. By accepting the building and property of the college for your welfare, take a pledge to protect and develop it. Any change is possible in the information disseminated by the office. According to the immediate decision of the Principal and the Disciplinary Committee, the rules of the college can be amended, the information of which will be disseminated at the specified time.
                        Pay attention to the information and instructions circulated by the Office of the Disciplinary Officer and the Head Office and also accept that we will cooperate in any rules and regulations of the college. 
                        </p>

                        <p className="lp-head">Request to Parents</p>
                        <p className="lp-desc">The college requests its students and parents to keep getting all the educational information related to their children from the college. College is a social institution, parents and students are its active members, so parents should send their children to college on time and give new direction to college development. The college gives first priority to all the students. There will be no compromise with discipline.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
     );
}
 
export default Guidelines;