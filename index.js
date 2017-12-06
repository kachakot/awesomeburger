const burger = document.getElementByClassName('.js-toggle-main-nav')

burger.addEventListener('click', function (e) {
  e.stopPropagation()
  e.preventDefault()
  burger.classList.toggle('is-active')
})
