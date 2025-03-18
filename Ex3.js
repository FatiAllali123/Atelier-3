const text = `Hello lsi 
Exircice 3 
Test de resultat 
`;

const result = text
  .split("\n") // split pour deviser le text en lignes 
  .map(ligne => ligne.toUpperCase()) 
  .filter(ligne=> ligne.includes("I")) // on filtre chaque ligne si il contient "I"
  .forEach(ligne=>console.log(ligne)); // on affiche chaque ligne qui contient "I"
