let text = localStorage.getItem("cartJSON");
let cart = JSON.parse(text);

document.getElementById("cart").innerHTML=cart.title;