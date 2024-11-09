import React from 'react'
import SideBarItem from './SideBarItem'
import { Award, ChartPie, Cog, Settings, Globe, House, Inbox, CalendarClock, MessageSquareText, Tv, UserPen, LogOut, Youtube, Zap, UsersRound } from 'lucide-react'

export default function SideBar() {
  return (
    <aside className='w-[280px] min-h-screen text-colorTextDefault font-semibold flex flex-col gap-y-3 '>
        <section className="newsFeed bg-colorBackgroundComponent rounded-lg  shadow-md ">
            <h1 className='text-colorTextDefault font-normal text-sm px-6 pt-4' >NewsFeed</h1>
            <SideBarItem iconColor='text-white' backgroundIconColor='bg-gradient-to-br from-blue-500 to-blue-800' title='NwesFeed' href='/' icon={<Tv/>}/>
            <SideBarItem iconColor='text-white' backgroundIconColor='bg-[#ed5f28]' title='Badges' href='badges' icon={<Award/>}/>
            <SideBarItem iconColor='text-white' backgroundIconColor='bg-gradient-to-b from-orange-200 to-orange-400' title='Explore Stories' href='stories' icon={<Zap />}/>
            <SideBarItem iconColor='text-white' backgroundIconColor='bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400' title='Popular Groups' href='groups' icon={<UsersRound/>}/>
            <SideBarItem iconColor='text-white' backgroundIconColor='bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300' title='Authors Profile' href='profile' icon={<UserPen/>}/>
            <SideBarItem iconColor='text-white' backgroundIconColor='bg-colorTextBlue' title='SignOut' href='register' icon={<LogOut/>}/>
            {/* <SideBarItem/> */}
        </section>
        <section className="morePages bg-colorBackgroundComponent rounded-lg  shadow-md ">
            <h1 className='text-colorTextDefault font-normal text-sm px-7 pt-4' >More Pages</h1>
            <SideBarItem iconColor='text-colorTextBlue' backgroundIconColor='' title='Email Box' href='email-box' icon={<Inbox size={28}/>} withBadge badgeValue={584}/>
            <SideBarItem iconColor='text-colorTextBlue' backgroundIconColor='' title='Near Hotel' href='hotel' icon={<House size={28}/>}/>
            <SideBarItem iconColor='text-colorTextBlue' backgroundIconColor='' title='Latest Event' href='event' icon={<CalendarClock size={28}/>}/>
            <SideBarItem iconColor='text-colorTextBlue' backgroundIconColor='' title='Live Stream' href='live-stream' icon={<Youtube size={28}/>}/>
        </section>
        <section className="settings bg-colorBackgroundComponent rounded-lg  shadow-md ">
            <h1 className='text-colorTextDefault font-normal text-sm px-8 pt-4' >Account</h1>
            <SideBarItem iconColor='text-gray-400' backgroundIconColor='' title='Settings' href='email-box' icon={<Settings size={20}/>} withBadge badgeValue={3}/>
            <SideBarItem iconColor='text-gray-400' backgroundIconColor='' title='Analytic' href='hotel' icon={<ChartPie size={20}/>}/>
            <SideBarItem iconColor='text-gray-400' backgroundIconColor='' title='Chat' href='event' icon={<MessageSquareText size={20}/>}/>
        </section>


    </aside>
  )
}
