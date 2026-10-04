// Cart
let cartCount = 0;

// Add product to cart
function addToCart() {

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert("Product added to cart!");
}


// Filter products
function filterProducts(category) {

    const products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}


// Search products
document.getElementById("search").addEventListener("input", function() {

    const searchText = this.value.toLowerCase();

    const products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        const productName =
            product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchText)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

});

