import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import {Button } from "@/components/ui/button"


interface RequestedPersonType{
    image: string;
    userName: string;
    mutuals: number;
}

export default function RequestFriends() {

    const persons: RequestedPersonType[] = [
        {   
            image: "/images/users/user-7.png",
            userName: "Anthony Daugloi",
            mutuals: 12
        },
        {
            image: "/images/users/user-8.png",
            userName: "Mohannad Zitoun",
            mutuals: 25
        },
        {
            image: "/images/users/user-6.png",
            userName: "john Doe",
            mutuals: 4
        },
    ]


  return (
<>
<div className="friendRequest pb-4 w-full  bg-colorBackgroundComponent rounded-lg">
    
        <div className="header p-4 flex justify-between items-center text-[12px] font-bold  border-b">
            <div className="left">Friend Request</div>
            <div className="right text-[#1E74FD]"><Link href={'friend-request'} >See all</Link></div>
        </div>
{
    persons.map((person, index)=>{
        return  ( 

        <div className="requestCard pt-4 px-4" key={index}>
            <div className="up text-[14px] flex">
                <div className="pict me-3 mb-3">
                    <Image src={person.image} width="45" height="45" alt="apres" className="w-[45px] h-45px"/>
                </div>
                <div className="nameMutual">
                    <div className="name font-bold dark:text-gray-100">{person.userName}</div>
                    <div className="mutuale font-medium text-gray-400 dark:text-gray-500"><span className="countMutualFriends">{person.mutuals}</span> mutual friends</div>
                </div>
            </div>
            <div className="down">
                <Button className="bg-[#1E74FD] text-[13px] w-[100px] hover:bg-blue-700 font-semibold text-white rounded-3xl me-3" >Confirm</Button>
                <Button className="bg-gray-100 text-[13px] w-[100px] hover:bg-red-300 font-semibold text-gray-600 rounded-3xl" >Delete</Button>
            </div>
        </div>
)
})

    
    }
</div>

</>
  )
}
