"use client";
import { useState, useEffect } from "react";

const TextRotator: React.FC<{
  texts: string[];
}> = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Start fading out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className="text-5xl md:text-6xl lg:text-[112px] pb-8 md:pb-0 leading-[2.5rem] font-extrabold transition-opacity duration-1000 opacity-100">
      {texts[currentIndex]}
    </div>
  );
};

const Textchange: React.FC = () => {
  const rotatingTexts = [
    "Have you eaten?",
    "You don chow?",
    "Se o ti jeun?",
    "I riela nri?",
    "Kun ci abinci?",
  ];
  return (
    <div className="text-center">
      <TextRotator texts={rotatingTexts} />
    </div>
  );
};

export default Textchange;
