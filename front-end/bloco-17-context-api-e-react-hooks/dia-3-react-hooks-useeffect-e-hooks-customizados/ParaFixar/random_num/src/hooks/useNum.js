import React, { useState, useEffect } from 'react'

export default function useNum() {
  const [number, setNumber] = useState(1)
  const [multiple, setMultiple] = useState(false);
  const [timer, setTImer] = useState(10)

  const runTimer = () => {
    setTImer(timer => timer - 1);
  }

  useEffect(() => {
    const interval = setInterval(randomNum, 10000);
    const timer = setInterval(runTimer, 1000);
    return () => {
      clearInterval(interval);
      clearInterval(timer);
    };
  }, []);

  const isMultiple = (num) => { 
    if (num % 3 === 0 || num % 5 === 0) {
      setMultiple(true);
      setTimeout(() => setMultiple(false), 4000);
    }
  }

  const randomNum = () => {
    const num = Math.round(Math.floor(Math.random() * 100) + 1);
    setNumber(num)
    isMultiple(num)
    setTImer(10)
  }

  return { number, multiple, timer }
}
