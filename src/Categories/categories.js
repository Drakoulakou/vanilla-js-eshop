const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

function fechProductsForCategory() {
  fetch('https://fakestoreapi.com/products/category/' + category).then(res => res.json())
    .then(function (products) {
      var content = "";
      for (var i = 0; i < products.length; i++) {
        const product = products[i];
        content += `
          <div class="card borderGradient" style="width: 18rem;">
            <div class="card-img-top" style="background-image:url(${product.image})"></div>
            <h4 class="title">${product.title}</h4>
            <p class="description">${product.description}</p>
            <p class="price">$ ${product.price}</p>
            <a href="product.html?id=${product.id}" id="button" class="btn">More details</a>
            <button onclick="addProductToCart(${product.id})" class="btn">Add to cart</button>
          </div>
        `;
      }

      document.getElementById("main").innerHTML = content;
    })
}

fechProductsForCategory();

document.getElementById("header").innerHTML = category;


