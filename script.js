const products = [

    {
        name: "Laptop",
        category: "electronics",
        price: 50000,
        rating: 4.5,
        image: "💻"
    },

    {
        name: "Headphones",
        category: "electronics",
        price: 2000,
        rating: 4.2,
        image: "🎧"
    },

    {
        name: "T-Shirt",
        category: "clothing",
        price: 700,
        rating: 4.0,
        image: "👕"
    },

    {
        name: "Jeans",
        category: "clothing",
        price: 1500,
        rating: 4.3,
        image: "👖"
    },

    {
        name: "Running Shoes",
        category: "shoes",
        price: 2500,
        rating: 4.8,
        image: "👟"
    },

    {
        name: "Sports Shoes",
        category: "shoes",
        price: 1800,
        rating: 4.1,
        image: "🥾"
    }

];


function displayProducts(list) {

    let container = document.getElementById("productList");

    container.innerHTML = "";

    list.forEach(function(product) {

        container.innerHTML += `

            <div class="product">

                <div class="image">
                    ${product.image}
                </div>

                <h3>${product.name}</h3>

                <p class="price">
                    ₹${product.price}
                </p>

                <p class="rating">
                    ⭐ ${product.rating}
                </p>

            </div>

        `;
    });
}


function filterProducts() {

    let category =
        document.getElementById("category").value;

    let sort =
        document.getElementById("sort").value;

    let result = [...products];


    // Category filtering

    if (category !== "all") {

        result = result.filter(function(product) {

            return product.category === category;

        });

    }


    // Sort by price: low to high

    if (sort === "low") {

        result.sort(function(a, b) {

            return a.price - b.price;

        });

    }


    // Sort by price: high to low

    if (sort === "high") {

        result.sort(function(a, b) {

            return b.price - a.price;

        });

    }


    // Sort by rating

    if (sort === "rating") {

        result.sort(function(a, b) {

            return b.rating - a.rating;

        });

    }


    displayProducts(result);
}


// Show products when page opens

displayProducts(products);
