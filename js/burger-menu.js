let burger = document.querySelector(".burger")
burger.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.menu-list').classList.toggle('open')
})
