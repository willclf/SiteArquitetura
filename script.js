const btnMenu = document.querySelector('.menu-mobile')

btnMenu.addEventListener ('click', () => {
    document.querySelector('.active').classList.toggle('desactive')
})