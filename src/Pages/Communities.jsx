
import React, { useState } from "react";
import Cards from "../Components/Card";
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
      established: "March 2016",
      vision:
        "Our vision at IOSD is to be a beacon of excellence in nurturing and empowering the future leaders of the software industry. We envision a world where every aspiring software developer is equipped with the skills, knowledge, and ethical values necessary to make impactful contributions to society. Through our initiatives, we seek to foster a culture of innovation, collaboration, and inclusivity, inspiring our members to push the boundaries of what is possible and create positive change in the world through technology.",
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
    },



    // TECHXTRACT
    {
      id: 1,
      title: "TECHXTRACT",
      logo: techXtract, //passing img
      heading: "TechXtract",
      brief:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
      established: "March 2016",
      vision:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",

      team: [
        {
          id: 0,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 1,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 2,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 3,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 4,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
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
    },



// -----------------------------------TECHCOM----------------------------------------------
    {
      id: 2,
      title: "TECHCOM",
      logo: techXtract, //passing img
      heading: "TECHCOM",
      brief:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
      established: "March 2016",
      vision:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",

      team: [
        {
          id: 0,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 1,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 2,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 3,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
        },
        {
          id: 4,
          name: "Vansh",
          role: "General Secreatary",
          image:
            "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
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
    },



    // ------------------------------------------------ATOM-------------------------------------------------------

    {
      id: 3,
      title: "A.T.O.M",
      logo: techXtract,
      heading: "A.T.O.M",
      brief:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
      established: "March 2016",
      vision:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
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
    },


    // --------------------------------TECHVISION--------------------------------

    {
      id: 4,
      title: "TECHVISION",
      logo: techXtract,
      heading: "TECHVISION",
      brief:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
      established: "March 2016",
      vision:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
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
    },






    {
      id: 5,
      title: "TECHALLIANCE",
      heading: "TECHALLIANCE",
      logo:techXtract,
      brief:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
      established: "March 2016",
      vision:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
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
    },


    // -------------------------------eDC----------------------------

    {
      id: 6,
      title: "eDC",
      logo: iosd,
      heading: "Enterpreneurship and Development Cell",
      brief:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
      established: "March 2016",
      vision:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
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
    },

    // ---------------------------CSI------------------------------------------------

    {
      id: 7,
      title: "CSI",
      logo: iosd,
      heading: "Computer Society Of India",
      brief:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
      established: "March 2016",
      vision:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
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
    },



    // ---------------------------------------------IEEE--------------------------------------
    {
      id: 8,
      title: "IEEE",
      logo: iosd,
      heading: "Institute Of Electrical and Electronic Engineers",
      brief:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
      established: "March 2016",
      vision:
        "In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
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

          <div>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-10 py-3.5 text-center me-2 mb-2">
              INTERESTED
            </button>
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
//     <h1 className="text-7xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-chakraPetch mb-10">COMMUNITIES</h1>
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
//     </div>
//     </>
//   )
// }

// export default TechSocieties;
