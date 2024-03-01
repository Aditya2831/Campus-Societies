import React from 'react';
import GeneralSocs from '../Components/GeneralSocs';
import { Link } from 'react-router-dom';
import TechSocieties from './TechSocieties';

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
 <GeneralSocs img="https://th.bing.com/th/id/OIG4.PUDHnwXx2jG_BQcYonMl?w=1024&h=1024&rs=1&pid=ImgDetMain" title="CULTURAL SOCIETIES" description="Diverse Expressions, Shared Traditions: Celebrating Heritage, Art, and Creativity, Weaving a Tapestry of Cultural Harmony."/>
 </Link>

 <Link></Link>
<GeneralSocs img="https://th.bing.com/th/id/OIG2.7siZyBaEKebX5tkKxmE1?pid=ImgGn" title="CULTURAL SOCIETIES" description="Diverse Expressions, Shared Traditions: Celebrating Heritage, Art, and Creativity, Weaving a Tapestry of Cultural Harmony."/>

 <GeneralSocs img="https://th.bing.com/th/id/OIG4.QQkOKr_NLJBkPzFvzkq0?pid=ImgGn" title="COMMUNITIES" description="Unity in Diversity, Strength in Numbers: Fostering Belonging, Empowering Voices, and Creating Change for a Better Tomorrow!"/>


    
    </div>

    </div>
  );
}

export default Welcome;
