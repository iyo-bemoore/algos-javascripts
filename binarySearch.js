const binarySearch = (nums, target) => {  
    nums = nums.sort((a,b) => a - b);
    let floorIndex = -1;
    let ceilingIndex = nums.length;
    
    while (floorIndex + 1 < ceilingIndex) {
     
     const distance = ceilingIndex - floorIndex;
     const halfDistance = Math.floor(distance / 2); // avoid floating point
     const guessIndex = floorIndex + halfDistance;
     const guessValue = nums[guessIndex];
 
      if (guessValue === target) {
       console.log(guessValue)
       return true;
     }
      if (guessValue > target) {
       ceilingIndex = guessIndex;
     } else {
       floorIndex = guessIndex;
     }
 
   }
 
  return false;
 }
 
 binarySearch([12,58,65,32,132,46,74,120,336,40,569,125,11,321,7784,126,35], 40 )