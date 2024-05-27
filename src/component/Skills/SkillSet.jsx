import React from "react";
import Icons from "../IconContainer/Icons";
import reactLogo from '../../assets/react.png'
import nodeLogo from '../../assets/node.png'
import htmlLogo from '../../assets/html.svg'
import cssLogo from '../../assets/css.svg'
import jsLogo from '../../assets/javascript.svg'
import figmaLogo from '../../assets/figma.png'
import firebaseLogo from '../../assets/firebase.png'
import mongodbLogo from '../../assets/mongodb.svg'
import mysqlLogo from '../../assets/mysql.svg'
import phpLogo from '../../assets/php.svg'
import pythonLogo from '../../assets/python.svg'
import javaLogo from '../../assets/java.svg'
import awsLogo from '../../assets/aws.png'
import dockerLogo from '../../assets/docker-mark-blue.png'

export default function SkillSet() {

    const skillsData = [
	{ name : 'AWS', src : awsLogo},
	{ name : 'Docker', src : dockerLogo },
        { name : 'React' , src : reactLogo },
        { name : 'Node.js' , src : nodeLogo },
        { name : 'HTML' , src : htmlLogo },
        { name : 'CSS' , src : cssLogo },
        { name : 'JavaScript' , src : jsLogo },
        { name : 'Figma' , src : figmaLogo },
        { name : 'Firebase' , src : firebaseLogo },
        { name : 'MongoDB' , src : mongodbLogo },
        { name : 'MySQL' , src : mysqlLogo },
        { name : 'Php' , src : phpLogo },
        { name : 'Python' , src : pythonLogo },
        { name : 'Java' , src : javaLogo },
    ]

    const skillsetStyle = {

        padding: '60px',
        height: 'calc(100vh - 180px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

    }

    return (
        <>
            <section id="skills" className="skillset-section" style={skillsetStyle}>

                <div>
                    <p className="title white">Skillset</p>
                    <p className="subtitle" >
                        The skills that I acquired throughout my academics and internship experiences.
                    </p>
                    <p className="subtitle" >
                        I have worked with a lot of tech and wants to keep exploring...
                    </p>
                </div>

                <Icons data={skillsData} flex={16} />

            </section>
        </>
    );
}
