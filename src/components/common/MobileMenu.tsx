"use client"

import { MessageCircle, Search, Video } from 'lucide-react'
import React, { useState, MouseEvent } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import SideBar from '../layouts/SideBar'

function MobileMenu() {
    const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false)
    const toggleSideBar = (event: MouseEvent<HTMLDivElement>)=>{
        setSideBarIsOpen(prev => !prev)
    }
  return (
    <div className='flex max-[500px]:gap-x-3 gap-x-5 text-colorTextBlue lg:hidden'>
        <div className="chatTriger bg-gray-200 p-3 rounded-full cursor-pointer">
            <MessageCircle size={20} />
        </div>
        <div className="video bg-gray-200 p-3 rounded-full cursor-pointer">
            <Video size={20} />
        </div>
        <div className="search bg-gray-200 p-3 rounded-full cursor-pointer">
            <Search size={20} />
        </div>
        <Sheet
        open={sideBarIsOpen}
        onOpenChange={(open) => setSideBarIsOpen(open)}
        >
        <SheetTrigger asChild>
                <div className="navSideBarTriger flex flex-col justify-center items-end gap-3 rounded-full cursor-pointer" onClick={toggleSideBar}>
                <div
              className={`w-8 h-1 bg-colorTextBlue transition-transform duration-300 ease-in-out ${
                sideBarIsOpen ? "transform rotate-45 " : ""
              } origin-left`}
            />
            <div
              className={`w-6 h-1 bg-colorTextBlue transition-transform duration-300 ease-in-out ${
                sideBarIsOpen ? "transform w-8 -rotate-45 opacity-0 " : ""
              } origin-left`}
            />
            <div
              className={`w-8 h-1 bg-colorTextBlue transition-transform duration-300 ease-in-out ${
                sideBarIsOpen ? "transform -rotate-45 -translate-y-2" : "opacity-0"
              } origin-left`}
            />
                </div>
          </SheetTrigger>
          
          <SheetContent side={'left'} className='px-2 w-fit overflow-auto'>
            <SideBar/>
          </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileMenu