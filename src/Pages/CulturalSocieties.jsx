
import React, { useState } from "react";
import Cards from "../Components/Card";
import iosd from "../assets/logos/iosd.jpg";
import techXtract from "../assets/logos/techXtract.jpg";

import fim1 from "../assets/Team_members/fim/fim1.png"
import fim2 from "../assets/Team_members/fim/fim2.png"

import aff1 from "../assets/Team_members/affinity/aff1.png"
import aff2 from "../assets/Team_members/affinity/aff2.png"

import exp1 from "../assets/Team_members/expressions/exp1.png"
import exp2 from "../assets/Team_members/expressions/exp2.png"
import exp3 from "../assets/Team_members/expressions/exp3.png"
import exp4 from "../assets/Team_members/expressions/exp4.png"
import exp5 from "../assets/Team_members/expressions/exp5.png"

import key1 from "../assets/Team_members/keyara/key1.png"
import key2 from "../assets/Team_members/keyara/key2.png"
import key3 from "../assets/Team_members/keyara/key3.png"
import key4 from "../assets/Team_members/keyara/key4.png"

import ph1 from "../assets/Team_members/phrenics/ph1.png"
import ph2 from "../assets/Team_members/phrenics/ph2.png"
import ph3 from "../assets/Team_members/phrenics/ph3.png"
import ph4 from "../assets/Team_members/phrenics/ph4.png"






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
      title: "Aayam",
      logo: iosd,
      heading: "Aayam (The Dramatics Society)",
      brief:
        "Aayam, the dramatics society, is a vibrant cultural hub within our college community, comprising passionate individuals who share a love for the performing arts. From seasoned actors to backstage crew, we come together as a close-knit family, bound by our shared enthusiasm for storytelling and creative expression.",
      established: "March 2016",
      vision:
        "Our vision at Aayam is to celebrate the rich tapestry of human experiences through the medium of theater. We strive to captivate audiences with compelling narratives that provoke thought, evoke emotion, and foster empathy. Through our performances, workshops, and outreach initiatives, we aim to ignite a passion for the arts, inspire self-discovery, and promote cultural exchange. By nurturing talent and providing a platform for artistic expression, we seek to leave a lasting impact on our community, enriching lives and fostering a deeper appreciation for the power of storytelling.",
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

      instagramLink:"https://www.instagram.com/aayaam_mait/"


    },



    // FUNK IN MOTION
    {
      id: 1,
      title: "Funk In Motion",
      logo: techXtract, //passing img
      heading: "Funk In Motion",
      brief:
        "Funk In Motion, the Western dance society, is a dynamic cultural force within our college, comprising a diverse group of individuals who share a passion for dance and performance. From seasoned dancers to newcomers, we come together as a tight-knit community, united by our love for movement, rhythm, and expression.",
      established: "March 2016",
      vision:
        "Our vision at Funk In Motion is to ignite the stage with energy, creativity, and innovation, showcasing the vibrant artistry of Western dance forms. We strive to push the boundaries of choreography and performance, delivering electrifying routines that captivate audiences and leave a lasting impression. Through our dedication to excellence, teamwork, and self-expression, we aim to inspire others to embrace their love for dance and join us in celebrating the joy of movement. As ambassadors of rhythm and grace, we aspire to leave a lasting legacy of passion and creativity, enriching our college community and beyond with the infectious spirit of Funk In Motion.",

      team: [
        {
          id: 0,
          name: "Kunal Uppal",
          role: "Vice President",
          image:
            fim1
        },
        {
          id: 1,
          name: "Ayush Aggarwal",
          role: "President",
          image:
           fim2
        },
        // {
        //   id: 2,
        //   name: "Vansh",
        //   role: "General Secreatary",
        //   image:
        //     "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        // },
        // {
        //   id: 3,
        //   name: "Vansh",
        //   role: "General Secreatary",
        //   image:
        //     "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        // },
        // {
        //   id: 4,
        //   name: "Vansh",
        //   role: "General Secreatary",
        //   image:
        //     "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        // },
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
            fim1
        },
        {
          id: 1,
          image:
           fim2
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
      instagramLink:"https://www.instagram.com/funkinmotion/"
    },



// -----------------------------------AFFINITY----------------------------------------------
    {
      id: 2,
      title: "Affinity",
      logo: techXtract, //passing img
      heading: "Affinity",
      brief:
        "Affinity, the musical society, is a harmonious gathering of individuals who share a profound love for music and performance. Comprising singers, instrumentalists, and music enthusiasts, we come together as a close-knit community, united by our passion for creating beautiful melodies and captivating audiences with our artistry.",
      established: "March 2016",
      vision:
        "Our vision at Affinity is to resonate with hearts and minds through the universal language of music. We strive to create immersive musical experiences that evoke emotion, inspire creativity, and foster a sense of connection among our audience. Through our diverse repertoire and dynamic performances, we aim to celebrate the richness of musical traditions and genres, from classical to contemporary, while pushing the boundaries of innovation and expression. As ambassadors of melody and harmony, we seek to leave a lasting impact on our college community and beyond, spreading joy and inspiration through the transformative power of music.",

      team: [
        {
          id: 0,
          name: "Anant Kumar",
          role: "President",
          image:
            aff1
        },
        {
          id: 1,
          name: "Pawan Singh",
          role: "President",
          image:
            aff2
        },
        // {
        //   id: 2,
        //   name: "Vansh",
        //   role: "General Secreatary",
        //   image:
        //     "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        // },
        // {
        //   id: 3,
        //   name: "Vansh",
        //   role: "General Secreatary",
        //   image:
        //     "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        // },
        // {
        //   id: 4,
        //   name: "Vansh",
        //   role: "General Secreatary",
        //   image:
        //     "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        // },
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
      instagramLink:"https://www.instagram.com/mait.affinity/"
    },



    // ------------------------------------------------Expressions-------------------------------------------------------

    {
      id: 3,
      title: "Expressions",
      logo: techXtract,
      heading: "Expressions",
      brief:
        "Expressions, the art and crafts society, is a vibrant community of creative individuals who come together to explore the boundless world of artistic expression. Comprising painters, sculptors, crafters, and enthusiasts, we celebrate the beauty of creativity and imagination in all its forms.",
      established: "March 2016",
      vision:
        "Our vision at Expressions is to cultivate a culture of artistic exploration and self-expression, empowering individuals to unleash their inner creativity and share their unique perspectives with the world. Through a diverse range of artistic mediums and techniques, we aim to inspire, educate, and engage our community in the transformative power of art. From traditional painting and sculpture to contemporary mixed media and digital art, we strive to provide a supportive and inclusive environment where everyone can discover their artistic voice and find joy in the process of creation. As ambassadors of creativity and beauty, we aspire to leave a lasting legacy of inspiration and innovation, enriching our college community and beyond with the richness of Expressions.",
      // ../assets/img1.jpg
      team: [
        {
          id: 0,
          name: "Paridhi Puri",
          role: "Creative Head",
          image:
            exp1
        },
        {
          id: 1,
          name: "Shubham",
          role: "Secreatary",
          image:
            exp2
        },
        {
          id: 2,
          name: "Ishita Kohli",
          role: "President",
          image:
           exp3
        },
        {
          id: 3,
          name: "Ayush Gahalaut",
          role: "Vice President",
          image:
            exp4
        },
        {
          id: 4,
          name: "Akash Jaiswal",
          role: "President",
          image:
            exp5
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
      instagramLink:"https://www.instagram.com/expressions.mait/"
    },


    // --------------------------------KEYARA--------------------------------

    {
      id: 4,
      title: "Keyara",
      logo: techXtract,
      heading: "Keyara",
      brief:
        "Keyara, the fashion society, is a dynamic community of fashion enthusiasts who come together to celebrate style, creativity, and self-expression. Comprising designers, models, stylists, and fashion aficionados, we unite under a shared passion for exploring the ever-evolving world of fashion.",
      established: "March 2016",
      vision:
        "Our vision at Keyara is to redefine the boundaries of fashion and inspire individuals to embrace their unique sense of style. We strive to create a platform where creativity flourishes, trends are challenged, and diversity is celebrated. Through our fashion shows, workshops, and collaborative projects, we aim to showcase the beauty of self-expression and empower individuals to express themselves confidently through their clothing and accessories. As ambassadors of style and innovation, we seek to leave a lasting impact on our college community and beyond, inspiring others to embrace fashion as a form of art and self-expression.",
      // ../assets/img1.jpg
      team: [
        {
          id: 0,
          name: "Sonu Verma",
          role: "Creative Head",
          image:
            key1
        },
        {
          id: 1,
          name: "Sejal Srivastava",
          role: "Vice President",
          image:
            key3
        },
        {
          id: 2,
          name: "Anish Saxena",
          role: "President",
          image:
           key4
        },
        {
          id: 3,
          name: "Harsh Singh",
          role: "Creative Head",
          image:
            key2
        },
        // {
        //   id: 4,
        //   name: "Vansh",
        //   role: "General Secreatary",
        //   image:
        //     "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        // },
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
      instagramLink:"https://www.instagram.com/keyara_official/"
    },





// -----------------------------------LITUM----------------------------------------------
    {
      id: 5,
      title: "Literary Umbrella",
      heading: "Literary Umbrella",
      logo:techXtract,
      brief:
        "Literary Umbrella, the literary society, is a vibrant community of wordsmiths and book lovers who come together to celebrate the written word in all its forms. Comprising poets, writers, readers, and lovers of literature, we unite under a shared passion for storytelling, expression, and exploration of ideas.",
      established: "March 2016",
      vision:
        "Our vision at Literary Umbrella is to cultivate a space where creativity flourishes, ideas are exchanged, and voices are heard. We strive to promote literacy and a love for literature through various activities such as book clubs, writing workshops, poetry slams, and literary events. Through our collective efforts, we aim to inspire and empower individuals to discover the transformative power of words and harness their own voices to express themselves and provoke thought. As ambassadors of literature and literacy, we aspire to leave a lasting impact on our college community and beyond, fostering a culture of intellectual curiosity, empathy, and understanding through the umbrella of literature.",
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
      instagramLink:"https://www.instagram.com/literaryumbrella/"

    },


    // -------------------------------Phrenics----------------------------

    {
      id: 6,
      title: "Phrenics",
      logo: iosd,
      heading: "PHRENICS",
      brief:
        "Phrenics, the videography and photography society, is a dynamic community of visual storytellers and creatives who come together to capture and showcase the world through the lens. Comprising photographers, videographers, editors, and enthusiasts, we unite under a shared passion for visual arts and storytelling.",
      established: "March 2016",
      vision:
        "Our vision at Phrenics is to harness the power of imagery to inspire, educate, and connect people across boundaries. We strive to cultivate a culture of creativity and innovation, empowering individuals to explore their unique perspectives and tell compelling stories through photography and videography. Through workshops, photo walks, exhibitions, and collaborative projects, we aim to provide a platform for members to develop their skills, share their work, and engage with the community. As ambassadors of visual storytelling, we aspire to leave a lasting impact on our college community and beyond, capturing moments, sparking conversations, and celebrating the beauty and diversity of the world through the lens of Phrenics.",
      // ../assets/img1.jpg
      team: [
        {
          id: 0,
          name: "Vansh",
          role: "General Secreatary",
          image:
            ph1
        },
        {
          id: 1,
          name: "Vansh",
          role: "General Secreatary",
          image:
            ph2
        },
        {
          id: 2,
          name: "Vansh",
          role: "General Secreatary",
          image:
           ph3
        },
        {
          id: 3,
          name: "Vansh",
          role: "General Secreatary",
          image:
            ph4
        },
        // {
        //   id: 4,
        //   name: "Vansh",
        //   role: "General Secreatary",
        //   image:
        //     "https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
        // },
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
      instagramLink:"https://www.instagram.com/phrenics.mait/"
    },
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
            <h1 className="text-3xl">Meet Our Team</h1>
            <div className="flex justify-evenly">
              {tabs[selectedTab].team.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center mr-4 justify-evenly">
                  <img
                    src={member.image}
                    alt={member.name}
                    className=" w-34 h-34 mb-2"
                  />
                  <p>{member.name}</p>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rendering achievements */}
          <div className="achievements">
            <h1 className="text-3xl">Achievements</h1>
            <VerticalTimeline className="text-black">
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
              INTERESTED
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




















// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

//  const TechSocieties = () => {
//   return (
//     <>
//      <div className="bg-gradient-to-r from-purple-900 via-purple-400 to-purple-900 pb-12">
//     <div>
//     <h1 className="text-7xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-chakraPetch pt-10 mb-10">CULTURAL SOCIETIES</h1>
//     </div>

//     <Swiper
//     effect={'coverflow'}
//     modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
//       spaceBetween={50}
//       slidesPerView={3}
//       coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//       navigation
//       pagination={{ clickable: true }}
      
//       scrollbar={{ draggable: true }}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >

//       <SwiperSlide className="w-64"><img src="https://th.bing.com/th/id/OIG4.PUDHnwXx2jG_BQcYonMl?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" /></SwiperSlide>

//       <SwiperSlide className="w-64"><img src="https://th.bing.com/th/id/OIG4.PUDHnwXx2jG_BQcYonMl?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" /></SwiperSlide>

//       <SwiperSlide  className="w-64"><img src="https://th.bing.com/th/id/OIG4.PUDHnwXx2jG_BQcYonMl?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" /></SwiperSlide>

//       <SwiperSlide  className="w-64"><img src="https://th.bing.com/th/id/OIG4.PUDHnwXx2jG_BQcYonMl?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" /></SwiperSlide>

//       <SwiperSlide className="w-64"><img src="https://th.bing.com/th/id/OIG4.PUDHnwXx2jG_BQcYonMl?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" /></SwiperSlide>

//       <SwiperSlide className="w-64"><img src="https://th.bing.com/th/id/OIG4.PUDHnwXx2jG_BQcYonMl?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" /></SwiperSlide>

//     </Swiper>
// </div>
//     </>
//   )
// }

// export default TechSocieties;
