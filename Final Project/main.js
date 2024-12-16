console.log(products)
// This filterProducts creates a copy of the products
// It is useful so we don't permanently change the code
let filteredProducts = [...products]
console.log(filteredProducts)

// SELECTORS

const productsContainer = document.querySelector(".notsidebar")
const searchForm = document.querySelector(".input-form")
const searchInput = document.querySelector(".search-input")


// Create a function for the search bar
searchForm.addEventListener("keyup",() => {
    let searchTerm = searchInput.value
    console.log(searchTerm) 
    // This is a function that narrows your search down
    // It is made to filter out those that don't contain what you typed
    filteredProducts = products.filter(product =>{  
        return product.title.includes(searchTerm)
    })
    // This code is to actually make the function take effect
    displayProducts()
    // I had to go down and manipulate the map to display filteredProducts
})


// Loop and display each product
function displayProducts() {
    // A map allows to acess objects easier
    // map returns an array, whereas forEach doesn't return anything
    productsContainer.innerHTML = filteredProducts.map(product => {
        return `<article class="product">
                    <img src="${product.image}" alt="" />
                    <footer>
                        <p class="product-name">${product.title}</p>
                        <p class="product-price">${"$"+product.price}</p>
                        <button class="product-purchase">${product.button}
                    </footer>
                </article>`
    // Below is how to remove commas
    }).join("")
}

// Run the function
displayProducts()