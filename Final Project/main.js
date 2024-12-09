console.log(products)

// SELECTORS

const productsContainer = document.querySelector(".notsidebar")

// Loop and display each product
function displayProducts() {
    // A map allows to acess objects easier
    productsContainer.innerHTML = products.map(product => {
        return `<article class="product">
                    <img src="${product.image}" alt="" />
                    <footer>
                        <p class="product-name">${product.title}</p>
                        <p class="product-price">${"$"+product.price}</p>
                    </footer>
                </article>`
    // Below is how to remove commas
    }).join("")
}

// Run the function
displayProducts()