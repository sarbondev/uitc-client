import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";

export const Carousel = () => {
  let radius = 300;
  let autoRotate = true;
  let rotateSpeed = -40;
  let imgWidth = 190;
  let imgHeight = 230;
  const dragRef = useRef(null);
  const spinRef = useRef(null);
  const ground = useRef(null);
  const [images, setImages] = useState([]);
  const [importedImages, setImportedImages] = useState([]);

  let sX,
    sY,
    desX = 0,
    desY = 0;
  let tX = 0;
  let tY = 10;

  useEffect(() => {
    fetch("http://localhost:5000/api/carousel")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setImportedImages(data);
        } else {
          console.error("Invalid data format", data);
        }
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll(".carouselImg");
    setImages(Array.from(images));
  }, [importedImages]);

  useEffect(() => {
    setTimeout(init, 1000);
  }, [images]);

  function init(delayTime) {
    for (let i = 0; i < images.length; i++) {
      images[i].style.transform =
        "rotateY(" +
        i * (360 / images.length) +
        "deg) translateZ(" +
        radius +
        "px)";
      images[i].style.transition = "transform 1s";
      images[i].style.transitionDelay =
        delayTime || (images.length - i) / 4 + "s";
    }
  }

  useEffect(() => {
    if (spinRef.current) {
      spinRef.current.style.width = imgWidth + "px";
      spinRef.current.style.height = imgHeight + "px";
    }
    if (ground.current) {
      ground.current.style.width = radius * 3 + "px";
      ground.current.style.height = radius * 3 + "px";
    }
  }, [imgWidth, imgHeight, radius]);

  function applyTransform(obj) {
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;
    obj.current.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
  }

  function playSpin(yes) {
    spinRef.current.style.animationPlayState = yes ? "running" : "paused";
  }

  useEffect(() => {
    if (autoRotate) {
      let animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      spinRef.current.style.animation = `${animationName} ${Math.abs(
        rotateSpeed
      )}s infinite linear`;
    }
  }, [autoRotate, rotateSpeed]);

  useEffect(() => {
    let handlePointerDown = (e) => {
      clearInterval(dragRef.timer);
      e = e || window.event;
      sX = e.clientX;
      sY = e.clientY;

      let handlePointerMove = (e) => {
        e = e || window.event;
        let nX = e.clientX;
        let nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(dragRef);
        sX = nX;
        sY = nY;
      };

      let handlePointerUp = () => {
        dragRef.timer = setInterval(function () {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTransform(dragRef);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(dragRef.timer);
            playSpin(true);
          }
        }, 17);
        document.onpointermove = document.onpointerup = null;
      };

      document.onpointermove = handlePointerMove;
      document.onpointerup = handlePointerUp;
      return false;
    };

    const dragElement = dragRef.current;
    dragElement.onpointerdown = handlePointerDown;

    return () => {
      dragElement.onpointerdown = null;
    };
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div ref={dragRef} id="drag">
        <div ref={spinRef} id="spin">
          {importedImages.map((img, index) => (
            <img
              className="carouselImg object-cover rounded-xl"
              key={index}
              src={img.fileName}
              alt={`Image ${index}`}
            />
          ))}
        </div>
        <div ref={ground} id="ground"></div>
      </div>
    </div>
  );
};
