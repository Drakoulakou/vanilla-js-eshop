var savedCart = localStorage.getItem("cartJSON");
const myCart = savedCart ? JSON.parse(savedCart) : [];

function fechProducts() {

  fetch('https://fakestoreapi.com/products').then(res => res.json())
    .then(function (products) {
      var content = "";

      for (var i = 0; i < products.length; i++) {
        products[i].category = escape(products[i].category)
        products[i].title = escape(products[i].title)
        products[i].description = escape(products[i].description)

        content += `
          <div class="card borderGradient" style="width: 18rem;">
            <div class="card-img-top" style="background-image:url(${products[i].image})"; ></div>
            <h4 class="title">${unescape(products[i].title)}</h4>
            <p class="description">${unescape(products[i].description)}</p>
            <p class="price">$${products[i].price}</p>
            <a href="product.html?id=${products[i].id}" id="button" class="btn">More details</a>
            <button onclick='addToCart(${JSON.stringify(products[i])})' id="button" class="btn">Add to Cart</button> 
          </div>
        `;
      }

      document.getElementById("container").innerHTML = content;
    })
}

function saveCart(){
  const myJSON = JSON.stringify(myCart);
  localStorage.setItem("cartJSON", myJSON);
}

function updateCartTotal(){
  document.getElementById("cartTotal").innerHTML = myCart.length;
}

function addToCart(product){
  myCart.push(product)
  saveCart();
  updateCartTotal();
}

fechProducts();