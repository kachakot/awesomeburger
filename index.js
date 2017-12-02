import $ from 'jquery'

const $burger = $('.js-toggle-main-nav')

$burger.on('click.togglemenu', function (e) {
  e.stopPropagation()
  e.preventDefault()
  $burger.toggleClass('is-active')
})
