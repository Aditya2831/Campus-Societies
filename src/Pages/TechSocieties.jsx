import React, { useState } from "react";
// import Cards from "../Components/Card";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import iosdMembers from "../../public/iosdMembers";

// import iosdMembers from "../../public/iosdMembers";
import aditya from "../assets/Team_members/iosd/Aditya_Gupta.jpg"
import arham from "../assets/Team_members/iosd/Arham_Jain.png"
import arnav from "../assets/Team_members/iosd/Arnav_Gupta.jpg"
import jai from "../assets/Team_members/iosd/Jai_Sukheja .jpg"
import jatin from "../assets/Team_members/iosd/Jatin_Bhatt.jpg"
import jayant from "../assets/Team_members/iosd/Jayant_Aggarwal .jpg"
import jivesh from "../assets/Team_members/iosd/JiveshLakhani.jpg"
import keshav from "../assets/Team_members/iosd/Keshav_Goyal.jpeg"

import iosd1 from "../assets/Snapshots/iosd/iosd01.jpg"
import iosd2 from "../assets/Snapshots/iosd/iosd02.jpg"
import iosd3 from "../assets/Snapshots/iosd/iosd03.jpg"
import iosd4 from "../assets/Snapshots/iosd/iosd04.jpg"
import iosd5 from "../assets/Snapshots/iosd/iosd05.jpg"


//import techxtract 
import techx1 from "../assets/Team_members/techxtract/tech1.png"
import techx2 from "../assets/Team_members/techxtract/tech2.png"
import techx3 from "../assets/Team_members/techxtract/tech3.png"
import techx4 from "../assets/Team_members/techxtract/tech4.png"
import techx5 from "../assets/Team_members/techxtract/tech5.png"
import techx6 from "../assets/Team_members/techxtract/tech6.png"


//import techcom
import techc1 from "../assets/Team_members/techcom/techc1.png"
import techc2 from "../assets/Team_members/techcom/techc2.png"
import techc3 from "../assets/Team_members/techcom/techc3.png"
import techc4 from "../assets/Team_members/techcom/techc4.png"
import techc5 from "../assets/Team_members/techcom/techc5.png"
import techc6 from "../assets/Team_members/techcom/techc6.png"
import techc7 from "../assets/Team_members/techcom/techc7.png"
import techc8 from "../assets/Team_members/techcom/techc8.png"


//import tva
import tva1 from "../assets/Team_members/tva/tva1.png"
import tva2 from "../assets/Team_members/tva/tva2.png"
import tva3 from "../assets/Team_members/tva/tva3.png"
import tva4 from "../assets/Team_members/tva/tva4.png"
import tva5 from "../assets/Team_members/tva/tva5.png"






import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import iosd from "../assets/logos/iosd.jpg";
import techXtract from "../assets/logos/techXtract.jpg";




