import React, { useState, useEffect } from 'react';

const GreetingComponent = () => {
  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeOfDay(getTimeOfDay());
    }, 60000); 

    return () => clearInterval(intervalId);
  }, []);

  function getTimeOfDay() {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return 'Good morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Good afternoon';
    } else if (currentHour >= 17 && currentHour < 20) {
      return 'Good evening';
    } else {
      return 'Good night';
    }
  }

  return (
    <div>
      <h1>{timeOfDay}</h1>
    </div>
  );
};

export default GreetingComponent;
