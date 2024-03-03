import React, { useState } from "react";
import Cards from "../Components/Card";
import iosd from "../assets/logos/iosd.jpg"
import techXtract from "../assets/logos/techXtract.jpg"


const ServiceComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
   
    {
      id: 0,
      title: "IOSD",
      logo:iosd, 
      heading: "International Organisation Of Software Developers",
      brief:"In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
      established:"March 2016",
      vision:"In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
// ../assets/img1.jpg
      team:[
        {
          id:0,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:1,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:2,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:3,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:4,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
      ],

      achievements:[
        <ul>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
        </ul>
      ],

      gallery:[
        {
          id:0,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:1,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:2,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:3,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:4,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        }
      ],

      content:
        "At Prosecdevs, we are your one-stop destination for a wide spectrum of web and app development services that combine innovation, security, and functionality. Our expert team is driven by the desire to create digital solutions that not only meet your needs but exceed your expectations. With a focus on secure coding practices, we deliver projects that are robust, scalable, and geared towards success.",
    },




    // TECHXTRACT
    {
      id: 1,
      title: "TECHXTRACT",
      logo:techXtract, //passing img
      heading: "TechXtract",
      brief:"In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
      established:"March 2016",
      vision:"In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",

      team:[
        {
          id:0,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:1,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:2,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:3,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:4,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
      ],

      achievements:[
        <ul>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
        </ul>
      ],

      gallery:[
        {
          id:0,
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:1,
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:2,
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:3,
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:4,
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        }
      ],
    },



    {
      id: 2,
      title: "TECHCOM",
      logo:techXtract, //passing img
      heading: "TechXtract",
      brief:"In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
      established:"March 2016",
      vision:"In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",

      team:[
        {
          id:0,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:1,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:2,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:3,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:4,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
      ],

      achievements:[
        <ul>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
        </ul>
      ],

      gallery:[
        {
          id:0,
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:1,
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:2,
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:3,
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        },
        {
          id:4,
          image:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
        }
      ],
    },








    {
      id: 3,
      title: "A.T.O.M",
      logo:techXtract, 
      heading: "A.T.O.M",
      brief:"In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
      established:"March 2016",
      vision:"In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
// ../assets/img1.jpg
      team:[
        {
          id:0,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:1,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:2,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:3,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:4,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
      ],

      achievements:[
        <ul>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
        </ul>
      ],

      gallery:[
        {
          id:0,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:1,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:2,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:3,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:4,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        }
      ],

      content:
        "At Prosecdevs, we are your one-stop destination for a wide spectrum of web and app development services that combine innovation, security, and functionality. Our expert team is driven by the desire to create digital solutions that not only meet your needs but exceed your expectations. With a focus on secure coding practices, we deliver projects that are robust, scalable, and geared towards success.",
    },


    {
      id: 4,
      title: "TECHVISION",
      heading: "UI/UX Design",
      content:
        "User experience can make or break digital success. Our UI/UX designers are dedicated to crafting interfaces that not only look stunning but also provide an intuitive journey for users. We understand the importance of aesthetics and functionality, ensuring your users have a delightful experience that keeps them coming back.    ",
    },
    {
      id: 5,
      title: "TECHALLIANCE",
      heading: "Security Audits",
      content:
        "Security isnt just a feature - its a foundation. Our security audits scrutinize every aspect of your digital solution, identifying potential vulnerabilities and implementing rigorous security measures to safeguard against threats. With Prosecdevs, your data and user information are in the safest hands",
    },

    {
      id: 6,
      title: "eDC",
      logo:iosd, 
      heading: "International Organisation Of Software Developers",
      brief:"In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
      established:"March 2016",
      vision:"In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
// ../assets/img1.jpg
      team:[
        {
          id:0,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:1,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:2,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:3,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:4,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
      ],

      achievements:[
        <ul>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
        </ul>
      ],

      gallery:[
        {
          id:0,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:1,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:2,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:3,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:4,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        }
      ],

      content:
        "At Prosecdevs, we are your one-stop destination for a wide spectrum of web and app development services that combine innovation, security, and functionality. Our expert team is driven by the desire to create digital solutions that not only meet your needs but exceed your expectations. With a focus on secure coding practices, we deliver projects that are robust, scalable, and geared towards success.",
    },

    {
      id: 7,
      title: "CSI",
      logo:iosd, 
      heading: "International Organisation Of Software Developers",
      brief:"In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
      established:"March 2016",
      vision:"In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
// ../assets/img1.jpg
      team:[
        {
          id:0,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:1,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:2,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:3,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:4,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
      ],

      achievements:[
        <ul>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
        </ul>
      ],

      gallery:[
        {
          id:0,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:1,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:2,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:3,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:4,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        }
      ],

      content:
        "At Prosecdevs, we are your one-stop destination for a wide spectrum of web and app development services that combine innovation, security, and functionality. Our expert team is driven by the desire to create digital solutions that not only meet your needs but exceed your expectations. With a focus on secure coding practices, we deliver projects that are robust, scalable, and geared towards success.",
    },

    {
      id: 8,
      title: "IEEE",
      logo:iosd, 
      heading: "International Organisation Of Software Developers",
      brief:"In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
      established:"March 2016",
      vision:"In the heart of the bustling city, amidst the towering skyscrapers and bustling streets, lies a hidden gem of tranquility. Here, time seems to slow down, and the rhythm of life follows a different beat. As the sun sets, casting a warm glow over the horizon, the city comes alive with a kaleidoscope of colors and sounds. People from all walks of life gather, sharing stories and laughter under the starlit sky. It's a place where dreams are born and memories are made, a sanctuary in the midst of chaos.",
// ../assets/img1.jpg
      team:[
        {
          id:0,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:1,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:2,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:3,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
        {
          id:4,
          name:"Vansh",
          role:"General Secreatary",
          image:"https://th.bing.com/th/id/OIG4.hbisd8gn4i7P5YuPi3WQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
        },
      ],

      achievements:[
        <ul>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
          <li>1st Runner Up in Make-It-Happen Hackathon, Organized by GTBIT Delhi</li>
        </ul>
      ],

      gallery:[
        {
          id:0,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:1,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:2,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:3,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        },
        {
          id:4,
          image:"https://th.bing.com/th/id/OIG4.iOsWOgZ92XCvp8G_gmVm?pid=ImgGn"
        }
      ],

      content:
        "At Prosecdevs, we are your one-stop destination for a wide spectrum of web and app development services that combine innovation, security, and functionality. Our expert team is driven by the desire to create digital solutions that not only meet your needs but exceed your expectations. With a focus on secure coding practices, we deliver projects that are robust, scalable, and geared towards success.",
    },
  ];

  return (
    <div className="flex text-center font-chakraPetch ">
     <div className="md:w-1/5 md:border-r ml-1 mt-1 ">
  {/* Designing left navbar */}
  {tabs.map((tab) => (
    <div
      key={tab.id}
      className={`cursor-pointer bg-[#0f1a2e] p-2 flex items-center md:h-[80px] h-[65px] border-t border-b ${
        selectedTab === tab.id ? "text-gray-950 bg-gray-300" : "text-white transition duration-300 hover:bg-gradient-to-r from-gray-900 to-blue-800"
      }`}
      onClick={() => setSelectedTab(tab.id)}
    >
      {/* Render the logo image */}
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

          <img src={tabs[selectedTab].logo} alt={tabs[selectedTab].title} className="w-40 h-30 mr-2 rounded-md ml-2" />
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
              <div key={member.id} className="flex flex-col items-center mr-4 justify-evenly">
                <img src={member.image} alt={member.name} className=" w-34 h-34 mb-2" />
                <p>{member.name}</p>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
          </div>

          {/* Rendering achievements */}
          <div>
            <h1 className="text-3xl">Achievements</h1>
            <ul>
              {tabs[selectedTab].achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
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
          
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;

//TEAM HIERARCHY