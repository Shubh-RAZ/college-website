import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './linkpage.css';

const Rules = () => {
    return ( 
        <React.Fragment>
            <div className="container-fluid link-wrapper">
                <div className="row">
                    <Navbar />
                    <div className="col-12 ">
                        <p className="lp-head">DISCIPLINARY RULES</p>
                        <p className="lp-desc">1- Admission of students and girl students in the college is final, if any irregularity is being done by them, then admission can be canceled by the Admission Committee, Principal, Chief Disciplinary Officer.</p>
                        <p className="lp-desc">2- The college can cancel the enrollment of any student without any reason under special circumstances. Any complaint against it will be rejected.</p>
                        <p className="lp-desc">3- Every student of the college will fully cooperate with the college administration in the disciplinary system and such act will not be done by him inside and outside the college, which will tarnish the name of the college.</p>
                        <p className="lp-desc">4- It will be mandatory for the students to carry the identity card with them in the college premises.</p>
                        <p className="lp-desc">5- Students will have to pay special attention to cleanliness in the college premises.</p>
                        <p className="lp-desc">6- If the identity card is canceled or lost, the duplicate can be obtained by paying the fee.</p>
                        <p className="lp-desc">7- The character certificate of the students will be given by the Disciplinary Officer.</p>
                        <p className="lp-desc">8- If indiscipline is committed by the students in the college, then the appropriate criminal procedure will be adopted by the Chief Disciplinary Officer and the Disciplinary Committee.</p>
                        <p className="lp-desc">9- The rules and fee procedure set by the college will be effective on all the students simultaneously.</p>
                        <p className="lp-desc">10- It will be mandatory for every student to take library card for library facility.</p>
                        <p className="lp-desc">11- The use of mobile in the college campus by any student in the college is strictly prohibited.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
     );
}
 
export default Rules;