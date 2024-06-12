
import React, { useState } from "react";
import Cards from "../Components/Card";
import iosd from "../assets/logos/iosd.jpg";
import techXtract from "../assets/logos/techXtract.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';




import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";


import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";



import edc1 from "../assets/Team_members/edc/edc1.png"
import edc2 from "../assets/Team_members/edc/edc2.png"
import edc3 from "../assets/Team_members/edc/edc3.png"
import edc4 from "../assets/Team_members/edc/edc4.png"
import edc5 from "../assets/Team_members/edc/edc5.png"

import ieee1 from "../assets/Team_members/ieee/ieee1.png"
import ieee2 from "../assets/Team_members/ieee/ieee2.png"
import ieee3 from "../assets/Team_members/ieee/ieee3.png"
import ieee4 from "../assets/Team_members/ieee/ieee4.png"


import nss1 from "../assets/Team_members/nss/nss1.png"
import nss2 from "../assets/Team_members/nss/nss2.png"
import nss3 from "../assets/Team_members/nss/nss3.png"
import nss4 from "../assets/Team_members/nss/nss4.png"

const ServiceComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
   

    {
      id: 0,
      title: "eDC",
      logo: iosd,
      heading: "Enterpreneurship and Development Cell",
      brief:
        "eDC (Entrepreneurship and Development Cell) is a vibrant society dedicated to fostering an entrepreneurial spirit and promoting socio-economic development among students. Comprising enthusiastic members from diverse backgrounds, we are united by a common passion for innovation, creativity, and social impact.",
      established: "March 2016",
      vision:
        "Our vision at eDC is to cultivate a culture of entrepreneurship and sustainable development within our college community and beyond. We aspire to empower students to turn their ideas into viable ventures, creating solutions to real-world problems and driving economic growth. Through a range of initiatives including workshops, mentoring programs, and networking events, we aim to provide students with the skills, resources, and support they need to succeed as entrepreneurs and changemakers. By fostering collaboration and fostering a spirit of innovation, we strive to contribute to the creation of a more prosperous and equitable society.",
      // ../assets/img1.jpg
      team: [
        {
          id: 0,
          name: "Ajeet",
          role: "Event Head",
          image:
            edc1,
        },
        {
          id: 1,
          name: "Kriti",
          role: "Social Media Head",
          image:
            edc2,
        },
        {
          id: 2,
          name: "Tripti",
          role: "General Secreatary",
          image:
            edc3,
        },
        {
          id: 3,
          name: "Gaurav",
          role: "Vice President",
          image:
            edc4,
        },
        {
          id: 4,
          name: "Sehaj",
          role: "President",
          image:
            edc5,
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
      instagramLink:"https://www.instagram.com/edcell.mait/"
    },




    {
      id: 1,
      title: "IEEE",
      logo: iosd,
      heading: "Institute Of Electrical and Electronic Engineers",
      brief:
        "IEEE, the Institute of Electrical and Electronics Engineers, stands as a global powerhouse in the realm of technology and engineering. With a massive network spanning across continents, IEEE brings together professionals, researchers, and students alike, fostering collaboration and innovation in various domains of electrical and electronics engineering.",
      established: "March 2016",
      vision:
        "Our vision at IEEE is to be the driving force behind transformative advancements in technology that shape the future of humanity. We strive to lead the charge in pushing the boundaries of what's possible, from pioneering breakthroughs in renewable energy and sustainable technologies to revolutionizing communication systems and artificial intelligence. Through our extensive network of chapters, conferences, publications, and technical activities, we aim to inspire, educate, and empower our members to make meaningful contributions to society and drive positive change on a global scale.",
      // ../assets/img1.jpg
      team: [
        {
          id: 0,
          name: "Divyansh Juneja",
          role: "Chairperson",
          image:
           ieee1,
        },
        {
          id: 1,
          name: "Eshita Aishwarya",
          role: "Chairperson",
          image:
           ieee2,
        },
        {
          id: 2,
          name: "Vridhi Garg",
          role: "WIE Chairperson",
          image:
            ieee3,
        },
        {
          id: 3,
          name: "Shivam Gulati",
          role: "Chairperson",
          image:
           ieee4,
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
      instagramLink:"https://www.instagram.com/ieeemait/"
    },


    {
      id: 2,
      title: "NSS",
      logo: iosd,
      heading: "National Service Scheme",
      brief:
        "The National Service Scheme (NSS), launched in 1969 under the Ministry of Youth Affairs and Sports, Government of India, encourages students to participate in community service and social activities. It aims to develop students' personalities through involvement in various initiatives such as health camps, literacy programs, gain valuable life skills, enhance their understanding of societal issues, and contribute positively to the community.",
      established: "March 2016",
      vision:
        "The vision of the National Service Scheme (NSS) is to cultivate a dedicated and socially responsible youth community committed to the nation's development. NSS aspires to nurture leadership, empathy, and a spirit of volunteerism among students, enabling them to address local and national challenges effectively. By promoting active participation in community service, NSS aims to create a generation of proactive citizens",
      // ../assets/img1.jpg
      team: [
        {
          id: 0,
          name: "Jasjeev Singh kohli",
          role: "Social Media Head",
          image:
           nss1,
        },
        {
          id: 1,
          name: "Vasu Singh",
          role: "ChairpersGeneral Secretary",
          image:
           nss2,
        },
        {
          id: 2,
          name: "Anushka Bhat",
          role: "Head Girl",
          image:
            nss3,
        },
        {
          id: 3,
          name: "Nikhil Kumar",
          role: "Head Boy",
          image:
           nss4,
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
      instagramLink:"https://www.instagram.com/ieeemait/"
    },

    {
      id: 3,
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

