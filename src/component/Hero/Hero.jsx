import React from 'react'
import { move } from '../Navbar/Nav'
import profile from '../../assets/profile.png'

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

      <div>

        <div>

          <p> I'm <span className='signtext' > Bhavesh Anandpara </span> </p>
          <p>Skilled Software Engineer</p>
          <p>Based in India.</p>

        </div>

        <img id='profile' src={profile} alt="profile" />
      </div>

      <button className='actionBtn purpleBtn' style={actionBtnStyle} onClick={() => { move("Contact") }}  > Get in touch </button>


    </section>
  )
}
