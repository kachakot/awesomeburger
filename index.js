const burger = document.getElementsByClassName('js-toggle-main-nav')

burger[0].addEventListener('click', function(e) {
  e.stopPropagation()
  e.preventDefault()
  burger[0].classList.toggle('is-active')
})
