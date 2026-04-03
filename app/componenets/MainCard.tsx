import { Card } from 'flowbite-react/components/Card'
import Image from "next/image";
import twitter from '@/public/images/icon-twitter.svg'

 interface media{
        mediaIcon: string
        mediaName: string
        followerCount: string
        followerArrow: string
        followerChange: string
        fontColor: string
        mainClass:string
    }
const MainCard = ({mediaIcon, mediaName, followerCount,followerArrow, followerChange, fontColor, mainClass}: media) => {
  return (
    <Card href="#" className={mainClass}>
        <div className='flex justify-center'>
        <Image alt={mediaName} src={mediaIcon} ></Image>
        <p className="dark-gray font-bold  text-gray-700 dark:text-gray-400 ms-5">
        {mediaName}
      </p></div>
      <h5 className="text-5xl dark-blue font-bold tracking-tight text-gray-900 dark:text-white">
        {followerCount}
      </h5>
      <p className='dark-gray'>F O L L O W E R S</p>
      <div className='flex justify-center font-bold'>
       <div className='self-center me-1'>
                           <Image alt='arrow' src={followerArrow} ></Image>
                           </div>
      <p className={fontColor}>
        {followerChange} Today
      </p></div>
    </Card>
  )
}

export default MainCard