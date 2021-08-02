import { React , useEffect, useState } from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import Books from '../../Assets/Books';

function useMouse() {
    const [ mousePosition , setMousePosition ] = useState({
        x:null,
        y:null,
        movementX:null,
        movementY:null
    })

    useEffect ( () => {

        function handle (e) {
            setMousePosition({
                x:e.pageX,
                y:e.pageY,
                movementX:e.movementX/20,
                movementY:e.movementY/20,
                style:{
                    transform:`translate(${e.movementX} , ${e.movementY})`
                }
            })

        }
        document.addEventListener("mousemove" , handle)
        return () => document.removeEventListener("mousemove" , handle )
    })
    
    return mousePosition
}


function Footer() {

const { x , y , movementX , movementY } = useMouse()

    return (
        <div className="footer-whole">
<div className="svg-books"> 
<Books></Books></div>
<div className="content-footer">
    <div className="footer-inside-cnt" style={{textTransform:'uppercase'}}>
        <div className="row-footer" >
            <div className="footer-list-lg">
            <div className="footer-list">
            <Link to="/" style={{textDecoration:'none' , color:'black'}}>   <div className="cont-foot"> Home</div> </Link>
           
            </div>
            <div className="footer-list">
         <Link to="/about" style={{textDecoration:'none' , color:'black'}}>   <div className="cont-foot" style={{textDecoration:'none' , color:'black'}} > Academics</div> </Link>
         
            </div>
            <div className="footer-list">
            <Link to="/contact" style={{textDecoration:'none' , color:'black'}}>  <div className="cont-foot"> Profile</div> </Link>
            </div>
            </div>
            <div className="footer-list-sm">
                <div className="footer-list">
                <Link to="/" style={{textDecoration:'none' , color:'black'}}>        <div className="cont-foot"> Home</div> </Link>
                </div>
                <div className="footer-list">
                <Link to="/about" style={{textDecoration:'none' , color:'black'}}>       <div className="cont-foot"> Academics</div> </Link>
                </div>
            </div>
        </div>
        <div className="row-footer">
            <div className="footer-list-lg">
                <div className="footer-list">
                <Link to="/projects" style={{textDecoration:'none' , color:'black'}}>      <div className="cont-foot"> Courses</div> </Link>
                    </div>
                <div className="footer-list">
                <Link to="/ethics" style={{textDecoration:'none' , color:'black'}}><div className="cont-foot">Fee Structure</div></Link>
                
                    </div>

                    <div className="footer-list">
                <Link to="/market" style={{textDecoration:'none' , color:'black'}}>
                    <div className="cont-foot"> Facilities</div></Link>
                </div>
        </div>
        <div className="footer-list-sm">
                <div className="footer-list">
                <Link to="/contact" style={{textDecoration:'none' , color:'black'}}>       <div className="cont-foot"> profile</div> </Link>
                </div>
                <div className="footer-list">
                <Link to="/map"  style={{textDecoration:'none' , color:'black'}}>        <div className="cont-foot"> Courses</div> </Link>
                </div>
            </div>
        </div>
        <div className="row-footer">
            <div className="footer-list-lg">

                <div className="footer-list">
                <Link to="/map"  style={{textDecoration:'none' , color:'black'}}>          <div className="cont-foot"> Faculty</div> </Link>
                </div>

                <div className="footer-list">
                <Link to="/offices" style={{textDecoration:'none' , color:'black'}}>
                    <div className="cont-foot"> Admission Procedure</div></Link>
                </div>

             

            </div>

            <div className="footer-list-sm">
                <div className="footer-list">
                <Link to="/projects" style={{textDecoration:'none' , color:'black'}}>         <div className="cont-foot"> Faculty </div> </Link>
                </div>
                <div className="footer-list">
                <Link to="/market" style={{textDecoration:'none' , color:'black'}}>
                    <div className="cont-foot"> Facilities</div></Link>
                </div>
            </div>
        </div>
        <div className="row-footer-sm">
            <div className="footer-list">
            <Link to="/ethics" style={{textDecoration:'none' , color:'black'}}><div className="cont-foot"> Fee Structure</div></Link>
                    
            </div>
            <div className="footer-list">
            <Link to="/offices" style={{textDecoration:'none' , color:'black'}}>
                    <div className="cont-foot"> Admission Procedure</div></Link>
            </div>
        </div>
     
        </div>
</div>

            
        </div>
    );
}

export default Footer;
