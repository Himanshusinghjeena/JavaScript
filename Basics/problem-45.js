// 45. Check if Only One Integer is Multiple of 7 or 11

// Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11


function isOnlyOneMultipleOf7Or11(a, b) {
  const aMultiple = (a % 7 === 0 || a % 11 === 0);
  const bMultiple = (b % 7 === 0 || b % 11 === 0);
  return aMultiple !== bMultiple; 
}

console.log(isOnlyOneMultipleOf7Or11(14, 21));
console.log(isOnlyOneMultipleOf7Or11(14, 20));
console.log(isOnlyOneMultipleOf7Or11(16, 20));