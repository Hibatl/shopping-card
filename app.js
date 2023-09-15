document.addEventListener('DOMContentLoaded', function() {
  // Function to update subtotal and total prices
  function updatePrices() {
    var products = document.querySelectorAll('.product');
    var subtotal = 0;

    products.forEach(function(product) {
      var price = parseFloat(product.querySelector('.price').innerText);
      var quantity = parseInt(product.querySelector('.qt').innerText);
      var productPrice = price * quantity;
      product.querySelector('.full-price').innerText = productPrice.toFixed(2) + '€';
      subtotal += productPrice;
    });

    var tax = subtotal * 0.05;
    var shipping = 5.00;
    var total = subtotal + tax + shipping;

    document.querySelector('.subtotal span').innerText = subtotal.toFixed(2);
    document.querySelector('.tax span').innerText = tax.toFixed(2);
    document.querySelector('.total span').innerText = total.toFixed(2);
  }

  // Add event listeners for quantity changes
  var quantityButtons = document.querySelectorAll('.qt-minus, .qt-plus');
  quantityButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var product = this.closest('.product');
      var quantityElement = product.querySelector('.qt');
      var quantity = parseInt(quantityElement.innerText);

      if (this.classList.contains('qt-minus') && quantity > 1) {
        quantity--;
      } else if (this.classList.contains('qt-plus')) {
        quantity++;
      }

      quantityElement.innerText = quantity;
      updatePrices();
    });
  });

  // Add event listener for removing a product
  var removeButtons = document.querySelectorAll('.remove');
  removeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      this.closest('.product').remove();
      updatePrices();
    });
  });

  // Initial update of prices
  updatePrices();
});
// Get all elements with the "likeButton" class
const likeButtons = document.querySelectorAll(".fa-heart");

// Add a click event listener to each like button
likeButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Toggle the 'liked' class to change the color
        button.classList.toggle('liked');
    });
});