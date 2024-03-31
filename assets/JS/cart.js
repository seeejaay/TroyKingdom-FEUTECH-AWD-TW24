document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".shop.btn-add");
  const cartItemsList = document.querySelector(".cart-items");
  const totalPriceElement = document.querySelector(".cart-total");
  const clearButton = document.querySelector(".cart-clear");
  const cartButtonL = document.getElementById("_btnCartL"); // Cart button
  const cartButtonS = document.getElementById("_btnCartS"); // Cart button
  let totalPrice = 0;
  let cartItems = {}; // Object to store cart items and their quantities

  // Event listener for cart button large screen
  cartButtonL.addEventListener("click", function () {
    const cartWindow = document.getElementById("_cartWindow");
    if (cartWindow.classList.contains("active")) {
      cartWindow.classList.remove("active");
    } else {
      cartWindow.classList.add("active");
    }
  });

  //Event Listener for cart button small screen
  cartButtonS.addEventListener("click", function () {
    const cartWindow = document.getElementById("_cartWindow");
    if (cartWindow.classList.contains("active")) {
      cartWindow.classList.remove("active");
    } else {
      cartWindow.classList.add("active");
    }
  });

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productCard = this.closest(".product-card");
      const productId = productCard.querySelector(".card").id;
      const productName = productCard.querySelector("h3").innerText;
      const productPrice = parseFloat(
        productCard
          .querySelector(".pricing-card-title")
          .innerText.replace(/[^\d.-]/g, "")
      ); // Extract price as float

      // If the item is already in the cart, increment its quantity
      if (cartItems.hasOwnProperty(productId)) {
        cartItems[productId].quantity++;
        const existingCartItem = cartItemsList.querySelector(
          `[data-id="${productId}"]`
        );
        existingCartItem.querySelector(".quantity").value =
          cartItems[productId].quantity;
        updateTotalPrice();
      } else {
        // If the item is not in the cart, add it to the cart
        cartItems[productId] = {
          name: productName,
          price: productPrice,
          quantity: 1,
        };

        totalPrice += productPrice;

        const cartItem = document.createElement("li");
        cartItem.dataset.id = productId; // Set data-id attribute to identify the item
        cartItem.innerHTML = `
            <span>${productName} - ₱${productPrice.toFixed(2)}</span>
            <button class="quantity-btn btn-minus">-</button>
            <input type="number" class="quantity" value="1" min="1">
            <button class="quantity-btn btn-plus">+</button>
          `;
        cartItemsList.appendChild(cartItem);

        updateTotalPrice();
      }
    });
  });

  // Event delegation for quantity change and clear button
  cartItemsList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("btn-minus")) {
      const input = target.nextElementSibling;
      const productId = target.parentElement.dataset.id;
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
        cartItems[productId].quantity--;
        updateTotalPrice();
      }
    } else if (target.classList.contains("btn-plus")) {
      const input = target.previousElementSibling;
      const productId = target.parentElement.dataset.id;
      input.value = parseInt(input.value) + 1;
      cartItems[productId].quantity++;
      updateTotalPrice();
    }
  });

  // Event listener for clearing the cart
  clearButton.addEventListener("click", function () {
    cartItemsList.innerHTML = "";
    totalPrice = 0;
    cartItems = {}; // Clear cart items object
    totalPriceElement.innerText = `₱${totalPrice.toFixed(2)}`;
  });

  // Function to update total price
  function updateTotalPrice() {
    totalPrice = Object.values(cartItems).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    totalPriceElement.innerText = `₱${totalPrice.toFixed(2)}`;
  }
});
