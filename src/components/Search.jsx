import React from 'react';
import image1 from '../assets/image/image1.jpg'
const Search = () => {
    return (
        <div className=' border-b-2  border-b-gray-600'>
              <input type="text" placeholder="Find user" className="w-full bg-transparent outline-none text-white px-2 py-3" />
  <div className='flex p-3 items-center gap-4 cursor-pointer text-white hover:bg-[#2f2d52]'>
  <div className="avatar ">
  <div className="w-12 rounded-full">
    <img src={image1} />
  </div>
</div>
<p className='font-semibold'>jony dev</p>
  </div>
        </div>
    );
};

export default Search;