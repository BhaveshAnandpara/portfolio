import React from 'react'
import Icons from '../IconContainer/Icons'

export default function ProjectContainer({ data }) {

    const projectSectionStyle = {

        margin: '60px 0px'

    }

    return (

        <section  >

            {

                data.map((project) => {

                    return (

                        <>

                            <section style={projectSectionStyle} >


                                <div className='project-header' >

                                    {/* Project name and logo */}

                                    <div>
                                        <img src={project.icon} alt={project.name} />
                                        <div className='project-header-title' >
                                            <p >{project.name}</p>
                                            <p className='subtitle' >{project.duration}</p>
                                        </div>
                                    </div>

                                    {/* Links */}

                                    <div className='linkContainer' >
                                        {
                                            project.links.map((link) => [
                                                <img onClick={()=>{ window.open(link.link) }} src={link.src} alt={link.name} />
                                            ])
                                        }
                                    </div>

                                </div>

                                <div className="project-main">
                                    <ul>
                                        {project.main.map((line) => {
                                            return (
                                                <li>{line}</li>
                                            )
                                        })}
                                    </ul>

                                </div>

                                <div className="project-footer">
                                    <Icons data={project.tech} flex={project.flex} />
                                </div>

                            </section>


                        </>

                    )


                })


            }


        </section>

    )
}
