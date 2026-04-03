"use client"

import Image from "next/image";
import MainCard from "./componenets/MainCard";
import facebook from '@/public/images/icon-facebook.svg'
import twitter from '@/public/images/icon-twitter.svg'
import instagram from '@/public/images/icon-instagram.svg'
import youtube from '@/public/images/icon-youtube.svg'

import down from '@/public/images/icon-down.svg'
import up from '@/public/images/icon-up.svg'
import SubCard from "./componenets/SubCard";
import { useThemeMode } from "flowbite-react";
import ThemeToggle from "./componenets/ThemeToggle";
import Header from "./componenets/Header";


export default function Home() {
  
  return (
    <div className="flex flex-col flex-1 h-full items-center  bg-zinc-50 font-sans dark:bg-black ">
      
      <div className="  items-center min-w-full mt-7 mb-7">
       <Header></Header> 
      </div>
      <div className="flex flex-col max-w-full md:flex-row">
      <MainCard mediaName="@nathanf" mediaIcon={facebook} followerCount="1987" followerArrow={up} followerChange='12' fontColor="lime-green" mainClass="max-w-lg w-80 md:w-100 md:h-60 text-center m-4 light-gray border-t-5 Facebook card:hover"></MainCard>
      <MainCard mediaName="@nathanf" mediaIcon={twitter} followerCount="1044" followerArrow={up} followerChange='99' fontColor="lime-green" mainClass="max-w-lg w-80 md:w-100 md:h-60 text-center m-4 light-gray  border-t-5 Twitter"></MainCard>
      <MainCard mediaName="@realnathanf" mediaIcon={instagram} followerCount="11K" followerArrow={up} followerChange='1099' fontColor="lime-green" mainClass="max-w-lg w-80 md:w-100 md:h-60 text-center m-4 light-gray  border-t-5 Instagram"></MainCard>
      <MainCard mediaName="Nathan F." mediaIcon={youtube} followerCount="8239" followerArrow={down} followerChange='144' fontColor="bright-red" mainClass="max-w-lg w-80 md:w-100 md:h-60 text-center m-4 light-gray  border-t-5 youtube"></MainCard>
      </div>
      <h1 className="self-start font-bold m-5 text-3xl ">Overview - Today</h1>
     
      <div className="flex flex-col max-w-full md:flex-row">
        <SubCard mediaIcon={facebook} category="Page Views" statNumber="87" percent="3%" fontColor="lime-green" changeArrow={up} ></SubCard>
        <SubCard mediaIcon={facebook} category="Likes" statNumber="52" percent="2%" fontColor="bright-red" changeArrow={down} ></SubCard>
        <SubCard mediaIcon={instagram} category="Likes" statNumber="5462" percent="2257%" fontColor="lime-green" changeArrow={up} ></SubCard>
        <SubCard mediaIcon={instagram} category="Profile Views" statNumber="52k" percent="1375%" fontColor="lime-green" changeArrow={up} ></SubCard>
      </div>
      <div className="flex flex-col max-w-full md:flex-row">
        <SubCard mediaIcon={twitter} category="Retweets" statNumber="117" percent="303%" fontColor="lime-green" changeArrow={up} ></SubCard>
        <SubCard mediaIcon={twitter} category="Likes" statNumber="507" percent="553%" fontColor="lime-green" changeArrow={up} ></SubCard>
        <SubCard mediaIcon={youtube} category="Likes" statNumber="107" percent="3%" fontColor="bright-red" changeArrow={down} ></SubCard>
        <SubCard mediaIcon={youtube} category="Total views" statNumber="1407" percent="3%" fontColor="bright-red" changeArrow={down} ></SubCard>
      </div>
      
    </div>
    
  );
}
