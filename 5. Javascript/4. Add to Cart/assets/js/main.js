var shopping = document.querySelector(".shopping");
var close = document.querySelector(".close");
var list = document.querySelector(".list");
var listCard = document.querySelector(".listCard");
var body = document.querySelector("body");
var total = document.querySelector(".total");
var quantity = document.querySelector(".quantity");

shopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
close.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
      img: 'assets/images/1.png',
      name: 'Nike',
      description: 'a high or low shoe, usually of fabric such as canvas, with a rubber or synthetic sole.',
      price: 5000
    },
    {
      img: 'assets/images/4.png',
      name: 'Campus',
      description: 'a high or low shoe, usually of fabric such as canvas, with a rubber or synthetic sole.',
      price: 15000
    },
    {
      img: 'assets/images/3.png',
      name: 'Jordan',
      description: 'a high or low shoe, usually of fabric such as canvas, with a rubber or synthetic sole, with a rubber or synthetic sole, with a rubber.',
      price: 20000
    },
    {
      img: 'assets/images/2.png',
      name: 'Air',
      description: 'a high or low shoe, usually of fabric such as canvas, with a rubber or synthetic usually of fabric such as canvas, with a rubber or synthetic sole. sole.',
      price: 3000
    },
    {
      img: 'assets/images/5.png',
      name: 'Nike',
      description: 'a high or low shoe, usually of fabric such as canvas, with a rubber or synthetic usually of fabric such as canvas, with a rubber or synthetic sole. sole.',
      price: 10000
    },
    {
      img: 'assets/images/6.png',
      name: 'Nike',
      description: 'a high or low shoe, usually of fabric such as canvas, with a rubber or synthetic usually of fabric such as canvas, with a rubber or synthetic sole. sole.',
      price: 8000
    },
  ]

  let listCards = []
  function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src = "${value.img}"/>
            <div class = "title">${value.name}</div>
            <div class = "dsc">${value.description}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>
        `
        list.appendChild(newDiv);
    })
  }
  initApp()

  function addToCart(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCart();
  }

  function reloadCart(){
    listCard.innerHTML="";
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) =>{
        totalPrice += value.price;
        count = count + value.quantity;

        if(value!=null){
          
            let newDiv = document.createElement('li')
            newDiv.innerHTML = `
                <div><img src = "${value.img}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeqty(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeqty(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv);
        }       
    })
    total.innerHTML = totalPrice.toLocaleString();
    quantity.innerText = count;
  }

  function changeqty(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCart();
  }
