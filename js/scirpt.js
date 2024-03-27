const product = {
    crazy: {
        name: "crazy",
        price: 31000,
        amount: 0,
        img: "images/burger_1.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    light: {
        name: "light",
        price: 26000,
        amount: 0,
        img: "images/burger_2.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    cheeseburger: {
        name: "cheeseburger",
        price: 29000,
        amount: 0,
        img: "images/burger_3.png",
        get Summ() {
            return this.price * this.amount
        }
    },

    dburger: {
        name: "dburger",
        price: 24000,
        amount: 0,
        img: "images/burger_4.png",
        get Summ() {
            return this.price * this.amount
        }
    },
}

const btns = document.querySelectorAll('.card__shop'),
    basketBox = document.querySelector('.basket__box');


btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        const parent = btn.closest('.card'),
            parentId = parent.getAttribute('id')
        product[parentId].amount++
        basketInfo()
       

    })
})

function basketInfo() {
    const shopItem = document.querySelector(".shop__item")
    const productArr = []
 
    for (const key in product) {
        const pk = product[key]
        const productCard = document.querySelector(`#${key}`),
            span = productCard.querySelector('.card__item');

        if (pk.amount) {
            span.classList.add('active')
            span.innerHTML = pk.amount
            productArr.push(pk)
        }else{
            span.classList.remove('active')
        }
for (let i = 0; i < productArr.length; i++) {
  console.log(productArr.length);
    if(productArr.length> 0){
       shopItem.innerHTML = productArr.length
       shopItem.classList.add('active')

    }else{
        shopItem.classList.remove('active')
    }
    console.log(shopItem);
    
}
    
  
    basketBox.innerHTML = ''
    for (let i = 0; i < productArr.length; i++) {
        basketBox.innerHTML += basketCard(productArr[i])

    }
    


const basketPrice = document.querySelector('.basket__total')

let totalPrice = 0


for (const key in product) {
    let pk = product[key]

let menuPrice = pk.price * pk.amount

totalPrice+= menuPrice


basketPrice.innerHTML = totalPrice


}



}

function basketCard(card) {
    const { amount, price, img, name } = card
    return `<div class="basket__card">
                <img class="basket__img" src="${img}" alt="">
                <div class="basket__info">
                    <h3 class="basket__title">${name}</h3>
                    <p class="basket__price">${price} сум</p>
                </div>
                <div class="basket__btns" id="${name.toLowerCase()}_card">
                    <span class="basket__sym">-</span>
                    <span class="basket__amount">${amount}</span>
                    <span class="basket__sym">+</span>
                </div>
            </div>`
}

window.addEventListener('click', (e) => {
    const btn = e.target
    if (btn.classList.contains('basket__sym')) {
        const parent = btn.closest('.basket__btns'),
            parentId = parent.getAttribute('id').split('_')[0]
        btn.innerHTML == '+' ? product[parentId].amount++ : product[parentId].amount--
        basketInfo()
        console.log(product);
    }
})

const basket = document.querySelector('.basket'),
    shopBtn = document.querySelector('.shop '),
    basketClose = document.querySelector('.basket__close');
shopBtn.addEventListener('click', () => {
    basket.classList.add('active')
})
basketClose.addEventListener('click', () => {
    basket.classList.remove('active')
})

}