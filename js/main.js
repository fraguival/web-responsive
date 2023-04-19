const turn = document.querySelector('.turn')
const menu = document.querySelector('.menu')

turn.addEventListener('click', () => {
    turn.classList.toggle('gyre')
    menu.classList.toggle('look')
})