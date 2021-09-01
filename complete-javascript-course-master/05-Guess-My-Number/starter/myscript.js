'use strict';

let displayQuote = document.querySelector(`.number`)

const calcVat = function(price) {
    return price * 0.2
}

const repairPrice = function(price) {
    
    let sum = price
    sum += 6
    sum += calcVat(price)
    sum += 35
    sum = sum * 0.018 + sum
    // console.log(myPrice)
    return Math.round(sum * 100) / 100
}

document.querySelector(`.check`).addEventListener(`click`, function(){
    const nonVatPrice = Number(document.querySelector(`.guess`).value)

    let quote = (repairPrice(nonVatPrice))
    displayQuote.textContent = quote
    displayQuote.style.width = `55rem`
    document.querySelector('body').style.backgroundColor = `#60b347`
    
})

//ON PRESSING RESET

document.querySelector(`.again`).addEventListener(`click`, function() {
    document.querySelector(`.guess`).value = ''
    document.querySelector(`body`).style.backgroundColor = `#222`
    document.querySelector(`.number`).style.width = `15rem`
    document.querySelector(`.number`).textContent = '?'
})