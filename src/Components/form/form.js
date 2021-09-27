import React, { useState } from 'react'
import adm from './admBck.png'
import './form.css'

const Form = () => {

    const [name, setName] = useState('')
    const [fname, setfName] = useState('')
    const [mname, setmName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [subject, setSubject] = useState('')
    // dob


    const handleChange = (e) => {
        const field = e.currentTarget.name;
        if(field == 'name')setName(e.currentTarget.value)
        if(field == 'fname')setfName(e.currentTarget.value)
        if(field == 'mname')setmName(e.currentTarget.value)
        if(field == 'address')setAddress(e.currentTarget.value)
        if(field == 'phone')setPhone(e.currentTarget.value)
        if(field == 'subject')setSubject(e.currentTarget.value)
        if(field == 'gender')setGender(e.currentTarget.value)
        //dob
    }

    return ( 
        <React.Fragment>
            <div className="container-fluid form-super">
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
                            <input type="text" class="form-control" id="subject_" placeholder="Subject"  onChange={handleChange} name="name"/>
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
                        <button className="btn send-form">Send</button>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Form;