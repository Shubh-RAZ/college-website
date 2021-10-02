import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './linkpage.css';

const AdmNorms = () => {
    return ( 
        <React.Fragment>
            <div className="container-fluid link-wrapper">
                <div className="row">
                    <Navbar />
                    <div className="col-12">
                    <p className="lp-head-2">Admission of students in Avadh Bihari Singh College is done after the recommendation of the Admission Committee and the approval of the Disciplinary Officer and the approval of the Principal, in this context some general rules are as follows </p>
                    <p className="lp-desc">1- People of caste, class and community, gender and religion have equal rights for admission in the college.</p>
                    <p className="lp-desc">2- It is mandatory to fill the application form for admission in the college, which can be obtained from the main office of the college.</p>
                    <p className="lp-desc">3- Admission of students and girls interested in science class, commerce class and arts class is on the basis of merit.</p>  
                    <p className="lp-desc">4- The application form of the students desirous of admission has to be filled completely and submitted with necessary information and certificates to the office before the last date.</p>
                    <p className="lp-desc">5- The admission form is scrutinized before the admission committee. In this, if the candidate is found eligible, then his admission is recommended.</p>
                    <p className="lp-desc">6- At the time of admission, if a student has obtained T.C. (migration certificate) does not attach the required form, then after 30 days his admission will be considered canceled.</p>
                    <p className="lp-desc">7- To get the library facility, it will be necessary for the student to take the library card.</p>  
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
     );
}
 
export default AdmNorms;