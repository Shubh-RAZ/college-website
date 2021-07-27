import Right_arrow from '../../Assets/Right-arrow'
import './Announcements.css'

const announcementData = [ 1 , 2 ,3 ,4 ,5 ]
const Announcement = () => {
    return ( 
        <div className="announcement">
            <div className="announcement-box">
                <div className="announcement-heading-box">
                    <div className="announcement-heading">Result Declaration</div>
                    <div className="announcement-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</div>
                </div>

                <div className="announcement-list-box">

                    { announcementData.map(dat => (
                                 <div className="announcement-list">
                                 <div className="announcement-list-heading">
                                     <div className="announcement-list-title">Result Declaration</div>
                                     <div className="announcement-list-svg">
                                         <Right_arrow></Right_arrow>
                                     </div>
                                 </div>
         
                                 <div className="announcement-list-line"></div>
         
                                 <div className="announcement-list-content">
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                 </div>
                             </div>
                    ))
                    }
           
                </div>
            </div>
        </div>
     );
}
 
export default Announcement;