    const productName = localStorage.getItem('productName');
    const productImage = localStorage.getItem('productImage');
    const productPrice = localStorage.getItem('productPrice');

    document.getElementById('product-name').innerText = productName;
    document.getElementById('product-image').src = productImage;
    document.getElementById('product-price').innerText = productPrice;


    function goToDetailPage(name, image, price) {
       
        localStorage.setItem('productName', name);
        localStorage.setItem('productImage', image);
        localStorage.setItem('productPrice', price);
        
        window.location.href = 'product-detail.html';
      }
document.querySelector('.add-to-cart').addEventListener('click', function() {
    const productName = localStorage.getItem('productName');
    const productImage = localStorage.getItem('productImage');
    const productPrice = localStorage.getItem('productPrice');
    
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.push({
        name: productName,
        image: productImage,
        price: productPrice
    });

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
   
    window.location.href = 'cart.html';
});

const buttons = document.querySelectorAll('.size-btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
      
        buttons.forEach(btn => btn.classList.remove('active'));
        
        this.classList.add('active');
    });
});
