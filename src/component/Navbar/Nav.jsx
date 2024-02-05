import React from 'react'
import { Link } from "react-router-dom";


const move = ( ele )=>{

  let scrollHeight = 70;

  switch(ele){

    case "Contact" :
      scrollHeight += document.getElementById('experience').clientHeight
    case "Experience" :
      scrollHeight += document.getElementById('projects').clientHeight
    case "Projects" :
      scrollHeight += document.getElementById('skills').clientHeight
    case "Skills" :
      scrollHeight += document.getElementById('aboutme').clientHeight
    case "About" :
      scrollHeight += document.getElementById('hero').clientHeight
    default :
      window.scrollTo( 0 , scrollHeight-130 )

  }    

}

function Nav() {

  const headerStyle={

    display : 'flex',
    justifyContent : 'space-between',
    alignItems : 'center',
    padding : '24px 60px',
    position : 'fixed',
    width : "calc( 100% - 120px )",
    backgroundColor : '#2F2F2F'

  }

  const navStyle={
    display : 'flex',
    justifyContent : 'space-between',
    alignItems : 'center',
    width : '60%'
  }



  return (
    <header style={headerStyle} >

        <nav id='navbar' style={navStyle} >

            <a className='nav-text' onClick={ ()=>move( "Home" ) }  > Home </a>
            <a className='nav-text' onClick={ ()=>move( "About" ) }  > About Me </a>
            <a className='nav-text' onClick={ ()=>move( "Skills" ) }  > Skills </a>
            <a className='nav-text' onClick={ ()=>move( "Projects" ) }  > Projects </a>
            <a className='nav-text' onClick={ ()=>move( "Experience" ) }  > Experience </a>
            <a className='nav-text' onClick={ ()=>move( "Contact" ) }  > Contact </a>

        </nav>

        <button className='actionBtn' onClick={()=>{ window.open('https://drive.google.com/file/d/1bjJXdv670T-a5tGwTsK8_hxdnaYtlWfp/view?usp=sharing') }} > Resume </button>

    </header>
  )
}

export { Nav , move }