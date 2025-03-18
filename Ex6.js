let products = []; //on stock les produits apres la  lecture du fichier dans ce tableau
window.onload = function () {
    createCharts();
};
// Initialisation des variables pour les graphes
let stockChart, categoryChart;
// charger le  fichier JSON
document.getElementById('fileInput')
    .addEventListener('change', function (event) {
        const file = event.target.files[0];
        if(file){
            const fr = new FileReader();
            fr.onload = function (e) {
                    products = JSON.parse(e.target.result);
                    displayProducts(products);
                    Categories(products);
                    Charts(); 
            }
    
        fr.readAsText(file);
    }
    })


// fonction pour afficher les produits
function displayProducts(productList) {
    const productContainer = document.getElementById('productList');
    productContainer.innerHTML = ""; 

    productList.forEach(product => {
        const productDiv = document.createElement('div');
       productDiv.classList.add('product'); // pour le style
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Prix: ${product.price}€</p>
            <p>Catégorie: ${product.category}</p>
            <p>Stock: ${product.stock}</p>
        `;
        productContainer.appendChild(productDiv);
    });
}

// fonction pour charger les categories ca depend des categories existantes  das fichier json
function Categories(products) {
  
    const categorySelect = document.getElementById('categoryFilter');
    const categories = [...new Set(products.map(p => p.category))]; // on connvert set en tableau pour utiliser foreach 

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
 
}


// Filtrer par categorie
function filterByCategory() {
    const category = document.getElementById('categoryFilter').value;
    //si on a pas choisit categorie on affiche tous les products sinon on affiche seulement les les produits de cete categrie
    const filteredProducts = category ? products.filter(p => p.category === category) : products;
    displayProducts(filteredProducts);
    Charts(filteredProducts);
}

// Trier les produits 

function sortByStock() { // trie avec ordre decroissant 
    const category = document.getElementById('categoryFilter').value;
    const sortedProducts =category ? products.slice().filter(p => p.category === category).sort((a, b) => b.stock-a.stock) : products.slice().sort((a, b) => b.stock-a.stock); // slice pour prendre copie de products
    displayProducts(sortedProducts);
    Charts(sortedProducts);
}

function sortByPrice() {
    const category = document.getElementById('categoryFilter').value;
    const sortedProducts = category ? products.slice().filter(p => p.category === category).sort((a, b) => b.price-a.price) : products.slice().sort((a, b) =>b.price - a.price);
    displayProducts(sortedProducts);
   
}

// Recherche de produit par nom
function searchProducts() { 
    const searchText = document.getElementById('searchInput').value.toLowerCase(); 
    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchText));
    displayProducts(filteredProducts);
}





//  charts

function createCharts() {
    const Stock = document.getElementById('stockChart').getContext('2d');
    const Category = document.getElementById('categoryChart').getContext('2d');

    // chart de stock
    stockChart = new Chart(Stock, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Stock des Produits',
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // chart de categorie
    categoryChart = new Chart(Category, {
        type: 'pie',
        data: {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: ['red', 'blue', 'green', 'yellow', 'purple'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

  
    Charts();
}



function Charts(productList = products) { //  par defaut products 
    if (!productList.length) return; 

    // chart de stock
    stockChart.data.labels = productList.map(p => p.name);
    stockChart.data.datasets[0].data = productList.map(p => p.stock);
    stockChart.update();

    // chart des categories
    const categories = {};
    productList.forEach(product => {
        categories[product.category] = (categories[product.category] || 0) + 1;
    });

    categoryChart.data.labels = Object.keys(categories);
    categoryChart.data.datasets[0].data = Object.values(categories);
    categoryChart.update();
}
