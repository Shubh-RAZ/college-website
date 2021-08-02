import { useState } from 'react'
import Search from '../../Assets/Search'
import './Courses.css'
const Courses = () => {

    const [ search , setSearch ] = useState("")
    

    const courseData = [ 
        {
            name:"Hindi ( Hindi )",
            detail:""
        },
        {
            name:"History ( Prachine itihas )",
            detail:""
        },
        {
            name:"Sociology (Samaj Shastra )",
            detail:""
        },
        {
            name:"Political Science ( Rajnitishstra )",
            detail:""
        },
        {
            name:"Geography ( Bugol )",
            detail:""
        },
        {
            name:"Home Science ( Grahvigyan )",
            detail:""
        },
        {
            name:"Pedagogy ( Shikhshashastra )",
            detail:""
        }
    ]

    const [ fetchedData , setFetchedData ] = useState(courseData) 
    const handleSearch = (e) => {
        setSearch(e.target.value)
        const filter = courseData.filter( dt => {
           return dt.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setFetchedData(filter)
    }

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
                            <input type="text" placeholder="Search Your Desired Course" value={search} onChange={handleSearch} ></input>
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
                            <input type="text" placeholder="Search Your Desired Course" value={search} onChange={handleSearch}></input>
                        </div>
                    </div>
                <div className="course-box">
           {fetchedData.map( dt => (
                       <div className="course-list">
                       <div className="course-img">
                           <img src="./read.png"></img>
                       </div>
                       <div className="course-information">
                           <div>
                               <div className="course-title">{dt.name}</div>
                               <div className="course-desc">
                               Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's s orem Ipsum is s
                               </div>
                           </div>
                       </div>
                   </div>
           ))}
                </div>
            </div>
        </div>
     );
}
 
export default Courses;