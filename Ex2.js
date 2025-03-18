const numbers = [1, 3, 4];

// on utilise map pour parcourir le tableau
const factorial = n => (n === 0 ? 1 : n * factorial(n - 1)); //fonction recursive  pour calculer le factoriel 

const result = numbers.map(factorial);

console.log(result); 
