
import StorySwiper from "@/components/homeComponents/StorySwiper";
import Image from "next/image";
import Link from 'next/link';
import {Button } from "@/components/ui/button"
import RequestFriends from "@/components/homeComponents/RequestFriends";


export default function Home() {
  return (
    <>
    <section className="home flex justify-between pl-4 ">
      <section className="feedContainer flex-1 pr-4  lg:w-8/12 xl:w-7/12 ">
      <StorySwiper/>


      </section>
      <aside className="hidden min-[1200px]:block w-80     ">
	<RequestFriends />
      </aside>
    </section>

    </>
  );
}
