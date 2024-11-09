'use client'

import React, {useState, useEffect} from 'react'
import { Input } from '../../components/ui/input';
import { Search, Filter} from 'lucide-react';
import { stories } from '@/components/homeComponents/StorySwiper';
import StoryModal from '@/components/homeComponents/StoryModal';
import SearchBlock from '@/components/storyPageComponents/SearchBlock';


export default function page() {

  const [criterial, setCriterial] = useState("user")
  const [onSearchStory, setOnSearchStory] = useState("")

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

  function handleCriterial(val:string) {
    setCriterial(val)
  }
  function handleOnSearchStory(val:string) {
    setOnSearchStory(val)
  }

  const visibleStories = stories.filter((story) => {
    const searchValue = onSearchStory.toLowerCase();
    if (criterial === "user") {
      return story.user.userName.toLowerCase().includes(searchValue);
    }
    // if (criterial === "sex") {
    //   return story.user.sex?.toLowerCase().includes(searchValue);
    // }
    // if (criterial === "time") {
    //   return story.time?.toLowerCase().includes(searchValue);
    // }
    return true;
  });
  return (
  <>
    <section className="pl-4">
      <SearchBlock SetCriterial={handleCriterial} SetOnSearchStory={handleOnSearchStory}/>
    <section className="displayStories flex gap-4 max-[880px]:justify-center flex-wrap">

{visibleStories.map((statut, index) => {
  return (
    <article
      key={statut.id}
      className="flex bg-orange-400 lg:w-[252px] min-[500px]:w-[400px] w-80   min-[]:  h-[300px] bg-cover bg-center rounded-lg cursor-pointer relative"
      style={{ backgroundImage: `url(${statut.media[0].src})` }}
      onClick={() => OpenStory(index)}
    >
      <div className="degrader absolute inset-0 bg-gradient-to-b from-transparent  to-black opacity-85 rounded-lg"/>
      <div className="statusInfo absolute bottom-[40px] left-1/2 transform -translate-x-1/2 flex items-center justify-center flex-col">
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

      
    </section>
    </>
  )
}
