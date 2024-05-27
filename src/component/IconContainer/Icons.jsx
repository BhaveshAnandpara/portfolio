import React from 'react'

export default function Icons({ data , flex }) {

    const iconSectionStyle = {

        display : 'flex',
        justifyContent : 'flex-start',
        alignItems : 'center',
        flexDirection : 'row',
        flexWrap: 'wrap'

    }
    
    const iconContainerStyle = {

        display : 'flex',
        justifyContent  : 'center',
        alignItems  : 'center',
        flexDirection : 'column',
        width : '25%',
        //flex: `1 0 ${flex}%`,
        margin: '32px 60px 32px 0px'
    }



    return (
        <>

            <section style={iconSectionStyle} >

                {

                    data.map((tech) => {

                        return (
                            <>
                                <div className='iconContainer' style={iconContainerStyle} >
                                    <div>
                                        <img className='icon' src={tech.src} alt={tech.name} style={tech.src === undefined ? { opacity : 0 } : {opacity : 1 }}  />
                                    </div>
                                    <p>{tech.name}</p>
                                </div>
                            </>
                        )

                    })

                }


            </section>

        </>
    )
}
