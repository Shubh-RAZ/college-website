import News from "../News/News"
import Top_100vh from "../Top-100vh/Top"
import './Homepage.css'

const Homepage = () => {
    return (  
        <div className="Homepage"  >
            <Top_100vh></Top_100vh>
            <News></News>
         
        </div>
    );
}
 
export default Homepage;
