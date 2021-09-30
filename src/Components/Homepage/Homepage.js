import Announcement from "../Announcements/Announcements"
import Campus_life from "../Campus-Life/Campus_life"
import Courses from "../Courses/Courses"
import News from "../News/News"
import Top_100vh from "../Top-100vh/Top"
import './Homepage.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import DirectorsNote from "../DirectorsNote/DirectorsNote"
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Important_Links from "../Important_Links/Important_links"
// import Admission_open from "../../Assets/Admission_open"

const Homepage = () => {

    const [ showHome , setHome ] = useState(false)
    const [ language , setLanguage ] = useState('English')

    return (  
        showHome ?
        <div className="Homepage"  >
            <Navbar active="home"></Navbar>
            <Top_100vh></Top_100vh>
            <DirectorsNote></DirectorsNote>
            <News></News>
            <Important_Links></Important_Links>
            <Courses></Courses>
            {/* <Announcement></Announcement> */}
            {/* <Campus_life></Campus_life> */}
            <div className="home-footer">
                <Footer></Footer>
            </div>
         
        </div>
        : 
        <div className="poster">
            <div className="inside-poster">
                <div className="cancel-btn-poster" onClick={ () => {
                    setHome(true)
                }}>X</div>
                {/* <div className="language">{language}</div> */}
                    <Link to="./admissionenquiry" >
                        <div className="poster-img">
                            <img src="./poster_eng.jpeg"></img>
                            {/* <Admission_open></Admission_open> */}
                        </div> 
                    </Link>
            </div>
        </div>
    );
}
 
export default Homepage;
