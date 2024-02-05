import React from 'react'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import leetcodeReminderIcon from '../../assets/logo1.png'
import bsecLogo from '../../assets/BSCLogo.png'
import bajajLogo from '../../assets/bajaj.jpg'
import globeLogo from '../../assets/globe.png'
import ytIcon from '../../assets/youtube.png'
import gitHubIcon from '../../assets/github.svg'
import linkedInLogo from '../../assets/linedkin.png'
import chromeLogo from '../../assets/chrome.png'
import nodeLogo from '../../assets/node.png'
import htmlLogo from '../../assets/html.svg'
import cssLogo from '../../assets/css.svg'
import jsLogo from '../../assets/javascript.svg'
import discordLogo from '../../assets/discord.png'
import nextLogo from '../../assets/nextjs.svg'
import firebaseLogo from '../../assets/firebase.png'
import figmaLogo from '../../assets/figma.png'
import tailwindLogo from '../../assets/tailwind-css-icon.png'
import mySQLLogo from '../../assets/mysql.svg'
import phpLogo from '../../assets/php.svg'
import jQueryLogo from '../../assets/icons8-jquery-50.png'

export default function Projects() {

    const projectDetails = [

        {
            icon: leetcodeReminderIcon,
            name: 'Leetcode Reminder',
            duration: '04/2023 - 08/2023',
            links: [{ src: ytIcon, name: 'Youtube Link' , link : '#' }, { src: gitHubIcon, name: 'Github Link' , link : 'https://github.com/get-devkit/leetcodereminder' }, { src: linkedInLogo, name: 'LinkedIn Link' , link : 'https://www.linkedin.com/posts/bhavesh-anandpara_project-opensource-leetcode-activity-7070717771919085568-8zkn?utm_source=share&utm_medium=member_desktop' }],
            main: [
                'This is a Chrome Extension that allows you to set reminders for your leetcode streaks so that you can maintain and show off your precious programming streaks to your friends 😉.',
                'provides daily reminders on both Chrome webpages and Discord to assist in maintaining consistent LeetCode streaks. ',
                'Developed a Discord bot that delivers periodic push notifications to user devices using Discord.js, Nodemailer and node-cron.',
                'Configured a Next.js server to create APIs responsible for managing database operations within Firebase'
            ],
            tech: [
                { name: 'HTML', src: htmlLogo },
                { name: 'CSS', src: cssLogo },
                { name: 'JavaScript', src: jsLogo },
                { name: 'Chrome Webtools', src: chromeLogo },
                { name: 'Discord Bot', src: discordLogo },
                { name: 'Next.js', src: nextLogo },
                { name: 'Node.js', src: nodeLogo },
                { name: 'Firebase', src: firebaseLogo },
                { name: 'Figma', src: figmaLogo },
            ],
            flex:10

        },
        {
            icon: bsecLogo,
            name: 'Official Website of Bajaj Science Education Center ',
            duration: '02/2023 - 07/2023',
            links: [ { src: globeLogo, name: 'Website Link' , link : 'https://www.bajajsciencecenter.co.in/' }],
            main: [
                'Bajaj Science Education Centre is a place for children to learn science through exploration and play.',
                'Redesigned previous website, revamping its user interface (UI) to enhance visual appeal, and improve overall functionality.',
                'Resulted in a visually appealing and user-friendly website that significantly improved user engagement using Figma and Tailwind CSS.',
                'Introduced an intuitive admin panel for admin to effortlessly update and manage upcoming notices and class content for students using NextJS and Firebase, achieving a substantial time reduction of 91.67% .',
                'Utilized Firebase Storage to store images and Firestore for database managment that allows the admin to update and view data in real-time.',
            ],
            tech: [
                { name: 'Next.js', src: nextLogo },
                { name: 'Tailwind', src: tailwindLogo },
                { name: 'Firebase', src: firebaseLogo },
                { name: 'Figma', src: figmaLogo },
                {  },
                {  },
                {  },
                {  },
            ],
            flex : 5

        },
        {
            icon: bajajLogo,
            name: 'Leave Management System',
            duration: '06/2023 - Current',
            links: [ { src: ytIcon, name: 'Youtube Link' , link : '#' }],
            main: [
                'Developed a web-based software application that is being used by our college to facilitate leave requests of almost 50+ Staff Members.',
                'Eliminated approximately 50% of the time required to approve leave requests compared to the traditional procedure.',
                'Constructed several functionalities using PHP, Bootstrap and JQuery for server-side scripting, MySQL for database management and XAMPP as local web-server.',
            ],
            tech: [
                { name: 'HTML', src: htmlLogo },
                { name: 'CSS', src: cssLogo },
                { name: 'JavaScript', src: jsLogo },
                { name: 'MySQL', src: mySQLLogo },
                { name: 'Php', src: phpLogo },
                { name: 'JQuery', src: jQueryLogo },
                {  },
                {  },
            ],
            flex : 5

        }

    ]

    const projectStyle = {

        backgroundColor: '#F8F8F8',
        padding: '60px',
        height: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',


    }

    return (
        <>

            <section id='projects' className='projects-section' style={projectStyle} >

                <p className='title'  >Projects</p>

                <ProjectContainer data={projectDetails} />


            </section>


        </>
    )

}
