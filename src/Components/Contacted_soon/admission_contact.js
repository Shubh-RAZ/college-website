import Contact_soon from '../../Assets/contact_soon';
import './admission_contact.css'
const Admission_Contact = () => {
    return ( 
        <div className="admission-contact">
            <div className="admission-contact-content">
                <div className="svg-admission-box">
                    <Contact_soon></Contact_soon>
                </div>
                <div className="contact-query">
                    <div className="message-soon">You Will be Conatcted Soon by our Admission cell</div>
                    <div className="email-query">
                        <div className="email-soon">Drop us email at :</div>
                        <div className="email-soon-detail">enquiry.abscollege@gmail.com</div>
                    </div>
                    <div className="email-query">
                        <div className="email-soon">Make a Call at :</div>
                        <div className="email-soon-detail">8400736325</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Admission_Contact;