console.log(products)
// This filterProducts creates a copy of the products
// It is useful so we don't permanently change the code
let filteredProducts = [...products]
console.log(filteredProducts)

// SELECTORS
const productsContainer = document.querySelector(".notsidebar")
const searchForm = document.querySelector(".input-form")
const searchInput = document.querySelector(".search-input")
const cntDisplay = document.querySelector("#counterDisplay")

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
                        <button data-cost=${product.price}  class="product-purchase">${product.button}</button>
                    </footer>
                </article>`
    // Below is how to remove commas
    }).join("")
}

// Run the function
displayProducts()



// Cart Display Function

const purchaseButton = document.querySelector(".Purchase")
const priceButtons = document.querySelectorAll(".product-purchase")

let currentPrice = 0
priceButtons.forEach(item => {
    console.log(item)
    item.addEventListener("click", calculatePrice)
})

function calculatePrice(event) {
    console.log(event.target.dataset.cost)
    // The "+="" adds the current value to the added value
    // The Number property forces the target to be read as a number
    currentPrice+= Number(event.target.dataset.cost) 
    // Add the "$" to the inner.Text, NOT the number
    cntDisplay.innerText= "$" + currentPrice
}
// This purchase button doesn't refresh the page
purchaseButton.addEventListener("click", () => {
    console.log("Clicked!")
    cntDisplay.innerText = "Purchased! Now refresh to continue shopping!"
})