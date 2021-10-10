import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer } from 'react-toastify'
import '../../../node_modules/react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import adm from './bck.jpg'
import './form.css'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Form = () => {

    const [name, setName] = useState('')
    const [fname, setfName] = useState('')
    const [mname, setmName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [subject, setSubject] = useState('')
    const [dob, setDob] = useState('')


    const handleChange = (e) => {
        const field = e.currentTarget.name;
        if(field == 'name')setName(e.currentTarget.value)
        if(field == 'fname')setfName(e.currentTarget.value)
        if(field == 'mname')setmName(e.currentTarget.value)
        if(field == 'address')setAddress(e.currentTarget.value)
        if(field == 'phone')setPhone(e.currentTarget.value)
        if(field == 'subject')setSubject(e.currentTarget.value)
        if(field == 'gender')setGender(e.currentTarget.value)
        if(field == 'dob')setDob(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name_ : name,
            fname_ : fname,
            mname_ : mname,
            phone_ : phone,
            address_ : address,
            gender_ : gender,
            subject_ : subject,
            dob_ : dob,
        }


        axios.post(' https://college-backend001.herokuapp.com/services/admMail' ,data)
            .then((res) => {
                toast(`you will be contacted soon`);
            })
            .catch((error) => {
                toast(`form failed please try again`);
                console.log(error);
            })
    }

    return ( 
        <React.Fragment>
            <ToastContainer></ToastContainer>
            <div className="container-fluid form-super">
                <Navbar />
                <img src={adm} className="bck-form" />
                <div className="col-12 form-head">Admission Form 2021-22</div>
                <div className="row form_wrapper">    
                    <div className="col-md-6 col-12 form-input-adm">
                        <div class="form-group">
                            <label for="name_">Student's Name</label>
                            <input type="text" class="form-control" id="name_" placeholder="Your name"  onChange={handleChange} name="name"/>
                        </div>
                    </div>

                    <div className="col-md-6 col-12 form-input-adm">
                        <div class="form-group">
                            <label for="fname_">Father's Name</label>
                            <input type="text" class="form-control" id="fname_" placeholder="Father's name"  onChange={handleChange} name="fname"/>
                        </div>
                    </div>

                    <div className="col-md-6 col-12 form-input-adm">
                        <div class="form-group">
                            <label for="mname_">Mother's Name</label>
                            <input type="text" class="form-control" id="mname_" placeholder="Mother's name"  onChange={handleChange} name="mname"/>
                        </div>
                    </div>

                    <div className="col-md-6 col-12 form-input-adm">
                        <div class="form-group">
                            <label for="dob_">Date of birth</label>
                            <input type="date" class="form-control" id="dob_" placeholder="Date of birth"  onChange={handleChange} name="dob"/>
                        </div>
                    </div>

                    <div className="col-md-6 col-12 form-input-adm">
                        <div class="form-group">
                            <label for="gender_">Gender</label>
                            <input type="text" class="form-control" id="gender_" placeholder="Gender"  onChange={handleChange} name="gender"/>
                        </div>
                    </div>

                    <div className="col-md-6 col-12 form-input-adm">
                        <div class="form-group">
                            <label for="subject_">Subject</label>
                            <input type="text" class="form-control" id="subject_" placeholder="Subject"  onChange={handleChange} name="subject"/>
                        </div>
                    </div>

                    <div className="col-md-6 col-12 form-input-adm">
                        <div class="form-group">
                            <label for="phone_">Phone no.</label>
                            <input type="text" class="form-control" id="phone_" placeholder="Phone no."  onChange={handleChange} name="phone"/>
                        </div>
                    </div>

                    <div className="col-md-6 col-12 form-input-adm">
                        <div class="form-group">
                            <label for="address_">Address</label>
                            <input type="text" class="form-control" id="address_" placeholder="Address"  onChange={handleChange} name="address"/>
                        </div>
                    </div>

                    <div className="col-md-6 offset-md-3">
                        <button className="btn send-form" onClick={handleSubmit}>Send</button>
                    </div>

                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}
 
export default Form;