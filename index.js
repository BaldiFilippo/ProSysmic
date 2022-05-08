var slider = function () {
  var slider = document.querySelector('.slider')
  var sliderWidth = slider.offsetWidth
  var slideList = slider.querySelector('.slider-wrap')
  var count = 1
  var items = document.querySelectorAll('.slider-image').length

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
  }, 7000)
}

window.onload = function () {
  slider()
}

const images = document.querySelectorAll('.images img')
const modal = document.querySelector('.modal')
const modalImg = document.querySelector('.modalImg')
const modalTxt = document.querySelector('.modalTxt')
const close = document.querySelector('.close')

images.forEach((image) => {
  image.addEventListener('click', () => {
    modalImg.src = image.src
    modalTxt.innerHTML = image.alt
    modal.classList.add('appear')

    close.addEventListener('click', () => {
      modal.classList.remove('appear')
    })
  })
})
