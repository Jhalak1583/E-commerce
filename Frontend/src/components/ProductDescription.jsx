import React, { useState } from 'react';
import care_guide_2 from "../assets/care_guide_2.jpg";
import Size_guide_2 from "../assets/Size_guide_2.png";

const ProductDescription = () => {
  const [activeSection, setActiveSection] = useState('description');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='container mx-auto p-4 mb-8'>
      <div className='flex gap-3 mb-6'>
        <button
          className={`btn_dark_outline !rounded-none !text-xs !py-[9px] w-36 ${activeSection === 'description' ? 'active' : ''}`}
          onClick={() => handleSectionChange('description')}
        >
          Description
        </button>
        <button
          className={`btn_dark_outline !rounded-none !text-xs !py-[6px] w-36 ${activeSection === 'careGuide' ? 'active' : ''}`}
          onClick={() => handleSectionChange('careGuide')}
        >
          Care Guide
        </button>
        <button
          className={`btn_dark_outline !rounded-none !text-xs !py-[6px] w-36 ${activeSection === 'sizeGuide' ? 'active' : ''}`}
          onClick={() => handleSectionChange('sizeGuide')}
        >
          Size Guide
        </button>
      </div>
      <div className='flex flex-col pb-16'>
        {activeSection === 'description' && (
          <div>
            <p className='text-sm mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ipsum quos porro eveniet, provident alias vel minus quibusdam odit explicabo ea, neque inventore veniam repudiandae asperiores assumenda quis illo.</p>
            <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit expedita cumque commodi tempore aliquam ducimus non, modi qui animi in dolorem quaerat sit excepturi repellat libero soluta quibusdam quasi?</p>
          </div>
        )}
        {activeSection === 'careGuide' && (
          <div>
            <p className='text-sm mb-4'>Care instructions for the product will go here. Provide detailed steps on how to take care of the product.</p>
            <p className='text-sm mb-4'>More care instructions can be added here, including any special cleaning methods, storage tips, etc.</p>  
            <img src={care_guide_2} alt="Care Guide" className='mb-4 max-w-full h-auto' />          
          </div>
        )}
        {activeSection === 'sizeGuide' && (
          <div>
            <p className='text-sm mb-4'>Size information for the product will go here. Include details about measurements, sizing charts, and fitting tips.</p>
            <p className='text-sm mb-4'>Additional size information can be added here, helping customers choose the right size for their needs.</p>
            <img src={Size_guide_2} alt="Size Guide" className='mb-4 max-w-full h-auto' />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;




// import React from 'react'

// const ProductDescription = () => {
//   return (
//     <div>
//         <div className='flex gap-3 mb-4'>
//             <button className='!btn_dark_rounded !rounded-nonw !test-xs !py-[6px] w-36'>Description</button>
//             <button className='btn_dark_outline !rounded-nonw !test-xs !py-[6px] w-36'>Care Guide</button>
//             <button className='btn_dark_outline !rounded-nonw !test-xs !py-[6px] w-36'>Size Guide</button>
//         </div>
//         <div className='flex flex-col pb-16'>
//             <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ipsum quos porro eveniet, provident alias vel minus quibusdam odit explicabo ea, neque inventore veniam repudiandae asperiores assumenda quis illo.</p>
//             <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit expedita cumque commodi tempore aliquam ducimus non, modi qui animi in dolorem quaerat sit excepturi repellat libero soluta quibusdam quasi?</p>
//         </div>
//     </div>
//   )
// }

// export default ProductDescription