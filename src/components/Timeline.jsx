import React from 'react';
import { Chrono } from "react-chrono";

const Timeline = () => {

  const expTimeline = [
    {
      id: 1,
      title: "Jun 2004 - Mar 2011",
      cardSubtitle: "Elementary Student",
      cardTitle:"Al-Hekma International School | Jeddah, Kingdom of Saudi Arabia",
      cardDetailedText:"Enrolled since June. 2004 to April. 2011 | Bronze Medalist | Most Punctuality"
    },
    {
      id: 2,
      title: "Jun 2011 - Apr 2014",
      cardSubtitle: "Highschool Student",
      cardTitle:"Al-Dura GEMS International School | Jeddah, Kingdom of Saudi Arabia",
      cardDetailedText:"Enrolled since June. 2011 to March 2014 | Dodgeball Champion in Intramurals 2013-2014"
    },
    {
      id: 3,
      title: "Jun 2014 - Jun 2016",
      cardSubtitle: "BS of General Engineering Student",
      cardTitle:"Bulacan State University Bustos Campus | Bustos, Bulacan, Philippines",
      cardDetailedText:"Attended from June 2014 to June 2016"
    },
    {
      id: 4,
      title: "Aug 2016 - Sept 2020",
      cardSubtitle: "BS of Information Technology Student",
      cardTitle:"Bulacan State University Bustos Campus | Bustos, Bulacan, Philippines",
      cardDetailedText:"Attended from Aug 2016 to Sept 2020 | 3rd Placer, Web Design Contest 2018"
    },
    {
      id: 5,
      title: "Feb 2020 - Mar 2020",
      cardTitle: "Intern | Web Developer Trainee",
      cardSubtitle:"ZANK POS Enterprises inc. | Baliuag, Bulacan, Philippines",
      cardDetailedText: "Learning Joomla, WordPress, Bootstrap, HTML, CSS, Ajax, JavaScript, PHP, Node.js | Helping Senior to fix databases and websites | Testing software with or without bugs encountered | Stop Internship during COVID-19"
    },
    {
      id: 6,
      title: "Aug 2021 - Apr 2023",
      cardTitle: "Junior Programmer",
      cardSubtitle:"ACLT Computing Inc | Makati City, Manila, Philippines",
      cardDetailedText: "learning ASP.Net C# MVC, Azure SQL, Telerik Reporting | Testing & Debugging | Scripting | DevOps Git | Database administration and website design | Built the logic for a streamlined ad-serving platform that scaled | Testing System and Errors fix "
    },
    {
      id: 7,
      title: "Nov 2021 - Apr 2023",
      cardTitle: "Software QA Tester",
      cardSubtitle:"ACLT Computing Inc. | Makati City, Manila, Philippines",
      cardDetailedText: "learning ASP.Net C# MVC, Azure SQL, Telerik Reporting | Testing & Debugging | Scripting | DevOps Git | Database administration and website design | Built the logic for a streamlined ad-serving platform that scaled | Testing System and Errors fix "

    },
    {
      id: 8,
      title: "Oct 2023 - Nov 2023",
      cardTitle: "Web Developer Part-time (Contract)",
      cardSubtitle:"Keynote Business Solutions Inc. | Tomball, Texas, USA",
      cardDetailedText: "Building Website using Vue.js, React.js, HTML, CSS, JavaScript, PHP, Laravel, and/or Wordpress | Uploading webhosting using GitHub, Firebase, and/or Netlify"
    }
  ];


  return (
    <div name='timeline' className='bg-gradient-to-b from-slate-950 via-slate-950 to-black w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-semibold inline border-b-4 border-cyan-400'>Experience & Education</p>
        <p className='text-xl py-6'>Here are some of my Experience and my Education Timeline</p>
      </div>
        <Chrono
          items={expTimeline}
          theme={{
            cardBgColor: "transparent",
            cardForeColor: "light",
            cardTitleColor: "yellow",
            cardDetailsColor: "light",
            cardSubtitleColor: "light"
          }}
          fontSizes={{
            cardSubtitle: '1.25rem',
            cardText: '1rem',
            cardTitle: '1.55rem',
            title: '1rem',
          }}
          mode="HORIZONTAL"
          itemWidth={150}
          showSingle
        >
        </Chrono>      
      </div>
    </div>
  )
}

export default Timeline