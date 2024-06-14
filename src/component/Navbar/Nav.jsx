import React from 'react'
import menu from '../../assets/menu.svg'
import close from '../../assets/x.svg'
import { useRef , useState } from 'react'


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

  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef()


  const navStyle={
    display : 'flex',
    justifyContent : 'space-between',
    alignItems : 'center',
    width : '60%'
  }

  const toggleMenu = ()=>{

    if( isOpen ){
      
      navRef.current.style.translate = "-100%"
      
    }else{

      navRef.current.style.translate = "0%"

    }

    setIsOpen( !isOpen )

  }

  return (
    <>
        {
          !isOpen && 
          <img onClick={()=> toggleMenu( ) } src={menu} id='menu-icon' alt="menu icon" style={{ cursor : 'pointer' }} />

        }

    <header className='header' ref={navRef} >

        {
          isOpen && 
          <img onClick={()=> toggleMenu( ) } src={close} id='close-icon' alt="close icon" style={{ cursor : 'pointer' }} />

        }


        <nav id='navbar' style={navStyle}  >

            <a className='nav-text' onClick={ ()=>move( "Home" ) }  > Home </a>
            <a className='nav-text' onClick={ ()=>move( "About" ) }  > About Me </a>
            <a className='nav-text' onClick={ ()=>move( "Skills" ) }  > Skills </a>
            <a className='nav-text' onClick={ ()=>move( "Projects" ) }  > Projects </a>
            <a className='nav-text' onClick={ ()=>move( "Experience" ) }  > Experience </a>
            <a className='nav-text' onClick={ ()=>move( "Contact" ) }  > Contact </a>

        </nav>

        <button className='actionBtn' onClick={()=>{ window.open('https://docs.google.com/document/d/1bKGS_t7lnm93h9QX2kiZS4cK1AAeOOeu6KRW4KNpaf0/edit?usp=sharing') }} > Resume </button>

    </header>
    </>
  )
}

export { Nav , move }
