import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input';
import { Send } from 'lucide-react';

interface Media {
    type: 'i' | 'v'; // "i" pour image, "v" pour vidéo
    src: string; // URL de l'image ou de la vidéo
  }

interface StoryModalProps{
    isOpen: boolean; 
    media: Media[];
    mediaIndex:number ; 
    isPaused: boolean; 
    setIsPaused: (x:boolean)=>void;
    onClose: ()=>void;
    onNextMedia: ()=>void;
}


export default function StoryModal({isOpen, media, mediaIndex, isPaused, setIsPaused, onClose, onNextMedia}: StoryModalProps) {


    const [visible, setVisible] = useState(isOpen)



    useEffect(()=>{
        let countDown: NodeJS.Timeout;


        if (isOpen) {
            setVisible(true)
        } else {
            countDown = setTimeout(() => {
                setVisible(false)
            }, 50);
            return  clearTimeout(countDown)
        }
    },[isOpen])

    useEffect(()=>{
 
        let nextMediaTimeout: NodeJS.Timeout;

        if(isOpen && !isPaused){
            nextMediaTimeout = setTimeout(onNextMedia, 3000);
            return  clearTimeout(nextMediaTimeout)
        }


    },[isOpen, mediaIndex, onNextMedia, isPaused])

    if (!visible) return null

    const handleInputFocus = () => setIsPaused(true);

    const handleInputBlur = () => setIsPaused(false);





  const currentMedia = media[mediaIndex]

  return (
    <div
    className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center transition-opacity duration-500 py-10 ${
      isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
    id="wrapper"
    
  >
    

    <div
      className={`relative md:w-96 h-full flex flex-col transition-transform duration-700 transform ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      } bg-white rounded`}
    >
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-[#0000002b]"/>
          <button className="text-sm text-black absolute -top-[25px] right-0  hover:scale-75 rounded-full p-1" onClick={onClose}>
              X
          </button>

<div className="flex-1 flex items-center justify-center overflow-hidden">          
    {
              currentMedia.type === "i"?
                  (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={currentMedia.src}
                      className="w-full h-full  object-cover rounded-lg" 
                      alt="apres" />
                  ):(
                      <video src={currentMedia.src}              
                      autoPlay={!isPaused}
                      muted
                      className="w-full rounded-lg"></video>
                  )
          }
          </div>

          <div className='absolute bottom-3 w-full px-2 '>
          <Input placeholder="comment here" 
          className='border-white w-full border-2 h-14 '
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          aria-label="Comment input" />
          
          </div>
          <div className="absolute bottom-7 right-4 flex justify-center items-center text-colorTextBlue cursor-pointer">
            <Send size={25} />
          </div>

    </div>
  </div>
  )
}
