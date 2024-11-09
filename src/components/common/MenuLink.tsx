"use client"
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuLinkProps{
    href: string;
    children: React.ReactNode;
}

export default function MenuLink({ href, children }: MenuLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={isActive ? ('text-blue-500 bg-blue-100 dark:bg-[#1A2236] flex items-center justify-center font-bold w-12 h-12 rounded-full duration-75') : ('text-gray-600 bg-gray-100 dark:bg-[#1A2236] dark:text-[#ADB5BD] hover:text-blue-700 flex items-center justify-center  font-bold w-12 h-12 rounded-full duration-75')}
        >
            {children}
        </Link>
    );
}
