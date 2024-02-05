import React from 'react'
import linkedInLogo from '../../assets/linedkin.png'
import leetcodeLogo from '../../assets/leetcode.svg'
import githubLogo from '../../assets/github.svg'

export default function AboutMe() {

    const aboutmeStyle = {

        backgroundColor: '#F8F8F8',
        padding: '60px',
        height : 'calc(100vh - 180px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        

    }

    const socialMediaStyle = {

        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'

    }

    return (
        <>

            <section id='aboutme' className='aboutme-section' style={aboutmeStyle} >

                <p className='title' >About Me</p>

                <div className='aboutme' >

                    <p>
                        Currently pursuing a B.Tech in Computer Engineering with an expected graduation in 2024.
                    </p>
                    <p>
                        My passion lies in utilizing programming to address real-world challenges.
                    </p>
                    <p>
                        Currently exploring the craze of Data Structure and Algorithms.
                    </p>

                    <p>
                        I enjoy watching movies and anime. Recently, I've embarked on a journey into cooking.

                    </p>
                    <p>
                        Also I am a huge chai lover 💖
                    </p>

                </div>

                <div style={socialMediaStyle} >

                    <div className='socials' onClick={()=>window.open('https://www.linkedin.com/in/bhavesh-anandpara/')} >
                        <img className='icon' src={linkedInLogo} alt="LinkedIn Logo" />
                        <span>LinkedIn</span>
                    </div>

                    <div className='socials' onClick={()=>window.open('https://leetcode.com/bhaveshanandpara12/')} >
                        <img className='icon' src={leetcodeLogo} alt="Leetcode Logo" />
                        <span>Leetcode</span>
                    </div>

                    
                    <div className='socials' onClick={()=>window.open('https://github.com/BhaveshAnandpara')} >
                        <img className='icon' src={githubLogo} alt="GitHub Logo" />
                        <span>GitHub</span>
                    </div>

                </div>


            </section>


        </>
    )
}
