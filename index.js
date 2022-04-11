var slider = function () {
  var slider = document.querySelector('.slider')
  var sliderWidth = slider.offsetWidth
  var slideList = slider.querySelector('.slider-wrap')
  var count = 1
  var items = document.querySelectorAll('li').length

  window.addEventListener('resize', function () {
    sliderWidth = slider.offsetWidth
  })

  var prevSlide = function () {
    if (count > 1) {
      count = count - 2
      slideList.style.left = sliderWidth * count + 'px'
      count++
    } else if (count === 1) {
      count = items - 1
      slideList.style.left = '-' + sliderWidth * count + 'px'
      count++
    }
  }

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = '-' + sliderWidth * count + 'px'
      count++
    } else if (count === items) {
      slideList.style.left = '0px'
      count = 1
    }
  }

  setInterval(function () {
    nextSlide()
  }, 5000)
}

window.onload = function () {
  slider()
}
