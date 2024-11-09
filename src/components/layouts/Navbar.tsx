import Link from 'next/link'
import React from 'react'
import MobileMenu from '../common/MobileMenu'
import MenuLink from '../common/MenuLink'
import { House, Settings, Zap,Video, UsersRound, User, MessageSquareText, ShoppingBag, Search, Bell } from 'lucide-react'
import { ThemeSwitcher } from '../common/ThemeSwitcher'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Navbar() {

  return (
    <header className='w-full flex justify-between items-center  bg-colorBackgroundComponent shadow py-4 px-4 md:px-4 lg:px-20 xl:px-20 2xl:px-20'>
       {/* gauche */}
       <div className="">
        <span className="logo">
            {/* <Image>du logo</Image> */}
        </span>
        <span className="text-colorTextBlue md:text-3xl text-xl font-extrabold"><Link href="/">Sociala.</Link> </span>
       </div>

       {/* centre */}
       <div className=" hidden md:flex items-center gap-x-4">
       <div className="relative">
        <input type="search" name="" id="" className="h-12 bg-gray-100 dark:bg-[#1A2236] w-[350px]  rounded-3xl py-2 pl-12 pr-2 placeholder:font-thin placeholder:text-sm " placeholder='Start typing to search...' />
        <Search className="absolute top-0 left-0 transform translate-x-1/2 translate-y-1/2 text-gray-500 dark:text-gray-200" />
       </div>
       <nav className="hidden min-[1200px]:flex  items-center gap-x-4">
          <MenuLink href='/' ><House size={25}/></MenuLink>
          <MenuLink href='/stories' ><Zap size={25}/></MenuLink>
          <MenuLink href='/videos' ><Video size={25}/></MenuLink>
          <MenuLink href='/groups' ><UsersRound size={25}/></MenuLink>
          <MenuLink href='/shop' ><ShoppingBag size={25}/></MenuLink>
          <MenuLink href='/chat' ><MessageSquareText size={25}/></MenuLink>
          
        </nav>
       </div>

       {/* droit */}
       <div className="">
        <MobileMenu/>
        <div className="options hidden lg:flex items-center gap-x-7 text-colorTextBlue">
          <div className="notificationTrigger cursor-pointer w-7 h-7 relative">
            <Bell size={28}/>
            <div className="orangeDut absolute -top-2 -right-0.5 p-0.5 w-2 h-2 rounded-full bg-orange-500"/>
          </div>

          <div className="settings cursor-pointer ">
          
          <Popover>
  <PopoverTrigger><Settings size={28}/></PopoverTrigger>
  <PopoverContent><ThemeSwitcher/></PopoverContent>
</Popover>
          </div>
          <div className="profile cursor-pointer bg-gray-200 rounded-full p-2">
          <User size={28}/>
          </div>

        </div>

       </div>
         
    </header>
  )
}
