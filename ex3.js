function updateClock() {
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');
    
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Calculate angles for hands
    const hourDeg = (360 / 12) * (hours % 12) + (minutes / 60) * (360 / 12);
    const minuteDeg = (360 / 60) * minutes + (seconds / 60) * (360 / 60);
    const secondDeg = (360 / 60) * seconds;
    
    // Set the rotation of the clock hands
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize clock immediately
  updateClock();
  