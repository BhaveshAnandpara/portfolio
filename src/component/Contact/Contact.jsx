import React from 'react'
import { useRef } from 'react';

export default function Contact() {

    const contactStyle = {
        padding: "60px",
        height: "calc(100vh - 180px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor : '#9747FF'
    };

    const nameRef = useRef()
    const emailRef = useRef()
    const contentRef = useRef()

    const validateForm = ()=>{

        let name = nameRef.current.value
        let email = emailRef.current.value
        let content = contentRef.current.value

        if( name.trim() === "" || email.trim() === "" || content.trim() === "" ){
            alert( "Please Complete the Form !!" )
            return
        }
        
        if( !email.toLowerCase().match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ) ){
            alert( "Enter a Valid Email !!" )
            return
        }

        alert( "Thanks for Contacting me !! I will reach out to you ASAP !!" )
        document.getElementById('contactForm').submit()




    }

    return (
        <section className="contact-section" style={contactStyle}>

            <p className="title white">Let's Connect</p>

            <form id='contactForm' action="https://formspree.io/f/xjvnyeel" method='POST' className='contactForm' >

                <input ref={nameRef} className='input-fields' type="text" placeholder='Name' name='name' />
                <input ref={emailRef} className='input-fields' type="email" placeholder='Email' name='email' />
                <textarea  ref={contentRef} className='input-fields' cols="30" rows="10" placeholder='Write Anything !! A simple Hi also works 🙌' name='content' ></textarea>

                <button type="button" className='submitBtn' onClick={()=>validateForm()} > Send Message </button>

            </form>

        </section>
    )
}
