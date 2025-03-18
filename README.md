                                                                        ✨  Rapport Atelier 3 
Objectif :  L’objectif principal de ce Travail pratique et de se familiariser avec les concepts de la programmation fonctionnelle de langage javascript.

✨Exercice 1 :

Explication :
    ✔ 1.	Filtrer les nombres pairs : 
•	On utilise la méthode filter() pour garder uniquement les nombres nombres pairs . 
filter(num => num % 2 === 0)
   ✔2.	Trier les nombres : 
•	Une fois qu'on a extrait les nombres pairs, on les trie en ordre croissant avec sort()   .
sort((a, b) => a - b);

  ✨Exercice 2 :
Dans cet exercice, on doit renvoyer une nouvelle liste où chaque nombre est remplacé par son factoriel.
Explication :
   ✔ 1.	une fonction récursive pour calculer le factoriel :
•	On utilise une fonction factorial(n) qui calcule le factroriel d’un nombre n 
   ✔2.	Appliquer cette fonction à tous les éléments du tableau :
•	Puis ,on utilise .map(), qui parcourt la liste et  applique la fonction factorial à chaque élément de la liste.
const result = numbers.map(factorial)


  ✨ Exercice 3 :
Dans cet exercice, on a un texte 
On doit :
1.	Diviser le texte en plusieurs lignes.
2.	Mettre chaque ligne en majuscules.
3.	Filtrer les lignes contenant la lettre "I".
4.	Afficher ces lignes filtrées.

Explication :

✔ 1  On Divise le texte en lignes avec split("\n")
•	texte transforme en un tableau de lignes.

✔2  Mettre en majuscules chaque ligne avec .map(ligne => ligne.toUpperCase())
•	On applique toUpperCase() à chaque ligne.

✔3 Filtrer les lignes contenant "I" avec .filter(ligne => ligne.includes("I"))
•	Alors on laisse seulement les lignes qui contiennent la lettre "I".

✔4   Afficher chaque ligne filtrée avec .forEach(ligne => console.log(ligne))
•	En fin , on affiche chaque ligne quicontient  "I".

  ✨ Exercice 4 :
Dans cet exercice, on doit trouver le nombre maximum d'une liste de nombres.
Explication :

1.	On utilise reduce()
•	reduce() permet de parcourir le tableau et d’accumuler une valeur (le maximum).
•	A chaque itération, on compare l’élément actuel avec le maximum déjà stocké.
2.	Mis à jour du maximum avec num > max ? num : max
•	Si num est plus grand que max, alors on le max devient num.
•	Sinon,  max garde sa valeur .
3.	Affichage du résultat :
Enfin  on affiche le résultat avec console.log(maximum).

    ✨Exercice 5 :
Dans cet exercice, on doit calculer le prix total de tous les produits en additionnant leurs prix.

Expliquation : 
   ✔  1.	la fonction reduce() 
const totalPrice = products.reduce((somme, product) => somme+ product.price ,0);
•	somme représente l’accumulateur (la somme en cours).
•	product.price est le prix de chaque produit.
•	On  utilise 0 pour initialise somme à 0 .

   ✨ Exercice 6 :
Cet exercice vise à charger un fichier JSON contenant une liste de produits, à afficher ces produits dynamiquement et permettre différents filtrages et tris. De plus, deux graphiques sont générés pour visualiser les stocks et la répartition par catégorie.

        ✔a) Chargement du fichier JSON
On utilise un input type "file" qui permet à l'utilisateur de sélectionner un fichier JSON. Une fois chargé :
=> Les données de fichier json sont stockées dans un tableau products.


         ✔ b) Affichage des produits
La  fonction displayProducts est utilisée pour afficher chaque produit avec ses attributs : ( Nom , Prix , Catégorie, Stock ) 

         ✔ c) Filtrage et tri
L'interface permet de :

1) Filtrer par catégorie : Un menu déroulant permet de choisir la   catégorie  et filtrer les produits par catégorie.
=>  D’abord : Categories(products) : Charge les catégories de produits à partir de la liste products et les affiche dans le menu déroulant
•	=> Apres : filterByCategory() Filtre les produits selon la catégorie choisie dans categoryFilter. Si aucune catégorie n'est sélectionnée, tous les produits sont affichés.


2) Trier par stock: Trie les produits selon leur quantité en stock en ordre décroissant avec la fonction  sortBystock ()  qui trie la liste des produits en fonction du stock, du plus grand au plus petit.  
 Elle utilise la méthode .sort() pour comparer le stock de deux produits. 
La comparaison b.stock - a.stock classe les produits en ordre décroissant. 
Apres le tri, elle appelle displayProducts() pour mettre à jour l'affichage.


3)Trier par prix : Trie les produits par prix en ordre décroissant avec sortByPrice ()  .
	Meme concept que sortBystock ()  mais en remplace  b.stock - a.stock par  b.prix- a.prix

4)Recherche par nom : Un champ de saisie permet de rechercher un produit par son nom en utilisant la fonction searchByName(query).
     ✨ 1	Filtrage des produits (products.filter(...))
•	products c’est le tableau qui contient  tous les produits.
•	.filter() filtre la liste et garde seulement les produits  qui correspondent au saisie de l’utilisateur .
     ✨2	Conversion en minuscules (toLowerCase())
•	product.name.toLowerCase() transforme le nom du produit en minuscules.
•	query.toLowerCase() transforme la recherche de l'utilisateur en minuscules.(  C’est pour ignorer la casse  ) 
     ✨ 3	Vérification avec .includes(query)
.includes(query) vérifie si query est contenu dans product.name.
Si oui , le produit est gardé dans le tableau searchedProducts.


5)Mise à jour de l'affichage
Après le filtrage, on appelle displayProducts() avec searchedProducts.



    ✔ d) Graphiques
On a : 
1.	Histogramme des stocks : Affiche le stock de chaque produit.
2.	Diagramme circulaire des catégories : Montre la répartition des
   
1)	 Création des graphiques
•	createCharts() : Crée les  deux graphiques 

3)	Mise a jour des graphiques
•	Charts(productList) : Met à jour les graphiques. 
•	La fonction Charts(productList) prend en argument productList, qui est la liste des produits à afficher dans les graphiques. 
•	Dans les fonctions de tri et de filter par categorie on appel la fonction charts avec la liste trouvée .
•	Si aucun argument n'est fourni, Charts utilise par défaut le tableau products, qui contient tous les produits.

