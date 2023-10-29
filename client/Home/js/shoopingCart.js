let btnCart = document.querySelector('.icon-cart');
let ventanaCart = document.querySelector('.cart-service');
let btnCloseVentana = document.querySelector('.close-btn');
let PriceTotalVentana = document.querySelector('.price-total');

let cart = [];

let totalPrice = 0;


btnCart.addEventListener('click', () => {
    ventanaCart.style.display = "block";
})

btnCloseVentana.addEventListener('click', () => {
    ventanaCart.style.display = "none";
})

//funcion botones donde estan los servicios
document.querySelectorAll('.sing-serv').forEach(button => {
    button.addEventListener('click', function() {
        let service = this.parentElement;
        let TitleServ = service.querySelector('h3').innerText;
        let descriptionServ = service.querySelector('p').innerText;
        let priceServ = service.querySelector('h4').innerText;
        let serv = {
            TitleServ,
            descriptionServ,
            priceServ
        }

        totalPrice =  parseFloat(totalPrice) + parseFloat(priceServ);
        totalPrice = totalPrice;
        PriceTotalVentana.innerHTML = totalPrice;

       cart.push(serv);
       updateCartIcon();
       updateCartItems();
       console.log(totalPrice);
    });
});


document.getElementById('cart-items').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-product')) {
        let TitleServ = event.target.parentElement.querySelector('h5').innerText;
        let descriptionServ = event.target.parentElement.querySelector('h6').innerText;
        let priceServ = event.target.parentElement.querySelector('.cart-price').innerText;
        let serv = {
            TitleServ,
            descriptionServ,
            priceServ
        }

        cart.indexOf(serv);
        let index = cart.indexOf(serv);
        if (index = -1) {
            cart.splice(index, 1);

            let reduceprice = event.target.parentElement.querySelector('.cart-price').innerText;
            totalPrice = parseFloat(totalPrice) - parseFloat(reduceprice);
            PriceTotalVentana.innerHTML = totalPrice;
            
        }

        
        updateCartIcon();
        updateCartItems();
    }
});

function updateCartItems() {
    let cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    cart.forEach(service => {
        let serviceElement = document.createElement('div');
        serviceElement.classList.add('item');
        serviceElement.innerHTML = `
        <img src="" alt="">
        <div class="item-content">
            <h5>${service.TitleServ}</h5>
            <h5 class="cart-price">${service.priceServ}$</h5>
            <h6>${service.descriptionServ}</h6>
        </div>
        <span class="delete-product" data-id="$">X</span>
    `;
    cartItems.appendChild(serviceElement);
    })
}

function updateCartIcon() {
    let cartIcon = document.getElementById('cart-icon');
    cartIcon.innerText = + cart.length;
}