import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ServiceComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: "IOSD",
      logo: iosd,
      heading: "International Organisation Of Software Developers",
      brief:
      "We, the International Organization for Software Developers (IOSD), constitute a dynamic college society rallying students with a fervor for software development. Our community is a melting pot of diverse talents, united by a common passion for coding and technological innovation. With a global perspective, we aim to harness the collective potential of our members, providing them with opportunities to learn, grow, and excel in the ever-evolving field of software development.",
      established: "2019",
      vision:
        "Our vision at IOSD is to be a beacon of excellence in nurturing and empowering the future leaders of the software industry. We envision a world where every aspiring software developer is equipped with the skills, knowledge, and ethical values necessary to make impactful contributions to society. Through our initiatives, we seek to foster a culture of innovation, collaboration, and inclusivity, inspiring our members to push the boundaries of what is possible and create positive change in the world through technology.",
      // ../assets/img1.jpg
      team: [
       
        {
          id: 1,
          name: "Aditya Gupta",
          role: "Treasurer",
          image: aditya
        },
        {
          id: 2,
          name: "Arham Jain",
          role: "Operations Head",
          image:
            arham
        },
        {
          id: 3,
          name: "Arnav Gupta",
          role: "General Secreatary",
          image:
            arnav
        },
        {
          id: 4,
          name: "Jai Sukheja",
          role: "SIG Head",
          image:
            jai
        },
        {
          id: 5,
          name: "Jatin Gupta",
          role: "Operations Head",
          image:
            jatin
        },
        {
          id: 5,
          name: "Jivesh Lakhani",
          role: "SIG Head",
          image:
            jivesh
        },
        {
          id: 5,
          name: "Jayant Aggarwal",
          role: "Graphics Head",
          image:
            jayant
        },
        {
          id: 5,
          name: "Keshav",
          role: "Graphics Head",
          image:
            keshav
        },

      ],

      achievements: [
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi"
      ],
      

      gallery: [
        {
          id: 0,
          image:
            iosd1,
        },
        {
          id: 1,
          image:
          iosd2
        },
        {
          id: 2,
          image:
          iosd3
            ,
        },
        {
          id: 3,
          image:
          iosd4
            ,
        },
        {
          id: 4,
          image:
            iosd5,
        },
      ],
      instagramLink: "https://www.instagram.com/iosdmait/"
    },



    // TECHXTRACT
    {
      id: 1,
      title: "TECHXTRACT",
      logo: techXtract, //passing img
      heading: "TechXtract",
      brief:
        "TechXtract is a pioneering technical society, a hub for enthusiasts in diverse fields like engineering, computer science, and information technology. We are a dynamic community, driven by the passion to explore, innovate, and create technological solutions that address real-world challenges. Through collaborative efforts and knowledge-sharing initiatives, we aim to cultivate a vibrant ecosystem where members can expand their skills, network with industry professionals, and embark on exciting projects that push the boundaries of technological advancement",
      established: "March 2016",
      vision:
        "Our vision at TechXtract is to catalyze a revolution in technology by empowering individuals to unleash their full potential and drive positive change in society. We envision a future where innovation knows no bounds, where every member is equipped with the tools and resources needed to tackle complex problems and shape the world for the better. Through our commitment to excellence, inclusivity, and continuous learning, we strive to inspire the next generation of tech leaders who will pioneer breakthroughs and leave a lasting impact on the world",

      team: [
        {
          id: 0,
          name: "Rohan Goyal",
          role: "Promotions Head",
          image:
            techx1,
        },
        {
          id: 1,
          name: "Anupam Kasturia",
          role: "Tech Head",
          image:
           techx2,
        },
        {
          id: 2,
          name: "Shivam Dohare",
          role: "Graphic Head",
          image:
            techx3,
        },
        {
          id: 3,
          name: "Karthik Nair",
          role: "Operational Head",
          image:
            techx4,
        },
        {
          id: 4,
          name: "Naman Jolly",
          role: "Vice President",
          image:
            techx5,
        },
        {
          id: 5,
          name: "Jagrit Dudeja",
          role: "President",
          image:
            techx6,
        },
      ],

      achievements: [
            "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi"
      ],

      gallery: [
        {
          id: 0,
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 1,
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 2,
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 3,
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 4,
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
      ],
      instagramLink: "https://www.instagram.com/techxtract_cst/"
    },



// -----------------------------------TECHCOM----------------------------------------------
    {
      id: 2,
      title: "TECHCOM",
      logo: techXtract, //passing img
      heading: "TECHCOM",
      brief:
        "TechCom stands as a vibrant community within our college, serving as a nexus for students passionate about the convergence of technology and communication. Our society encompasses a diverse array of members, each bringing unique perspectives and skills to the table. From computer science to media studies, our collective expertise spans various technical disciplines, united by a common goal: to explore the transformative potential of technology in communication",
      established: "March 2016",
      vision:
        "At TechCom, our vision extends beyond mere integration of technology into communication; we aspire to redefine the very essence of human connection in the digital age. We envision a world where technology serves as a powerful tool for fostering understanding, collaboration, and empathy across cultures and communities. Our mission is to spearhead this revolution by developing innovative solutions that transcend traditional communication barriers. Through collaborative projects, workshops, and events, we aim to empower individuals with the skills and knowledge needed to leverage technology for meaningful communication. By bridging the gap between technology and society, we strive to create a more inclusive and interconnected world where communication knows no bounds",

      team: [
        {
          id: 0,
          name: "Arnav Raj",
          role: "Department PR Head",
          image:
            techc1,
        },
        {
          id: 1,
          name: "Kartik Raj",
          role: "Design Head",
          image:
            techc2,
        },
        {
          id: 2,
          name: "Swati Goel",
          role: "PR Head",
          image:
            techc3,
        },
        {
          id: 3,
          name: "Nawed Ali",
          role: "Social Media Head",
          image:
            techc4,
        },
  
        {
          id: 4,
          name: "Himanshu Kataria",
          role: "Operational Head",
          image:
            techc5,
        },
        {
          id: 5,
          name: "Harsh Rajput",
          role: "General Secreatary",
          image:
            techc6,
        },
        {
          id: 6,
          name: "Mohammed Khundmeer Siddiq",
          role: "Vice President",
          image:
            techc7,
        },
        {
          id: 7,
          name: "Mohammed Khundmeer Arpit Goyal",
          role: "President",
          image:
            techc8,
        },
      ],

      achievements: [
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi"
      ],

      gallery: [
        {
          id: 0,
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 1,
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 2,
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 3,
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 4,
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
      ],
      instagramLink:"https://www.instagram.com/techcom_mait/"
    },



    // ------------------------------------------------ATOM-------------------------------------------------------

    {
      id: 3,
      title: "A.T.O.M",
      logo: techXtract,
      heading: "A.T.O.M",
      brief:
        "A.T.O.M, previously known as Techtronix, stands as a beacon of innovation within the realm of robotics. Comprised of driven engineering students, we are united by a shared enthusiasm for pioneering technological advancements. Our society represents a convergence of diverse talents and perspectives, all focused on exploring the cutting edge of robotics and AI. With a new team at the helm, we embark on a journey fueled by curiosity and ambition, committed to pushing the boundaries of what is possible in the field of automation.",
      established: "March 2016",
      vision:
        "At A.T.O.M, our vision extends far beyond the confines of our college campus. We envision a future where robotics and AI play a central role in shaping society, enhancing efficiency, and improving lives. Our mission is to lead this transformative charge, leveraging the latest technologies to drive innovation and progress. We aspire to create a dynamic ecosystem where ideas flourish, collaboration thrives, and breakthroughs are commonplace. Through impactful projects, collaborative research endeavors, and active participation in global competitions and events, we seek to inspire a new generation of robotics enthusiasts and pave the way for a brighter future driven by intelligent automation. With dedication, creativity, and a spirit of exploration, we aim to leave a lasting legacy in the field of robotics, contributing to a world where technology serves as a force for positive change.",
      // ../assets/img1.jpg
      team: [
        {
          id: 0,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },
        {
          id: 1,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },
        {
          id: 2,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },
        {
          id: 4,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },
      ],

      achievements: [
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi"
      ],

      gallery: [
        {
          id: 0,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 1,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 2,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 3,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 4,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
      ],
      instagramLink:"https://www.instagram.com/a.t.o.m_robotics_lab/"
    },


    // --------------------------------TECHVISION--------------------------------

    {
      id: 4,
      title: "TECHVISION",
      logo: techXtract,
      heading: "TECHVISION",
      brief:
        "TechVISION is a pioneering technical society dedicated to fostering innovation and excellence among students passionate about cutting-edge technologies and visionary projects. With a diverse membership representing various technical disciplines, we serve as a dynamic platform for collaboration, learning, and exploration.",
      established: "March 2016",
      vision:
        "Our vision at TechVISION is to harness the power of technology to envision and create a better future for all. We aim to inspire our members to dream big and think boldly, pushing the boundaries of what's possible through visionary projects and initiatives. By leveraging emerging technologies and fostering a culture of creativity and experimentation, we strive to empower individuals to make a positive impact on the world. Through our endeavors, we seek to cultivate a community of visionary leaders who are not only adept at navigating the complexities of modern technology but also committed to using their skills and knowledge to address pressing global challenges.",
      // ../assets/img1.jpg
      team: [
        {
          id: 0,
          name: "Ayush",
          role: "Event Head",
          image:
           tva1,
        },
        {
          id: 1,
          name: "Hardik",
          role: "Creative Head",
          image:
            tva2,
        },
        {
          id: 2,
          name: "Kanishq",
          role: "Operational Head",
          image:
            tva3,
        },
        {
          id: 3,
          name: "Shubh",
          role: "President",
          image:
            tva4,
        },
        {
          id: 4,
          name: "Manish",
          role: "Technical Head",
          image:
            tva5,
        },
        
      ],

      achievements: [
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi"
      ],

      gallery: [
        {
          id: 0,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 1,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 2,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 3,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 4,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
      ],
      instagramLink:"https://www.instagram.com/tva_mait/"
    },

    {
      id: 5,
      title: "TECHALLIANCE",
      heading: "TECHALLIANCE",
      logo:techXtract,
      brief:
        "TechAlliance is a dynamic technical society comprised of driven students passionate about forging alliances between technology and innovation. With a diverse membership spanning various technical disciplines, we unite under a common vision to drive positive change through collaborative projects and initiatives.",
      established: "March 2016",
      vision:
        "Our vision at TechAlliance is to harness the collective power of technology and collaboration to address societal challenges and drive innovation forward. We aim to foster an environment where students can come together to exchange ideas, share knowledge, and work towards common goals. Through our efforts, we aspire to build bridges between academia, industry, and the community, creating opportunities for meaningful partnerships and impactful projects. By leveraging the latest advancements in technology and embracing a spirit of inclusivity and collaboration, we strive to empower our members to become catalysts for change and drive positive transformation in the world.",
      // ../assets/img1.jpg
      team: [
        {
          id: 0,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },
        {
          id: 1,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },
        {
          id: 2,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },
        {
          id: 4,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },
      ],

      achievements: [
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi"
      ],

      gallery: [
        {
          id: 0,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 1,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 2,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 3,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 4,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
      ],
      instagramLink:""
    },


    // -------------------------------eDC----------------------------

    






    // ---------------------------CSI------------------------------------------------

    {
      id: 7,
      title: "CSI",
      logo: iosd,
      heading: "Computer Society Of India",
      brief:
        "The Computer Society of India (CSI) is a premier technical society dedicated to advancing the field of computer science and technology. With a rich legacy spanning decades, CSI brings together students, professionals, researchers, and industry experts to foster innovation, knowledge sharing, and collaboration in the realm of computing.",
      established: "March 2016",
      vision:
        "Our vision at CSI is to be at the forefront of the digital revolution, driving advancements in computer science and technology that positively impact society. We aim to serve as a catalyst for innovation and excellence, providing a platform for individuals to explore emerging trends, exchange ideas, and leverage cutting-edge technologies. Through our diverse range of activities, including conferences, workshops, seminars, and publications, we strive to empower our members to thrive in an ever-evolving technological landscape and contribute to the development of a digitally empowered nation.",
      // ../assets/img1.jpg
      team: [
        {
          id: 0,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },
        {
          id: 1,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },
        {
          id: 2,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },
        {
          id: 3,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },
        {
          id: 4,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        },
      ],

      achievements: [
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi",
        "1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi"
      ],

      gallery: [
        {
          id: 0,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 1,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 2,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 3,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
        {
          id: 4,
          image:
            "https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn",
        },
      ],
      instagramLink:"https://www.instagram.com/mait_csi_innowave/"
    },



    // ---------------------------------------------IEEE--------------------------------------
   
  ];

  return (
    <div className="flex text-center font-chakraPetch font-semibold">
      <div className="md:w-1/5 md:border-r ml-1 mt-1 text-center bg-gradient-to-r from-gray-900 via-slate-900 to-slate-900">
        {/* Designing left navbar */}
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer bg-[#0f1a2e] p-2 flex items-center md:h-[80px] h-[65px] border-t border-b ${
              selectedTab === tab.id
                ? "text-gray-950 bg-gray-300"
                : "text-white transition duration-300 hover:bg-gradient-to-r from-gray-900 to-blue-800 text-center"
            }`}
            onClick={() => setSelectedTab(tab.id)}>
            {tab.title}
          </div>
        ))}
      </div>

      <div className="md:w-5/6 w-full md:pt-1 pl-0.5 h-fit md:h-auto">
        <div className="py-8 md:px-6 rounded-md bg-gradient-to-r from-gray-900 via-slate-700 to-slate-900 text-white flex flex-col md:gap-16 gap-2">
          <div className="flex">
            <h1 className="md:text-5xl text-3xl font-bold border-b mt-4 text-center">
              {tabs[selectedTab].heading}
            </h1>

            <img
              src={tabs[selectedTab].logo}
              alt={tabs[selectedTab].title}
              className="w-40 h-30 mr-2 rounded-md ml-2"
            />
          </div>

          {/* Established */}
          <div className="flex text-3xl">
            <h1>Established: {String.fromCharCode(160)}</h1>

            {tabs[selectedTab].established}
          </div>

          {/* Who are we section */}
          <div>
            <h1 className="text-3xl">Who are We?</h1>
            <div>{tabs[selectedTab].brief}</div>
          </div>

          {/* Our Vision */}
          <div>
            <h1 className="text-3xl">Our Vision</h1>
            {tabs[selectedTab].vision}
          </div>

          {/* Container for team member images */}
          <div>
            <h1 className="text-3xl mb-6">Meet Our Team</h1>
            <div className="flex justify-evenly">

            <Swiper
               effect={'coverflow'}
               grabCursor={true}
               centeredSlides={true}
               loop={true}
               slidesPerView={3}
               coverflowEffect={
                {
                  rotate:0,
                  stretch:0,
                  depth:100,
                  modifier:2.5
                }
               }
               pagination={{el:'.swiper-pagination', clickable:true}}
               navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable:true,

               }}
               modules={[EffectCoverflow, Pagination, Navigation]}
               className="swiper_container"
               >
      
              {tabs[selectedTab].team.map((member) => (
               
                <div
                  key={member.id}
                  className="flex flex-col items-center mr-4 justify-evenly">
                   <SwiperSlide className="">
                  <img
                    src={member.image}
                    alt={member.name}
                    className=" w-34 h-34 mb-2"
                  />
                  <p>{member.name}</p>
                  <p>{member.role}</p>
                  </SwiperSlide>
                </div> 
              ))}
             
              <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                      <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination">
                    </div>
                  </div>
              </Swiper>
            </div>
          </div>

          {/* Rendering achievements */}
          <div className="achievements">
            <h1 className="text-2xl">Achievements</h1>
            <VerticalTimeline className="text-black text-xs">
              {tabs[selectedTab].achievements.map((achievement, index) => (
                <VerticalTimelineElement key={index} className="text-black">
                  {achievement}
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>

            {/* <ul>
             
            </ul> */}
          </div>

          {/* Rendering gallery */}
          <div>
            <h1 className="text-3xl">SnapShots</h1>
            <div className="flex flex-wrap justify-center">
              {tabs[selectedTab].gallery.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={`Gallery ${item.id}`}
                  className="max-w-xs mb-8 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 bg-white rounded-lg shadow-md m-3"
                />
              ))}
            </div>
          </div>

          <div className="flex gap-10 justify-center">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-10 py-3.5 text-center me-2 mb-2">
              Interested
            </button>
            <a
              href={tabs[selectedTab].instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-10 py-3.5 text-center me-2 mb-2">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;

//TEAM HIERARCHY
