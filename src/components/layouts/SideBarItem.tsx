import Link from 'next/link'
import React from 'react'
/**
 * props de sideBar
 * 
 * @type {Object} SideBarItemProps
 * @param {string} iconColor - la couleur de l'icon avec la classe tailwind
 * @param {string} backgroundIconColor - La couleur du background ou se situ l'icon
 * @param {string} title - Le nom visible du lien ou label
 * @param {string} href - Le lien ou mene l'item
 * @param {Object} icon - Le composant de l'icon pris sur lucide
 * @param {boolean} withBadge - Si l'item va prendre le badge
 * @param {number} badgeValue - La valeur que va prendre le badge de l'item
 * @returns {JSX.Element} - Retourne un element sur la sidebar (icon, lien, label avec ses couleurs suivant tailwind)
 * 
 */

interface SideBarItemProps {
    iconColor: string;
    backgroundIconColor: string; 
    title: string;
    href: string;
    icon: React.ReactNode;
    withBadge?: boolean;
    badgeValue?: number
}

export default function SideBarItem({iconColor="bg-blue-500", backgroundIconColor="", title="le titre", href="/", icon, withBadge=false, badgeValue=0}: SideBarItemProps ) {
  return (
    <div>
        <Link href={href} className='px-5 py-2 flex items-center  hover:text-colorTextBlue'>
            <span className={`pict ${backgroundIconColor} p-3 rounded-full h-[45px] w-[45px] flex justify-center items-center mr-4`}> <span className={`icon ${iconColor} `}>{icon}</span></span>
            <span className='title text-colorTextDefault font-semibold hover:text-colorTextBlue '>{ title }</span>
            {
              withBadge && (<span className='badge py-2 px-2 h-[30px] text-white text-sm bg-orange-400 rounded-sm flex items-center ml-[auto]'>{badgeValue}</span>)
            }
        </Link>
    </div>
  )
}
