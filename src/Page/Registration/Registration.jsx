import React from 'react';
import { FcAddImage } from "react-icons/fc";
import { Link } from 'react-router-dom';
const Registration = () => {
    return (
        <div className='bg-[#a7bcff] h-[100vh] flex justify-center items-center'>
            <div className='bg-white py-6 px-20 rounded-md'>
           <div className='flex flex-col text-center'>
           <span className='text-2xl font-bold text-blue-400'>ChatMingle</span>
            <span className='text-xl font-semibold'>Register</span>
           </div>
                <form  className='flex flex-col'>
     <div className="form-control">
          <label className="label">
            <span className="label-text">display name</span>
          </label>
          <input  type="text" placeholder="display name" className="input  border-t-0  border-l-0 border-r-0  border-b-4 border-blue-400" />
        </div>
     <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input border-t-0  border-l-0 border-r-0  border-b-4 border-blue-400" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input border-t-0  border-l-0 border-r-0  border-b-4 border-blue-400" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
     <input style={{display: 'none'}} type="file" id='file'/>
     <label className='flex items-center gap-2 cursor-pointer' htmlFor='file'>
       
       < FcAddImage className='text-5xl'/>
       <span className='opacity-50'>Add an avatar</span>
                        </label> 

         <button className='bg-blue-400 text-white p-3 font-bold cursor-pointer mt-4'>Sign up</button>
                </form>
                <span className='text-sm mt-4 text-center'>You do have an account? <Link to='/login'>Login!</Link></span>
            </div>
        </div>
    );
};

export default Registration;