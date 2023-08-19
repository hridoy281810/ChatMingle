import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-[#a7bcff] h-[100vh] flex justify-center items-center'>
            <div className='bg-white py-6 px-20 rounded-md'>
           <div className='flex flex-col text-center'>
           <span className='text-2xl font-bold text-blue-400'>ChatMingle</span>
            <span className='text-xl font-semibold'>Login</span>
           </div>
                <form  className='flex flex-col'>

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

         <button className='bg-blue-400 text-white p-3 font-bold cursor-pointer mt-4'>Sign up</button>
                </form>
                <span className='text-sm mt-4 text-center'>You don't have an account? <Link to='/registration'>Register!</Link></span>
            </div>
        </div>
    );
};

export default Login;