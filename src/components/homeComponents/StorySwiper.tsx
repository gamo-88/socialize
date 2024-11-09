"use client";
import { Plus } from "lucide-react";
import React, {  useEffect, useState } from "react";

import StoryModal from "./StoryModal";

interface User {
	userName: string;
	userPp: string; // URL de la photo de profil
}

interface Media {
	type: "i" | "v"; // "i" pour image, "v" pour vidéo
	src: string; // URL de l'image ou de la vidéo
}

interface Stories {
	id: number;
	title: string;
	user: User;
	media: Media[];
}

export const stories: Stories[] = [
	{
		id: 1,
		title: "un statut n01",
		user: { userName: "Magellan", userPp: "images/users/baby.jpg" },
		media: [
			{ type: "i", src: "/images/statuts/st1.jpg" },
			{ type: "i", src: "/images/statuts/st2.jpg" },
			{ type: "i", src: "/images/statuts/st3.jpg" },
		],
	},
	{
		id: 2,
		title: "un statut n01",
		user: { userName: "Magellan1", userPp: "images/users/baby1.jpg" },
		media: [
			{ type: "i", src: "/images/statuts/s-1.jpg" },
			{ type: "i", src: "/images/statuts/s-2.jpg" },
			{ type: "i", src: "/images/statuts/s-3.jpg" },
		],
	},
	{
		id: 3,
		title: "un statut n01",
		user: { userName: "Magellan2", userPp: "images/users/girl1.jpg" },
		media: [
			{ type: "i", src: "/images/statuts/st7.jpg" },
			{ type: "i", src: "/images/statuts/s-5.jpg" },
			{ type: "i", src: "/images/statuts/s-6.jpg" },
		],
	},
	{
		id: 4,
		title: "un statut n01",
		user: { userName: "Magellan2", userPp: "images/users/girl2.jpg" },
		media: [
			{ type: "i", src: "/images/statuts/s-7.jpg" },
			{ type: "i", src: "/images/statuts/s-8.jpg" },
			{ type: "i", src: "/images/statuts/s-9.jpg" },
		],
	},
	{
		id: 5,
		title: "un statut n01",
		user: { userName: "gamo", userPp: "images/users/blackGirl.jpg" },
		media: [
			{ type: "i", src: "/images/statuts/s-10.jpg" },
			{ type: "i", src: "/images/statuts/s-11.jpg" },
			{ type: "i", src: "/images/statuts/s-12.jpg" },
			{ type: "i", src: "/images/statuts/s-13.jpg" },
		],
	},
	{
		id: 6,
		title: "un statut n01",
		user: { userName: "Magellan2", userPp: "images/users/girl3.jpg" },
		media: [
			{ type: "i", src: "/images/statuts/story-5.jpg" },
			{ type: "i", src: "/images/statuts/story-6.jpg" },
			{ type: "i", src: "/images/statuts/story-7.jpg" },
		],
	},
];

export default function StorySwiper() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [visible, setVisible] = useState<boolean>(false);
	const [currentStory, setCurrentStory] = useState(0);
	const [mediaIndex, setMediaIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(true)



	// const [indexStory, setIndexStory] = useState(0)

	function OpenStory(index: number) {
		setCurrentStory(index)
		setMediaIndex(0);
		setVisible(true);
		setTimeout(() => {
			setIsOpen(true)
		}, 10);
		// setIndexStory(index)
	}

	function closeStory() {
		setIsOpen(false)
	}

	function nextStory() {
		setCurrentStory((prev) => (prev + 1) % stories.length)
		setMediaIndex(0)
	}
	function prevStory() {
		setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)
		setMediaIndex(0)
	}

	function nextMedia() {
		if (mediaIndex < stories[currentStory].media.length - 1) {
			setMediaIndex(mediaIndex + 1)
		} else {
			nextStory()
		}
	}
	function prevMedia() {
		if (mediaIndex > 0) {
			setMediaIndex(mediaIndex - 1)
		} else {
			prevStory()
		}
	}

	useEffect(() => {
let timer: NodeJS.Timeout
		if (isPaused) {
             timer = setTimeout(nextMedia, 3000);   
        }
		return () => clearTimeout(timer);
	}, [mediaIndex, isPaused]);

	return (
		<section className=" story-swiper flex items-center scroll-smooth gap-3 overflow-x-auto whitespace-nowrap ">

                <article className="flex bg-[#0f0f0fca] min-w-32 h-44 bg-cover bg-center rounded-lg relative">

                    <div className="statusInfo absolute top-1/2 left-1/2 transform -translate-x-1/2 flex items-center justify-center flex-col text-colorTextBlue  rounded-full cursor-pointer">
                        <div className="userPp w-14 h-14 bg-white flex items-center justify-center bg-cover bg-center rounded-full"                onClick={() =>
					alert("Fonction pour creer le status a put ici")
				}>
                        <Plus size={25} />
                        </div>
                        <div className="userName bg-blue-450   bg-cover bg-center w-24 text-center px-0.5 text-white">
                            Add Story
						</div>
                        
							
					</div>
                </article>
			{stories.map((statut, index) => {
				return (
					<article
						key={statut.id}
						className="flex bg-orange-400 min-w-32 h-44 bg-cover bg-center rounded-lg cursor-pointer relative"
						style={{ backgroundImage: `url(${statut.media[0].src})` }}
						onClick={() => OpenStory(index)}
					>
						<div className="degrader absolute inset-0 bg-gradient-to-b from-transparent  to-black opacity-85 rounded-lg"/>
						<div className="statusInfo absolute top-1/2 left-1/2 transform -translate-x-1/2 flex items-center justify-center flex-col">
							<div
								className="userPp w-14 h-14 bg-blue-400 border border-slate-300 bg-cover bg-center rounded-full"
								style={{ backgroundImage: `url(${statut.user.userPp})` }}
							></div>
							<div className="userName bg-blue-450 overflow-hidden  bg-cover bg-center w-24 text-center px-0.5 text-white text-[10px]">
								{statut.user.userName}.
							</div>
						</div>
						<div className="flex items-center justify-center min-h-screen bg-black/75"></div>
					</article>
				);
			})}

			{/* 
{
    visible && (
    <div
      className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center transition-opacity duration-500 py-10 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      id="wrapper"
      onClick={closeStory}
    >
      <div
        className={`relative md:w-96 md:h-full flex flex-col transition-transform duration-700 transform ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        } bg-white rounded`}
      >
            <button className="text-sm text-black absolute -top-[25px] right-0  hover:scale-75 rounded-full p-1" onClick={closeStory}>
                X
            </button>
        <div className="p-4">
            {
                stories[currentStory].media[mediaIndex].type === "i"?
                    (
                        <img src={stories[currentStory].media[mediaIndex].src}
                        className="w-full h-full object-cover rounded-lg" 
                        alt="on gere apres" />
                    ):(
                        <video src={stories[currentStory].media[mediaIndex].src}              
                        autoPlay
                        muted
                        className="w-full rounded-lg"></video>
                    )
            }
        </div>
      </div>
    </div>
    )
    
}
 */}

			<StoryModal
				isOpen={isOpen}
				media={stories[currentStory].media}
				mediaIndex={mediaIndex}
                isPaused= {isPaused}
                setIsPaused={(x)=>setIsPaused(x)}
				onClose={closeStory}
				onNextMedia={nextMedia}

			/>
		</section>
	);
}
