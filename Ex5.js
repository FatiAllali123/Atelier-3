const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
    ];

    const totalPrice = products.reduce((sum, product) => sum+ product.price ,0);
     console.log(totalPrice); 
    