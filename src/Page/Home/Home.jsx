import React from 'react';
import Sidebar from '../../components/Sidebar';
import Chat from '../../components/Chat';


const Home = () => {
    return (
        <div className='bg-[#a7bcff] h-[100vh] flex justify-center items-center'>
        <div className='flex border-2 border-white rounded w-[65%] h-[80%] overflow-hidden'>
        <Sidebar />
          <Chat />
        </div>
        </div>
    );
};

export default Home;