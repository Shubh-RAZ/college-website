import Search from '../../Assets/Search'
import './Courses.css'
const Courses = () => {
    return ( 
        <div className="courses">
            <div className="intercourse-left">
                <div>
                    <div className="course-head-1">Our</div>
                    <div className="course-head-2">Courses</div>
                    <div className="course-search">
                        <div className="search-svg">
                            <Search></Search>
                        </div>
                        <div className="search-course-input">
                            <input type="text" placeholder="Search Your Desired Course"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intercourse-right">
                <div className="course-heading-right">Our Courses</div>
            <div className="course-search-right">
                        <div className="search-svg">
                            <Search></Search>
                        </div>
                        <div className="search-course-input">
                            <input type="text" placeholder="Search Your Desired Course"></input>
                        </div>
                    </div>
                <div className="course-box">
           
                    <div className="course-list">
                        <div className="course-img">
                            <img src="./cs.jpg"></img>
                        </div>
                        <div className="course-information">
                            <div>
                                <div className="course-title">Computer Science Engineering</div>
                                <div className="course-desc">
                                Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's s orem Ipsum is s
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="course-list">
                        <div className="course-img">
                            <img src="./cs.jpg"></img>
                        </div>
                        <div className="course-information">
                            <div>
                                <div className="course-title">Computer Science Engineering</div>
                                <div className="course-desc">
                                Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's s orem Ipsum is s
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="course-list">
                        <div className="course-img">
                            <img src="./cs.jpg"></img>
                        </div>
                        <div className="course-information">
                            <div>
                                <div className="course-title">Computer Science Engineering</div>
                                <div className="course-desc">
                                Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's s orem Ipsum is s
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="course-list">
                        <div className="course-img">
                            <img src="./cs.jpg"></img>
                        </div>
                        <div className="course-information">
                            <div>
                                <div className="course-title">Computer Science Engineering</div>
                                <div className="course-desc">
                                Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's s orem Ipsum is s
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Courses;