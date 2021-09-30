import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../../Assets/Logo'
import './Navbar.css'
const Navbar = (props) => {

    const primary = "#808080"
    const active = "#ee5332"
    const ham = "#b980f0"

    const [ showPhoneMenu , setPhoneMenu ] = useState(false)

    console.log(props.active)
    return ( 
        <div className="Navbar">
            <div className="navbar-desktop">
                <div className="logo-nav">
                    {/* <Logo></Logo> */}
                </div>
                <div className="navbar-content">
                <Link to="/" style={{textDecoration:'none'}}> <div className={ props.active === "home" ? "active-navbar-list" : "navbar-list" }style={{color:props.active === "home" ? active : primary}} >Home</div> </Link>
                    <Link to="/admForm" style={{textDecoration:'none'}}>  <div className={ props.active === "profile" ? "active-navbar-list" : "navbar-list" } style={{color:props.active === "profile" ? active : primary}}>Admission form</div> </Link>
                  <Link to="/contact" style={{textDecoration:'none'}}>  <div className={ props.active === "contact" ? "active-navbar-list" : "navbar-list" } style={{color:props.active === "contact" ? active : primary}}>Contact us</div> </Link>
                  <Link to="/syllabus" style={{textDecoration:'none'}}> <div className={ props.active === "academics" ? "active-navbar-list" : "navbar-list" } style={{color:props.active === "academics" ? active : primary}}>Syllabus</div> </Link>
                </div>
            </div>

            <div className="navbar-phone">
                <div className="logo-nav-phone">
                        {/* <Logo></Logo> */}
                    </div>
                </div>

                <div className="hamburger" onClick={() => setPhoneMenu(!showPhoneMenu)}>
                    <div className={ showPhoneMenu ? "animateham" : "hamline" } style={{background:ham}} ></div>
                    <div className={ showPhoneMenu ? "animateham" : "hamline" }  style={{background:ham}}></div>
                    <div className={ showPhoneMenu ? "animateham" : "hamline" }  style={{background:ham}}></div>
                </div>

                    <div className={showPhoneMenu ? "phone-menu" : "hidden-menu" }>
                       { showPhoneMenu ? <div className="phone-menu-content">
                       <Link to="/" style={{textDecoration:'none'}}>     <div className="hamburger-phone-list" style={{color:primary}} >Home</div> </Link>
                       <Link to="/admForm" style={{textDecoration:'none'}}>   <div className="hamburger-phone-list" style={{color:primary}}>Admission form</div> </Link>
                       <Link to="/contact" style={{textDecoration:'none'}}>    <div className="hamburger-phone-list" style={{color:primary}}>Contact us</div>  </Link>
                       <Link to="/syllabus" style={{textDecoration:'none'}}>   <div className="hamburger-phone-list" style={{color:primary}}>Syllabus</div>    </Link>
                           
                        </div> : null }

                 
                        </div> 
                
        </div>
     );
}
 
export default Navbar;