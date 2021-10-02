import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './linkpage.css';


const Facility = () => {
    return ( 
        <React.Fragment>
            <div className="container-fluid link-wrapper">
                <div className="row">
                    <Navbar />
                    <div className="col-12 ">
                    <p className="lp-head">Facilities</p>
                    <p className="lp-desc">1- Professor / Lecturer according to the standard in each subject of the college.</p>
                    <p className="lp-desc">2- Arrangement of improved library and reading room.</p>
                    <p className="lp-desc">3- There is a provision of RO plant for pure drinking water in the college.</p>
                    <p className="lp-desc">4- There is a system of automatic lift in the college</p>
                    <p className="lp-desc">5- Free wifi internet is available in the college.</p>
                    <p className="lp-desc">6- Good arrangement of well equipped, resourceful laboratory for all experimental subjects.</p>
                    <p className="lp-desc">7- Playground and related sports materials are available for all round development of the students.</p>
                    <p className="lp-desc">8- In order to make the students capable according to the physical age, computer education has been arranged in the college.</p>
                    <p className="lp-desc">9- There is a system of educational tours for the students of different subjects.</p>
                    <p className="lp-desc">10- In order to develop the qualities like artistic interest, writing dexterity and leadership of the students, a cultural council has been formed in the college, through which various cultural programs are organized from time to time.</p>

                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
     );
}
 
export default Facility;