import React from 'react';
import image1 from '../assets/image/image1.jpg'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-3 h-16 bg-[#2f2d52] text-[#ddddf7]'>
            <span className='tex-xl font-bold'>ChatMingle</span>
            <div className='inline-flex justify-center items-center gap-3'>
                <div className="avatar">
                    <div className="w-7 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2">
                        <img src={image1} />
                    </div>
                </div>
                <h4 className=' font-semibold'>Anis</h4>
                <button className='bg-[#5d5b8d] text-[#ddddf7] border-none rounded-md px-1 py-1 cursor-pointer'>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;