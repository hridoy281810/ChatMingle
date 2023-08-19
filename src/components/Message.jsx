import React from 'react';
import image1 from '../assets/image/image1.jpg'
import './common.css'
const Message = () => {
    return (
        <div className='flex gap-5 owner'>
            {/* message info */}
       <div className='flex flex-col mb-2 text-gray-500 '>
       <div className="avatar ">
  <div className="w-12 rounded-full">
    <img src={image1} />
  </div>
</div>
<span>Just now</span>
       </div>
         {/* message Content */}
       <div className='max-w-[80%]  flex flex-col gap-3 message-content'>
        <p style={{borderRadius: '0px 10px 10px 10px', maxWidth: 'max-content'}} className='bg-white px-6 py-3 mb-2 mt-2'>Hello</p>
        <img className='w-[50%] overflow-hidden mb-2' src={image1} alt="" />
       </div>
        </div>
    );
};

export default Message;