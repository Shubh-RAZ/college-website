import { useState } from "react/cjs/react.development";
import './Important_link.css'
import { Link } from "react-router-dom";

import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';


const Important_Links = () => {

    
    const [ notificationArray  , setNotificationArray ] = useState(
        [
            {
                title:'College 1',
                link:'www.google.com'
            },
            {
                title:'College 2',
                link:'www.youtube.com'
            },
            {
                title:'College 3',
                link:'www.yahoo.com'
            },
            {
                title:'College 4',
                link:'www.yahoo.com'
            },
            {
                title:'College 5',
                link:'www.google.com'
            },
            {
                title:'College 6',
                link:'www.youtube.com'
            },
            {
                title:'College 7',
                link:'www.yahoo.com'
            },
            {
                title:'College 8',
                link:'www.yahoo.com'
            },
    
            {
                title:'College 9',
                link:'www.yahoo.com'
            },
    

        ]
    )

const EnhancedSwipeableViews = bindKeyboard(autoPlay(virtualize(SwipeableViews)));
console.log(notificationArray.length)
const calc = notificationArray.length/4
const calcsm = notificationArray.length/3
const calcxs = notificationArray.length/2
var size 
var sizesm 
var sizexs 
if(calc.isInteger){
    size = calc
}
else{
    size= parseInt(calc+1)
}

// console.log('calcsm', calcsm)
if(calcsm === parseInt(calcsm, 10)){
    console.log('yes')
    sizesm = calcsm
}
else{
    sizesm = parseInt(calcsm+1)
    
}

if( calcxs === parseInt(calcxs, 10)){
    sizexs = calcxs
}
else{
    sizexs = parseInt(calcxs+1)
}

function slideRenderer(params) {
  const { index, key } = params;
  var slicedArray
//   console.log(size)
  if(index === size - 1){
    slicedArray = notificationArray.slice(index*4,notificationArray.length)
  }
  else{

  if(index===0){
    slicedArray = notificationArray.slice(index*3,index*3+4)
 
  }else{
    slicedArray = notificationArray.slice(index*3+1,index*3+5)

  }
}

  return (
           <div className="important_links" key={key}>
            {
                slicedArray.map(dt => (
                    <div className="link-box">
                    <Link style={{textDecoration:'none',color:'black'}}to={dt.link}> {dt.title}</Link>
                </div>
    ))
            }
   
            </div>

  );
}

function slideRenderer2(params) {
    const { index, key } = params;
    var slicedArraysm
    // console.log(sizesm)
    if(index === sizesm - 1){
      slicedArraysm = notificationArray.slice(index*3,notificationArray.length)
    }
    else{
  
    if(index===0){
      slicedArraysm = notificationArray.slice(index*3,index*3+3)
   
    }else{
      slicedArraysm = notificationArray.slice(index*3,index*3+3)
  
    }
  }
  
    return (
             <div className="important_links-sm" key={key}>
              {
                  slicedArraysm.map(dt => (
                      <div className="link-box">
                      <Link style={{textDecoration:'none',color:'black'}}to={dt.link}> {dt.title}</Link>
                  </div>
      ))
              }
     
              </div>
  
    );
  }

function slideRenderer3(params) {
    const { index, key } = params;
    var slicedArrayxs
    console.log(sizexs)
    if(index === sizexs - 1){
      slicedArrayxs = notificationArray.slice(index*2,notificationArray.length)
    }
    else{
  
    if(index===0){
      slicedArrayxs = notificationArray.slice(index*2,index*2+2)
   
    }else{
      slicedArrayxs = notificationArray.slice(index*2,index*2+2)
  
    }
  }
  
    return (
             <div className="important_links-xs" key={key}>
              {
                  slicedArrayxs.map(dt => (
                      <div className="link-box">
                      <Link style={{textDecoration:'none',color:'black'}}to={dt.link}> {dt.title}</Link>
                  </div>
      ))
              }
     
              </div>
  
    );
  }

    return ( 
        <>
   

<EnhancedSwipeableViews slideCount={size} slideRenderer={slideRenderer} />
<EnhancedSwipeableViews slideCount={sizesm} slideRenderer={slideRenderer2} />
<EnhancedSwipeableViews slideCount={sizexs} slideRenderer={slideRenderer3} />
         
        </>
     );
}
 
export default Important_Links;