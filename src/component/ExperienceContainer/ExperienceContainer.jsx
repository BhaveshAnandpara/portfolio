import React from 'react'

export default function ExperienceContainer({ data }) {

    const expSectionStyle = {
        margin: '60px 0px'
    }

    return (

        <section  >

            {

                data.map((exp) => {

                    return (

                        <>

                            <section style={expSectionStyle} >


                                <div className='exp-header' >

                                    {/* exp name and logo */}

                                    <div>
                                        <img style={{ borderRadius : '10px' }} src={exp.icon} alt={exp.name} />
                                        <div className='exp-header-title' >
                                            <p className='white' >{exp.name}</p>
                                            <p className='subtitle' >{exp.duration}</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="exp-main">
                                        {exp.main.map((line) => {
                                            return (
                                                <p style={{ color : 'rgba(255,255,255,0.8)', paddingLeft : '104px'}} >{line}</p>
                                            )
                                        })}

                                </div>

                            </section>


                        </>

                    )


                })


            }


        </section>

    )
}
