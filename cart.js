const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartContainer = document.getElementById('cart-items-container');

function updateTotalPrice() {
    let totalPrice = 0;

    cartItems.forEach((item) => {
        let rawPrice = item.price.replace(/[^0-9]+/g, ""); 
        let basePrice = parseInt(rawPrice, 10);
        let itemQuantity = item.quantity || 1;

        totalPrice += basePrice * itemQuantity;
    });

    const formattedTotal = totalPrice.toLocaleString('en-PK');
    document.getElementById('total-price').textContent = `Total = ${formattedTotal} PKR`;
}
function renderCart() {
    cartContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<h1>Your Cart Is Empty</h1>';
    } else {
        cartItems.forEach((item, index) => {
            let itemQuantity = item.quantity || 1; 

            const productDiv = document.createElement('div');
            productDiv.classList.add('cart-item');

            productDiv.innerHTML = `
                <div class="row">
                    <div class="col-4">
                        <img src="${item.image}" alt="${item.name}" style="max-width: 100px;">
                    </div>
                    <div class="col-4">
                        <h4>${item.name}</h4>
                        <div class="quantity-control">
                            <button class="decrease-quantity" data-index="${index}" style="background-color:black; color: white; border: 1px solid;width:30px; cursor: pointer;">-</button>
                            <span class="quantity-display">${itemQuantity}</span>
                            <button class="increase-quantity" data-index="${index}" style="background-color:black; color: white; border: 1px solid;width:30px; cursor: pointer;">+</button>
                        </div>
                    </div>
                    <div class="col-4">
                        <p class="item-price">${item.price} PKR</p> <!-- Keep price in PKR -->
                        <button class="remove-item-btn" data-index="${index}" style="background-color:black; color: white; border: 1px solid;width:50px; cursor: pointer;">-</button>
                    </div>
                </div>
                <hr>
            `;

            cartContainer.appendChild(productDiv);
        });
        const totalDiv = document.createElement('div');
        totalDiv.id = 'total-price';
        totalDiv.style.backgroundColor = 'black';
        totalDiv.style.color = 'white';
        totalDiv.style.padding = '10px';
        totalDiv.style.marginTop = '10px';
        totalDiv.style.border = '1px solid white';
        totalDiv.style.display = 'inline-block'; 
        totalDiv.style.float = 'right';
        totalDiv.style.cursor = 'default';

        cartContainer.appendChild(totalDiv);
        updateTotalPrice();
    }
}
function updateQuantity(index, increase) {
    let item = cartItems[index];
    let rawPrice = item.price.replace(/[^0-9]+/g, ""); 
    let basePrice = parseInt(rawPrice, 10);

    item.quantity = item.quantity || 1;

    if (increase) {
        item.quantity++;
    } else {
        if (item.quantity > 1) {
            item.quantity--;
        }
    }
    item.price = (basePrice * item.quantity).toLocaleString('en-PK') + " PKR";

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    renderCart();
}
function removeItemFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
    renderCart(); 
}

renderCart();

cartContainer.addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('remove-item-btn')) {
        const index = target.getAttribute('data-index');
        removeItemFromCart(index);
    } else if (target.classList.contains('increase-quantity')) {
        const index = target.getAttribute('data-index');
        updateQuantity(index, true);
    } else if (target.classList.contains('decrease-quantity')) {
        const index = target.getAttribute('data-index');
        updateQuantity(index, false);
    }
});
const checkoutButtonDiv = document.createElement('div');
checkoutButtonDiv.style.textAlign = 'end';
checkoutButtonDiv.style.marginTop = '30px'; 
const checkoutButton = document.createElement('button');
checkoutButton.classList.add('checkout-btn');
checkoutButton.style.padding = '10px 20px';
checkoutButton.style.backgroundColor = 'black';
checkoutButton.style.color = 'white';
checkoutButton.style.marginRight = '427px';
checkoutButton.style.marginTop = '60px';
checkoutButton.style.border = 'none';
checkoutButton.style.fontSize = '1.2em';
checkoutButton.style.borderRadius = '50px';
checkoutButton.style.cursor = 'pointer';

checkoutButton.innerHTML = `
    Checkout
`;

checkoutButtonDiv.appendChild(checkoutButton);

cartContainer.appendChild(checkoutButtonDiv);
