for (let i = 1; i <= 10; i++) {
    if (i === 3) {
      console.log("Encountered 3, skipping this iteration");
      continue; 
    }
  
    if (i === 8) {
      console.log("Encountered 8, breaking the loop");
      break; 
    }
  
    console.log(`Current value: ${i}`);
  }