let btnCart = document.querySelector('.icon-cart');
let ventanaCart = document.querySelector('.cart-service');
let btnCloseVentana = document.querySelector('.close-btn');
let PriceTotalVentana = document.querySelector('.price-total');
let btnServCart = document.querySelectorAll('.sing-serv-cart');
const servicesContainer = document.querySelector('.service-masajes');

const getOnlyMasajeById = async (id) => {
    const idMasajes = await fetch(`http://localhost:3200/api/masajes/${id}`, {
        method: 'GET',
    });
    const resultData = await idMasajes.json();
    // console.log(resultData);
    return resultData;
}

const userInfo = async (uidUser) => {
    const userData = await fetch(`http://localhost:3200/api/users/${uidUser}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const userResult = await userData.json();
    console.log(userResult);
    return userResult;
}

const saveServicios = async (servicios) => {
    const serviciosData = await fetch('http://localhost:3200/api/servicios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(servicios)
    })
    const newServicio = await serviciosData.json();
    console.log(newServicio);
    return newServicio;
}

const uid = window.location.pathname.split('/')[1];
let cart = [];
let totalPrice = 0;


btnCart.addEventListener('click', () => {
    ventanaCart.style.display = "block";
})

btnCloseVentana.addEventListener('click', () => {
    ventanaCart.style.display = "none";
})

//funcion buton donde estan los servicios
servicesContainer.addEventListener('click', e => {

    if(e.target.closest('.sing-serv-cart')) {
        let idServ = e.target.parentElement.parentElement.parentElement.parentElement.id;
        
        getOnlyMasajeById(idServ)
        .then((returnid) => {
    
        let TitleServ = returnid.message.title;
        let descriptionServ = returnid.message.description;
        let priceServ = returnid.message.price;
        let imgServ = returnid.message.img;
        let id = idServ;

        let serv = {
            TitleServ,
            descriptionServ,
            priceServ,
            imgServ,
            id
        }

        totalPrice =  parseFloat(totalPrice) + parseFloat(priceServ);
        totalPrice = totalPrice;
        PriceTotalVentana.innerHTML = totalPrice;

        cart.push(serv);
        updateCartIcon();
        updateCartItems();
        })
    }
})



//funcion borrar contenido del carrito
document.getElementById('cart-items').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-product')) {
        
        let idServ = event.target.id;

        cart.forEach(value => {
            if (value.id == idServ) {
                let priceReduce = parseFloat(value.priceServ);
                totalPrice =  totalPrice - priceReduce;
                PriceTotalVentana.innerHTML = totalPrice;
            }  
        })

        cart = cart.filter( service => service.id !== idServ);

        updateCartIcon();
        updateCartItems();
    }
})

function updateCartItems() {
    let cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    cart.forEach(service => {

        let serviceElement = document.createElement('div');
        serviceElement.classList.add('item');
        
        serviceElement.innerHTML = `
        <img src="${service.imgServ}" alt="">
        <div class="item-content">
            <h5>${service.TitleServ}</h5>
            <h4 class="cart-price">${service.priceServ}$</h4>
            <h6>${service.descriptionServ}</h6>
        </div>
        <span class="delete-product" id="${service.id}">X</span>
        
    `;
    cartItems.appendChild(serviceElement);
    })
}

function updateCartIcon() {
    let cartIcon = document.getElementById('cart-icon');
    cartIcon.innerText = + cart.length;
}

document.querySelector('.cart-service').addEventListener('click', function (event) {
    if (event.target.classList.contains('add-cita')) {

        if (uid !== undefined) {
            userInfo(uid)
                .then((userInfoObject) => {

                    const userData = userInfoObject.message;

                    // Datos enviados para el objecto de servicios
                    const servicioPorUsuario = {
                        uid: userData?.uid,
                        username: userData?.userInfo.displayName,
                        email: userData?.userInfo.email,
                        ...cart,
                    }

                    saveServicios(servicioPorUsuario);
                })
                .catch(() => {
                    window.location.href = '/iniciosesion';
                });
        } else {
            window.location.href = '/iniciosesion';
        }
    }
})











