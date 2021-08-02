import Navbar from "../Navbar/Navbar"
import './Profile.css'
const Profile = () => {
    return ( 
        <div className="profile">
            <Navbar active="profile"></Navbar>
            <div className="details-section">
                <div className="personal-detail">
                    <div className="picture-section">
                        <img src="unnamed.jpg" className="profile-picture"></img>
                    </div>

                    <div className="personal-info">
                        <div className="info-row">
                            <div className="info-field">
                                <div className="info-label">Name :</div>
                                <div className="info-content">Shubham Raj</div>
                            </div>

                            <div className="info-field">
                                <div className="info-label">Course :</div>
                                <div className="info-content">BA ( Hindi )</div>
                            </div>
                        </div>

                        <div className="info-row">
                            <div className="info-field">
                                <div className="info-label">Year :</div>
                                <div className="info-content">2019 - 2023</div>
                            </div>

                            <div className="info-field">
                                <div className="info-label">Email :</div>
                                <div className="info-content">ce19b030@iittp.ac.in</div>
                            </div>
                        </div>
                        
                        <div className="info-row">
                            <div className="info-field">
                                <div className="info-label">Phone Number :</div>
                                <div className="info-content">9939622528 , 9430448291</div>
                            </div>

                           
                        </div>

                        <div className="info-row">
                            <div className="info-field">
                                <div className="info-label">Address :</div>
                                <div className="info-content">Kankarbagh pc colony , d 63</div>
                            </div>

                        </div>

                        <div className="info-row">
                            <div className="info-field">
                                <div className="info-label">Roll No :</div>
                                <div className="info-content">CE19B030</div>
                            </div>

                        </div>

                        
                  
                    </div>

                    <div className="horizontal-line">
                        <div className="color-line"></div>
                        <div className="color-line"></div>
                        <div className="color-line"></div>
                    </div>
                </div>

                <div className="family-details">
                    <div className="family-heading">Family Details</div>

                    <div className="info-row">
                            <div className="info-field">
                                <div className="info-label">Father's Name :</div>
                                <div className="info-content">Shubham Raj</div>
                            </div>

                            <div className="info-field">
                                <div className="info-label">Father's Occupation :</div>
                                <div className="info-content">Police</div>
                            </div>
                    </div>

                    <div className="info-row">
                            <div className="info-field">
                                <div className="info-label">Mothers's Name :</div>
                                <div className="info-content">Shubham Raj</div>
                            </div>

                            <div className="info-field">
                                <div className="info-label">Mothers's Occupation :</div>
                                <div className="info-content">Police</div>
                            </div>
                    </div>

                    <div className="info-row">
                            <div className="info-field">
                                <div className="info-label">Phone Number :</div>
                                <div className="info-content">9430448291 , 9939622528</div>
                            </div>

                    </div>
                </div>

                <div className="academic-details">
                    <div className="family-heading">Academic Details</div>

                    <div className="class-row">
                        <div className="class-heading">Class 10 :</div>

                        <div className="info-row">
                            <div className="info-field">
                                <div className="info-label">School Name :</div>
                                <div className="info-content">St Joseph High School</div>
                            </div>

                            <div className="info-field">
                                <div className="info-label">Marks :</div>
                                <div className="info-content">10 CGPA</div>
                            </div>
                    </div>

                        <div className="info-row">
                            <div className="info-field">
                                <div className="info-label">Year Of Passing :</div>
                                <div className="info-content">2018</div>
                            </div>

                            <div className="info-field">
                                <div className="info-label">Boards :</div>
                                <div className="info-content">CBSE</div>
                            </div>
                    </div>

                    </div>

                    <div className="class-row">
                        <div className="class-heading">Class 12 :</div>

                        <div className="info-row">
                            <div className="info-field">
                                <div className="info-label">School Name :</div>
                                <div className="info-content">St Joseph High School</div>
                            </div>

                            <div className="info-field">
                                <div className="info-label">Marks :</div>
                                <div className="info-content">10 CGPA</div>
                            </div>
                    </div>

                        <div className="info-row">
                            <div className="info-field">
                                <div className="info-label">Year Of Passing :</div>
                                <div className="info-content">2018</div>
                            </div>

                            <div className="info-field">
                                <div className="info-label">Boards :</div>
                                <div className="info-content">CBSE</div>
                            </div>
                    </div>

                    </div>
                </div>

                <div className="logout-btn-profile">
                    Logout
                </div>
            </div>
        </div>
     );
}
 
export default Profile;