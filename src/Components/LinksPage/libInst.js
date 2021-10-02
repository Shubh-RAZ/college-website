import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const LibInst = () => {
    return ( 
        <React.Fragment>
            <div className="container-fluid link-wrapper">
                <div className="row">
                    <Navbar />  
                    <div className="col-12">
                    <p className="lp-head">Library Instructions</p>

                    <p className="lp-desc">1- It is mandatory for the student to bring the identity card with them to get the book from the library. </p>
                    <p className="lp-desc">2- The student cannot keep the book with him/her for more than a week.</p>
                    <p className="lp-desc">3- Students must mark the date of issue and submission of the book on their library card.</p>
                    <p className="lp-desc">4- If the books are kept with him for more than the prescribed time limit, he will have to deposit a fee of one rupee per day per book.</p>
                    <p className="lp-desc">5- In case of loss of the book received from the library, the student will deposit the prescribed price of the book in 6-6- the library with the permission of the principal on the application.</p>
                    <p className="lp-desc">6 - It is mandatory to follow the instructions/orders of the librarian in the library.</p>

                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
     );
}
 
export default LibInst;