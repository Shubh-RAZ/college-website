import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './linkpage.css';


const DirectorNote = () => {
    return ( 
        <React.Fragment>
            <div className="container-fluid link-wrapper">
                <div className="row">
                    <Navbar />  
                    <div className="col-12 ">
                    <p className="lp-head">Director's Note</p>

                    <p className="lp-desc">Awadh Bihari Singh Mahavidyalaya Karmanpur is continuously committed in establishing its identity in the field of higher education as a result of the determination of the good men with the determination to establish high ideals. The present form of this educational institution would not have been possible without the sensitive participation of the management, the meaningful cooperation of the efficient professors/professionals and non-teaching staff and commitment to the responsibility. This educational institution will prove to be successful in fulfilling the needs of higher education of the students of this backward and economically disadvantaged regional area deprived of higher education. The concept of the establishment of this educational institution is the result of the sincerity of the good men and their responsibility towards the society. Which could not have been embodied without the cooperation of the education conscious, enlightened parents of the region. This educational institution, which is progressing progressively in literary, cultural and educational field, will continue to conduct many types of programs, including seminars, rovers / rangers, women safety week, rangoli competition, henna competition, general-science competition, birth anniversary of great men and time- Subject wise guest lectures etc. will continue to be conducted on time. The basic objective of the educational institution cannot be fulfilled without preparing the aspiring students of higher education morally, socially, morally, culturally and educationally through quality education. Come on! Let us all dedicate our everything together for the attainment of great dreams. The college family would like to assure all of you that we will prepare your children intellectually, physically and spiritually and dedicate them to the nation as an educated, civilized and skilled citizen. With best wishes to you...</p>

                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
     );
}
 
export default DirectorNote;