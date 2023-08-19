import React from 'react';
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaUserPlus} from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import Messages from './Messages';
import Input from './Input';
const Chat = () => {
    return (
        <div style={{flex: 2}} className=''>
        <div className='flex justify-between items-center p-3 h-16 bg-[#5d5b8d] text-gray-200 '>
           <h3 className='text-xl'>Anis</h3>
           <div className='flex justify-center gap-4 text-xl cursor-pointer'>
            <BsFillCameraVideoFill />
            <FaUserPlus />
            <FiMoreHorizontal />
           </div>
        </div>
        <Messages ></Messages>
        <Input />
        </div>
    );
};

export default Chat;