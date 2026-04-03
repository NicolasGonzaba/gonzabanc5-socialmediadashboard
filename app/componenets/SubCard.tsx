import { Card } from 'flowbite-react/components/Card'
import React from 'react'
import Image from "next/image";

interface Overview {
    mediaIcon: string
    category: string
    statNumber: string
    percent: string
    fontColor: string
    changeArrow: string
    
}

const SubCard = ({ mediaIcon, category, statNumber, percent, fontColor, changeArrow }: Overview) => {
    return (
        <Card href="#" className="max-w-lg w-80 md:w-100 md:h-30 ms-4 me-4 mt-3 mb-3 light-gray hover:dark-gray" >
            <div className='flex justify-between '>
                <h5 className="dark-blue font-bold tracking-tight text-gray-900 dark:text-white">
                    {category}
                </h5>
                <Image alt={category} src={mediaIcon} ></Image>
                </div>
            <div className='dark-blue flex justify-between font-bold'>
                <h3 className='text-3xl'> {statNumber}</h3>
                <div className='flex items-center'>
                    <div className='self-center me-1'>
                    <Image alt='arrow' src={changeArrow} ></Image>
                    </div>
                    <p className={fontColor}>
                        {percent}
                    </p>
                </div>
            </div>
        </Card>
    )
}

export default SubCard