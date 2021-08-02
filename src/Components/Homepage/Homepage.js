import Announcement from "../Announcements/Announcements"
import Campus_life from "../Campus-Life/Campus_life"
import Courses from "../Courses/Courses"
import News from "../News/News"
import Top_100vh from "../Top-100vh/Top"
import './Homepage.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Homepage = () => {
    return (  
        <div className="Homepage"  >
            <Navbar active="home"></Navbar>
            <Top_100vh></Top_100vh>
            <News></News>
            <Courses></Courses>
            <Announcement></Announcement>
            <Campus_life></Campus_life>
            <div className="home-footer">
                <Footer></Footer>
            </div>
         
        </div>
    );
}
 
export default Homepage;
