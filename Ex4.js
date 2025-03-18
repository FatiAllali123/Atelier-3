const tab = [1, 7, 12, 0, 8];

const maximum = tab.reduce((max, num) => (num > max ? num : max) );
console.log(maximum); 
