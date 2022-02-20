const url = 'https://api.adviceslip.com/advice'
const quote = document.querySelector('.quote')
const btn = document.querySelector('.card-btn')

btn.addEventListener('click', getQuote)

function getQuote() {
    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(data => {
        quote.innerHTML = JSON.stringify(data.slip.advice)
    })
    .catch(err => {
        console.log(error)
    })
}