import React from 'react';
import { MdAttachFile } from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";
const Input = () => {
    return (
        <div className='p-3 h-16 bg-white flex justify-between items-center '>
        <input className='outline-none w-full placeholder:text-gray-400' type="text"  placeholder='Type something...'/>
       <div className='flex items-center gap-4 text-2xl text-gray-500'>
 
     <MdAttachFile className='cursor-pointer' />
        <input type="file" style={{display: 'none'}} id='file' />
        <label htmlFor="file">
            <BiImageAdd className='cursor-pointer' />
        </label>
        <button className='cursor-pointer border-none px-3 py-2 text-xl bg-[#8da4f1] text-white font-semibold'>Send</button>
     
       </div>
        </div>
    );
};

export default Input;