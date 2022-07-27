$(function(){
    $("#nav-placeholder").load("../Nav/nav.html", function(){

      let cart = localStorage.getItem("cartJSON");
      cart = JSON.parse(cart)

      document.getElementById("cartTotal").innerHTML= cart ? cart.length : '';
    });
  });
