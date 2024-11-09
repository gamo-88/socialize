"use client";
import React, { useState, useEffect } from 'react';

interface User {
  userName: string;
  userPp: string; // URL de la photo de profil
}

interface Media {
  type: 'i' | 'v'; // "i" pour image, "v" pour vidéo
  src: string; // URL de l'image ou de la vidéo
}

interface Status {
  id: number;
  title: string;
  user: User;
  media: Media[];
}

interface ModaleStoryShowPropsType {
  isOpen: boolean;
  onClose: () => void;
  statuses: Status[];
}

export default function ModaleStoryShow({ isOpen, onClose, statuses }: ModaleStoryShowPropsType) {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const duration = 5000; // Durée en millisecondes pour chaque média

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, duration / 100);

    if (progress >= 100) {
      goToNextMedia();
      setProgress(0);
    }

    return () => clearInterval(interval);
  }, [progress, isOpen]);

  const goToNextMedia = () => {
    const currentStatus = statuses[currentStatusIndex];
    if (currentMediaIndex < currentStatus.media.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1);
    } else {
      goToNextStatus();
    }
  };

  const goToPreviousMedia = () => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1);
      setProgress(0);
    } else if (currentStatusIndex > 0) {
      goToPreviousStatus();
    }
  };

  const goToNextStatus = () => {
    if (currentStatusIndex < statuses.length - 1) {
      setCurrentStatusIndex(currentStatusIndex + 1);
      setCurrentMediaIndex(0);
    } else {
      onClose(); // Ferme la modale à la fin du dernier statut
    }
  };

  const goToPreviousStatus = () => {
    if (currentStatusIndex > 0) {
      setCurrentStatusIndex(currentStatusIndex - 1);
      setCurrentMediaIndex(statuses[currentStatusIndex - 1].media.length - 1);
      setProgress(0);
    }
  };

  const currentStatus = statuses[currentStatusIndex];
  const currentMedia = currentStatus.media[currentMediaIndex];

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-opacity-75 bg-black transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative w-full max-w-lg p-4 mx-4 bg-white rounded-lg shadow-lg">
        <button className="absolute top-2 right-2 bg-gray-700 text-white p-1 rounded-sm" onClick={onClose}>
          X
        </button>


        {/* Barre de progression */}
        <div className="flex space-x-1 mb-4">
          {currentStatus.media.map((_, index) => (
            <div
              key={index}
              className="flex-1 h-1 bg-gray-300 rounded-full"
              style={{
                background: index < currentMediaIndex ? '#4caf50' : '#ddd',
                width: index === currentMediaIndex ? `${progress}%` : '100%',
              }}
            ></div>
          ))}
        </div>

        {/* Contenu du média */}
        <div className="relative mt-4">
          {currentMedia.type === 'i' ? (
            <img src={currentMedia.src} alt="Story Content" className="w-full rounded-lg" />
          ) : (
            <video
              src={currentMedia.src}
              autoPlay
              muted
              className="w-full rounded-lg"
              onEnded={goToNextMedia}
            />
          )}
        </div>

        {/* Boutons de navigation */}
        <button onClick={goToPreviousMedia} className="absolute left-4 top-1/2 text-white">
          ‹
        </button>
        <button onClick={goToNextMedia} className="absolute right-4 top-1/2 text-white">
          ›
        </button>
      </div>
    </div>
  );
}