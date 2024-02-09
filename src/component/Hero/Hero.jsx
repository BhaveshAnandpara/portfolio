import React from 'react'
import {move} from '../Navbar/Nav'

export default function Hero() {

  const heroStyle = {

    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: '62px',
    color: 'white',
    padding: '60px',
    height: '100vh'

  }

  const actionBtnStyle = {

    marginTop: '60px'

  }


  return (
    <section id='hero' className='hero-section' style={heroStyle} >

      <div  >

        <p> I'm <span className='signtext' > Bhavesh Anandpara </span> </p>
        <p>Skilled Software Engineer</p>
        <p>Based in India.</p>

      </div>

      <button className='actionBtn purpleBtn' style={actionBtnStyle} onClick={()=>{ move("Contact") }}  > Get in touch </button>

    </section>
  )
}
