'use client';
import { Card } from 'flowbite-react';
import React from 'react';

function GeneralSocs({ img, title, description }) {
  return (
    <Card
      className="max-w-xs mb-8 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 bg-white rounded-lg shadow-md"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={img}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
        {description}
      </p>
    </Card>
  );
}

export default GeneralSocs;







// // GeneralSocs.js
// import { Card } from 'flowbite-react';
// import React from 'react';

// function GeneralSocs({ img, title, description }) {
//   return (
//     <Card className="max-w-xs mb-8 overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
//       <img src={img} alt="Meaningful alt text" className="w-full h-40 object-cover" />
//       <div className="p-4">
//         <h5 className="text-2xl font-bold text-gray-900 mb-2">{title}</h5>
//         <p className="text-gray-700">{description}</p>
//       </div>
//     </Card>
//   );
// }

// export default GeneralSocs;
