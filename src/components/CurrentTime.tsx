"use client";

import { useEffect, useState } from 'react';

export default function CurrentTime() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    // Initial update
    updateTime();
    
    // Update every minute
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);

  function updateTime() {
    const now = new Date();
    
    // Format time as HH:MM AM/PM
    setTime(now.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true 
    }));
    
    // Format date
    setDate(now.toLocaleDateString([], { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }));
  }
  return (
    <div className="flex flex-col justify-center items-center h-full p-8 md:p-10">
      <div className="text-4xl md:text-5xl font-bold text-sage-dark">{time}</div>
      <div className="text-lg md:text-xl text-sage mt-3">{date}</div>
    </div>
  );
}
