import { ToggleSwitch } from 'flowbite-react';
import React, { useState } from 'react'

const Header = () => {
    const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };
  const [switch1, setSwitch1] = useState(true);

  return (
    <div className="w-full flex justify-between flex-col md:flex-row">
        <div className=' ms-5'>
        <h1 className='text-3xl font-bold'>Social Media Dashboard</h1>
        <p className=" ">Total followers: 23,004</p>
        </div>
        <div className="flex max-w-md items-center flex-row gap-4 me-5 ms-5 ">
            <h3>Dark Mode</h3>
      <ToggleSwitch checked={switch1} onChange={setSwitch1} onClick={toggleDark}/>
    </div>
        
      </div>
  )
}

export default Header