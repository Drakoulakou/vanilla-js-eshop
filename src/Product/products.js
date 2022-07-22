


function fechProducts() {


  fetch('https://fakestoreapi.com/products').then(res => res.json())
    .then(function (products) {

      console.log(products)

      var content = "";
      for (var i = 0; i < products.length; i++) {
        content += `
        <div class="card borderGradient" style="width: 18rem;">
        <div class="card-img-top" style="background-image:url(${products[i].image})"; >
        </div>
        <h4 class="title">${products[i].title}</h4>
        <p class="description">${products[i].description}</p>
        <p class="price">$${products[i].price}</p>
        <a href="product.html?id=${products[i].id}" id="button" class="btn">More details</a>
        </div>
            `;
      }

      document.getElementById("container").innerHTML = content;

    })
}

fechProducts();