import React from 'react';
import image1 from '../assets/image/image1.jpg'
const Chats = () => {
    return (
        <div>
 <div className='flex p-3 items-center gap-4 cursor-pointer text-white hover:bg-[#2f2d52]'>
  <div className="avatar online">
  <div className="w-12 rounded-full">
    <img src={image1} />
  </div>
</div>
<div className='mb-2'>
<p className='font-semibold'>jony dev</p>
<p className='text-sm'>Thank you bro!</p>
</div>
  </div>
 <div className='flex p-3 items-center gap-4 cursor-pointer text-white hover:bg-[#2f2d52]'>
  <div className="avatar online">
  <div className="w-12 rounded-full">
    <img src={image1} />
  </div>
</div>
<div className='mb-2'>
<p className='font-semibold'>jony dev</p>
<p className='text-sm'>Thank you bro!</p>
</div>
  </div>
 <div className='flex p-3 items-center gap-4 cursor-pointer text-white hover:bg-[#2f2d52]'>
  <div className="avatar offline">
  <div className="w-12 rounded-full">
    <img src={image1} />
  </div>
</div>
<div className='mb-2'>
<p className='font-semibold'>jony dev</p>
<p className='text-sm'>Thank you bro!</p>
</div>
  </div>
 <div className='flex p-3 items-center gap-4 cursor-pointer text-white hover:bg-[#2f2d52]'>
  <div className="avatar offline">
  <div className="w-12 rounded-full">
    <img src={image1} />
  </div>
</div>
<div className='mb-2'>
<p className='font-semibold'>jony dev</p>
<p className='text-sm'>Thank you bro!</p>
</div>
  </div>
        </div>
    );
};

export default Chats;