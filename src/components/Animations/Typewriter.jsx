import  { useState, useEffect } from 'react';

const useTypewriter = (text, speed= 50,delay = 0) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    let prevtext = ""
  
    const typingInterval =   setTimeout(() => {setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevtext = prevtext + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed)},delay);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed,delay]);

  return displayText;
};

export const Typewriter = ({ text, speed,delay,className,id }) => {
    const displayText = useTypewriter(text, speed,delay);
  
    return <h1 className={className} id ={id}>{displayText}</h1>;
};
  
