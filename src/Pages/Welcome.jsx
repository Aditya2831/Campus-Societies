import React from 'react';
import GeneralSocs from '../Components/GeneralSocs';
import { Link } from 'react-router-dom';
import TechSocieties from './TechSocieties';

import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"


function Welcome() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-violet-800 to-violet-900 overflow-visible">
    <div className="flex flex-col justify-center items-center h-screen ">
     <h1 className="font-chakraPetch text-6xl mb-4" style={{ color: '#e6f2ff' }}>MAITsocs</h1>
<h2 className="font-chakraPetch text-3xl text-center" style={{ color: '#e6f2ff' }}>
  "Connecting Campus Communities: Explore your College Societies"
</h2>

    </div>

    <div className="flex justify-evenly font-chakraPetch">

    

    <Link to="/technical">
 <GeneralSocs img={img1} title="TECHNICAL SOCIETIES" description="Diverse Expressions, Shared Traditions: Celebrating Heritage, Art, and Creativity, Weaving a Tapestry of Cultural Harmony."/>
 </Link>

    <Link to="/x">
<GeneralSocs img={img2} title="Register" description="Register asap"/>
 </Link>

 <Link to="/cultural">
<GeneralSocs img={img3} title="CULTURAL SOCIETIES" description="Diverse Expressions, Shared Traditions: Celebrating Heritage, Art, and Creativity, Weaving a Tapestry of Cultural Harmony."/>
</Link>

<Link to="/communities">
 <GeneralSocs img={img2} title="COMMUNITIES" description="Unity in Diversity, Strength in Numbers: Fostering Belonging, Empowering Voices, and Creating Change for a Better Tomorrow!"/>
 </Link>


    
    </div>

    </div>
  );
}

export default Welcome;
