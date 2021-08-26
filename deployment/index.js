const yumBtn = document.querySelector('#yumm1')
const rosieBtn = document.querySelector('#yumm2')
const theMixerBtn = document.querySelector('#yumm3')
const teethAndYummyBtn = document.querySelector('#yumm4')
const lightAsAirBtn = document.querySelector('#yumm5')
const cherryOnTopBtn = document.querySelector('#yumm6')
const clearCart = document.querySelector('#clear')
const cart = document.querySelector('#numbers')

let count = 0

yumBtn.addEventListener('click', cartIncrease)
rosieBtn.addEventListener('click', cartIncrease)
theMixerBtn.addEventListener('click', cartIncrease)
teethAndYummyBtn.addEventListener('click', cartIncrease)
lightAsAirBtn.addEventListener('click', cartIncrease)
cherryOnTopBtn.addEventListener('click', cartIncrease)
clearCart.addEventListener('click', emptyCart)

function cartIncrease(){
    count = count + 1
    cart.textContent = count;
}

function emptyCart(){
    count = 0
    cart.textContent = count
}