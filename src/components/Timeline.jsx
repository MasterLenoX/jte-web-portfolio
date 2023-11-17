import React from 'react';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import { Chrono } from "react-chrono";

const Timeline = () => {

  const expTimeline = [
    {
      id: 1,
      title: "Jun 2004 - Mar 2011",
      cardSubtitle: "Elementary Student",
      cardTitle:"Al-Hekma International School | Jeddah, Kingdom of Saudi Arabia"
    },
    {
      id: 2,
      title: "Jun 2011 - Apr 2014",
      cardSubtitle: "Highschool Student",
      cardTitle:"Al-Dura GEMS International School | Jeddah, Kingdom of Saudi Arabia"
    },
    {
      id: 3,
      title: "Jun 2014 - Jun 2016",
      cardSubtitle: "BS of General Engineering Student",
      cardTitle:"Bulacan State University Bustos Campus | Bustos, Bulacan, Philippines"
    },
    {
      id: 4,
      title: "Aug 2016 - Sept 2020",
      cardSubtitle: "BS of Information Technology Student",
      cardTitle:"Bulacan State University Bustos Campus | Bustos, Bulacan, Philippines"
    },
    {
      id: 5,
      title: "Feb 2020 - Mar 2020",
      cardSubtitle: "Intern | Web Developer Trainee",
      cardTitle:"ZANK POS Enterprises inc. | Baliuag, Bulacan, Philippines",
      cardDetailedText: "learning JOOMLA, WordPress, HTML/CSS/JavaScript/Nodejs/Bootstrap | Testing & Debugging | Stop Internship during COVID-19"
    },
    {
      id: 6,
      title: "Aug 2021 - Apr 2023",
      cardSubtitle: "Junior Programmer",
      cardTitle:"ACLT Computing Inc | Makati City, Manila, Philippines",
      cardDetailedText: "learning ASP.Net C# MVC, Azure SQL, Telerik Reporting | Testing & Debugging | Scripting | DevOps Git"
    },
    {
      id: 7,
      title: "Nov 2021 - Apr 2023",
      cardSubtitle: "Software or Web QA Tester",
      cardTitle:"ACLT Computing Inc. | Makati City, Manila, Philippines",
      cardDetailedText: "learning ASP.Net C# MVC, Azure SQL, Telerik Reporting | Testing & Debugging | Scripting | DevOps Git"
    },
    {
      id: 7,
      title: "Oct 2023 - Present",
      cardTitle: "Web Developer Part-time (Contract)",
      cardSubtitle:"Keynote Business Solutions Inc. | Tomball, Texas, USA",
      cardDetailedText: "learning ASP.Net C# MVC, Azure SQL, Telerik Reporting | Testing & Debugging | Scripting | DevOps Git"
    }
  ];


  return (
    <div name='timeline' className='bg-gradient-to-b from-black via-black to-slate-950 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full'>
        <div className="pb-4">
          <h3 className="text-3xl font-semibold inline border-b-2 border-blue-400">Experience and Education</h3>
        </div>
        <Chrono
          items={expTimeline}
          theme={{
            cardBgColor: "black",
            cardForeColor: "light",
            cardTitleColor: "blue",
            cardDetailsColor: "light",
            cardSubtitleColor: "light"
          }}
          fontSizes={{

          }}
          mode="HORIZONTAL"
          itemWidth={250}
          showSingle
        />      
      </div>
    </div>
  )
}

export default Timeline