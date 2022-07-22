

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

function fechProducts() {

  fetch('https://fakestoreapi.com/products/' + productId).then(res => res.json())
    .then(function (product) {

      console.log(product)

      var content = `
      <div class="card-product">
        <div class="img-product zoom" style="background-image:url(${product.image})"; >
        </div>
          <div>
           <h4 class="title">${product.title}</h4>
           <p class="descriptionProduct">${product.description}</p>
             <div><h5 class="price">$${product.price}</h5>
             
             <input class=inputNumber type="number" id="numberInput" value="1" min="1" max="50">
             <button id="button" class="btn" onclick="myFunction()">Buy now</button> 
             
             
          </div>
        </div>    
      </div>

      `
      
      document.getElementById("newProduct").innerHTML = content;
      
    })
  }
  
  fechProducts();
  
  function myFunction() {
    
    let tokenAmount = document.getElementById("numberInput").value;
    console.log(tokenAmount)
    
  }
