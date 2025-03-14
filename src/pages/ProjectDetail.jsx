import React, { useState } from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { fetcher } from "../middlewares/Fetcher";
import {
  X,
  ArrowCircleLeft,
  ArrowCircleRight,
  Link,
} from "@phosphor-icons/react";

export const ProjectDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR(`/projects/${id}`, fetcher);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.data.images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.data.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeModal();
  };

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="h-16 w-16 border-[6px] border-dotted border-black animate-spin rounded-full"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-lg font-medium text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen">
      <div className="container mx-auto p-8 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-6xl font-bold text-[#5D75A5]">
            {data.data.title}
          </h1>
          {data.data.category === "web" ? (
            <a
              href={`https://${data.data.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold inline-flex items-center underline"
            >
              <Link className="w-5 h-5 mr-2" />
              Loyihani ko'rish
            </a>
          ) : null}
        </div>
        <p className="text-lg text-gray-600 mb-8">{data.data.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.data.images.map((image, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Project image ${index + 1}`}
                className="object-cover w-full h-60 transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={data.data.images[currentIndex] || "/placeholder.svg"}
              alt={`Fullscreen image ${currentIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />

            <button
              className="absolute top-4 right-4 text-white hover:bg-black/50 rounded-full"
              onClick={closeModal}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>

            <button
              className={`absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/50 rounded-full h-12 w-12 ${
                data.data.images.length <= 1 ? "hidden" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ArrowCircleLeft className="h-8 w-8" />
              <span className="sr-only">Previous image</span>
            </button>

            <button
              className={`absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/50 rounded-full h-12 w-12 ${
                data.data.images.length <= 1 ? "hidden" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ArrowCircleRight className="h-8 w-8" />
              <span className="sr-only">Next image</span>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              {currentIndex + 1} / {data.data.images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
