import './pointwise.css'
import Footer from '../Footer/Footer'
const Library = () => {

    const content = [
        
        'It is mandatory for the student to bring the introduction letter with him/her to receive the book from the library'
        ,
        'If the book is kept with you for more than the prescribed time limit, then certain amount of fees will be charged from you'
        ,
        'It is mandatory to follow the instructions/orders of the library in the library.'
    ]

    console.log(content)
    return ( 
        <div className="whole-link-imp">

        <div className="library">
            <div className="title-hist">Library Instructions</div>
            <div className="pointwise-content">
                {
                content.map( (dt,index) => (
                       <div className="point">
                        <div className="point-number">{index + 1}  </div>
                        <div className="point-content"> {dt}</div>
                   </div>
                ))
                }
             
            </div>
        </div>
               <div className="home-footer">
               <Footer></Footer>
           </div>
              </div>
     );
}
 
export default Library;