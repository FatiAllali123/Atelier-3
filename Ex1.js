const numbers = [0, 9, 11, 12, 8, 2];

const result = numbers
  .filter(num => num % 2 === 0) // on prend seulement  les nombres pairs
  .sort((a, b) => a - b); // puis on trie avec  ordre croissant

console.log(result); //afficher le resultat
