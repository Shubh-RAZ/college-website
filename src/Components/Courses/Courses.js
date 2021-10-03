import { useState } from 'react'
import Search from '../../Assets/Search'
import './Courses.css'
const Courses = () => {

    const [ search , setSearch ] = useState("")
    

    const courseData = [ 
        {
            name:"Hindi ( Hindi )",
            detail:"Hindi or more precisely Modern Standard Hindi is an Indo-Aryan language spoken chiefly in North India. Hindi has been described as a standardised and Sanskritised register of the Hindustani language"
        },
        {
            name:"History ( Prachine itihas )",
            detail:"History is an umbrella term comprising past events as well as the memory, discovery, collection, organization, presentation, and interpretation of these events."
        },
        {
            name:"Sociology (Samaj Shastra )",
            detail:"Sociology is a social science that focuses on society, human social behaviour, patterns of social relationships, social interaction, and aspects of culture associated with everyday life"
        },
        {
            name:"Political Science ( Rajnitishstra )",
            detail:"Political science is the scientific study of politics. It is a social science dealing with systems of governance and power, and the analysis of political activities, political thought, political behavior, and associated constitutions and laws"
        },
        {
            name:"Geography ( Bugol )",
            detail:"Geography is a field of science devoted to the study of the lands, features, inhabitants, and phenomena of the Earth and planets."
        },
        {
            name:"Home Science ( Grahvigyan )",
            detail:"Home science is a vast field where the student can learn about nutrition, resources, home management, hygiene, general health, effective communication skills, ethics, clothing and textile management."
        },
        {
            name:"Pedagogy ( Shikhshashastra )",
            detail:"Pedagogy, most commonly understood as the approach to teaching, is the theory and practice of learning, and how this process influences, and is influenced by, the social, political and psychological development of learners. "
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
                         {dt.detail}
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