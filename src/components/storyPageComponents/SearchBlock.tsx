import { Search, Filter } from 'lucide-react';
import React, { useState } from 'react'
import { Input } from '../ui/input';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

interface SearchBlockPropType{
    // Criterial: string;
    SetCriterial:(val:string)=>void; 
    // OnsearchStory: string; 
    SetOnSearchStory: (val:string)=>void;
}

export default function SearchBlock({ SetCriterial, SetOnSearchStory}: SearchBlockPropType) {
    const [onSearchStory, setOnSearchStory] = useState("")
    const [criterial, setCriterial] = useState("user")

    function handleInput(val:string) {
        setOnSearchStory(val)
        SetOnSearchStory(val)
    }
    function handleCriterial(val:string) {
        setCriterial(val)
        SetCriterial(val)
    }

      const renderDot = (isActive: boolean) => (
    isActive && <span className="h-3 w-3 rounded-full bg-colorTextBlue inline-block mr-1" />
  );

  return (
    <header className='flex justify-between max-[400px]:flex-wrap max-[350px]:p-2 w-full items-center shadow-lg  p-5 bg-colorBackgroundComponent rounded-lg mb-4'>
    <div className="title text-black dark:text-gray-300 font-bold text-2xl">
      Storie
    </div>
    <div className="search flex gap-2 max-[250px]:flex-wrap ">
      <div className="relative">
      <Input type='search' placeholder={`search by ${criterial}`} value={onSearchStory} onChange={(e)=>handleInput(e.target.value)} className='h-12 bg-gray-100 dark:bg-[#1A2236] w-[206px] max-[420px]:w-[120px]  rounded-lg py-2 pl-6 pr-2 placeholder:font-thin placeholder:text-sm'/>
      <Search size={16} className='absolute top-1/2  right-1 transform -translate-y-1/2 text-gray-500 dark:text-gray-200' />
      </div>
      <div className="bg-gray-100 dark:bg-[#1A2236] flex justify-center items-center p-2 rounded-lg cursor-pointer">
        <Popover>
            <PopoverTrigger>
                <Filter className="text-gray-500 dark:text-gray-200"/>
            </PopoverTrigger>
            <PopoverContent className='flex flex-col'>
            <div onClick={() => handleCriterial("user")} className="border-b text-colorTextStrongDefault transition ease-in-out delay-150 cursor-pointer mt-2 flex items-center">
                {renderDot(criterial === "user")}
                User Name
              </div>
              <div onClick={() => handleCriterial("sex")} className="border-b text-colorTextStrongDefault transition ease-in-out delay-150 cursor-pointer mt-2 flex items-center">
                {renderDot(criterial === "sex")}
                Sex
              </div>
              <div onClick={() => handleCriterial("time")} className="border-b text-colorTextStrongDefault transition ease-in-out delay-150 cursor-pointer mt-2 flex items-center">
                {renderDot(criterial === "time")}
                Time
              </div>
              <div onClick={() => handleCriterial("")} className="border-b text-colorTextStrongDefault transition ease-in-out delay-150 cursor-pointer mt-2 flex items-center">
                {renderDot(criterial === "")}
                Reset
              </div>
            </PopoverContent>
        </Popover>
      </div>
    </div>
  </header>
  )
}
