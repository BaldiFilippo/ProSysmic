// project modal

const projectModal = document.querySelector('.modal')
const appearModalBtn = document.querySelectorAll('.project-button')
const closeModalBtn = document.querySelectorAll('.modal-close-btn')
const projectTitle = document.querySelectorAll('.project-title')
const projectDescription = document.querySelectorAll('.project-text')
const modalTitle = document.querySelector('.modal-title')
const modalDescription = document.querySelector('.modal-text')
const modalContent = document.querySelector('.modal-content')

//array of images

appearModalBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    //appear a modal
    projectModal.classList.add('appear')
    // cant scroll the page
    document.body.style.overflow = 'hidden'
    //body darken
    document.querySelector('.darkElement').style.opacity = '1'

    // change the mofal content according to the button clicked
    switch (e.target.dataset.id) {
      case 'project-1':
        modalTitle.innerHTML = projectTitle[0].innerHTML
        modalDescription.innerHTML = projectDescription[0].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/eni3.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eni4.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eni5.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eni6.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eni2.png" alt="" /></li>


            </ul>
          </section>
        `

        break

      case 'project-2':
        modalTitle.innerHTML = projectTitle[1].innerHTML
        modalDescription.innerHTML = projectDescription[1].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/smith1.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/smith2.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/smith3.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/smith4.png" alt="" /></li>
            </ul>
          </section>
        `
        break
      case 'project-3':
        modalTitle.innerHTML = projectTitle[2].innerHTML
        modalDescription.innerHTML = projectDescription[2].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/donati1.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/donati2.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/donati3.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/doanti4.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/donati5.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/donati6.png" alt="" /></li>
            </ul>
          </section>
        `

        break
      case 'project-4':
        modalTitle.innerHTML = projectTitle[3].innerHTML
        modalDescription.innerHTML = projectDescription[3].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/foma1.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/foma2.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/foma3.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/foma4.png" alt="" /></li>
            </ul>
          </section>
        `

        break
      case 'project-5':
        modalTitle.innerHTML = projectTitle[4].innerHTML
        modalDescription.innerHTML = projectDescription[4].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/eusider1.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eusider2.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eusider4.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eusider5.png" alt="" /></li>
            </ul>
          </section>
        `
        break
      case 'project-6':
        modalTitle.innerHTML = projectTitle[5].innerHTML
        modalDescription.innerHTML = projectDescription[5].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/a2a.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/s2a1.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/a2a3.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/a2a4.png" alt="" /></li>
            </ul>
          </section>
        `
        break
      case 'project-7':
        modalTitle.innerHTML = projectTitle[6].innerHTML
        modalDescription.innerHTML = projectDescription[6].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/aruba1.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/aruba2.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/aruba3.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/aruba4.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/aruba5.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/aruba6.png" alt="" /></li>

           
            </ul>
          </section>
        `
        break
      case 'project-8':
        modalTitle.innerHTML = projectTitle[7].innerHTML
        modalDescription.innerHTML = projectDescription[7].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/warcom.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/warcom1.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/warcom2.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/warcom3.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/warcom5.png" alt="" /></li>

            </ul>
          </section>
        `
        break
      case 'project-9':
        modalTitle.innerHTML = projectTitle[8].innerHTML
        modalDescription.innerHTML = projectDescription[8].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fidora.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fidora1.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fidora2.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fidora3.png" alt="" /></li>



            </ul>
          </section>
        `
        break
      case 'project-10':
        modalTitle.innerHTML = projectTitle[9].innerHTML
        modalDescription.innerHTML = projectDescription[9].innerHTML
        break
      case 'project-11':
        modalTitle.innerHTML = projectTitle[10].innerHTML
        modalDescription.innerHTML = projectDescription[10].innerHTML
        break
      case 'project-12':
        modalTitle.innerHTML = projectTitle[11].innerHTML
        modalDescription.innerHTML = projectDescription[11].innerHTML
        break
      case 'project-13':
        modalTitle.innerHTML = projectTitle[12].innerHTML
        modalDescription.innerHTML = projectDescription[12].innerHTML
        break
      case 'project-14':
        modalTitle.innerHTML = projectTitle[13].innerHTML
        modalDescription.innerHTML = projectDescription[13].innerHTML
        break
      case 'project-15':
        modalTitle.innerHTML = projectTitle[14].innerHTML
        modalDescription.innerHTML = projectDescription[14].innerHTML
        break
      case 'project-16':
        modalTitle.innerHTML = projectTitle[15].innerHTML
        modalDescription.innerHTML = projectDescription[15].innerHTML
        break
      case 'project-17':
        modalTitle.innerHTML = projectTitle[16].innerHTML
        modalDescription.innerHTML = projectDescription[16].innerHTML
        break
      case 'project-18':
        modalTitle.innerHTML = projectTitle[17].innerHTML
        modalDescription.innerHTML = projectDescription[17].innerHTML
        break
      case 'project-19':
        modalTitle.innerHTML = projectTitle[18].innerHTML
        modalDescription.innerHTML = projectDescription[18].innerHTML
        break
      case 'project-20':
        modalTitle.innerHTML = projectTitle[19].innerHTML
        modalDescription.innerHTML = projectDescription[19].innerHTML
        break
      case 'project-21':
        modalTitle.innerHTML = projectTitle[20].innerHTML
        modalDescription.innerHTML = projectDescription[20].innerHTML
        break
      case 'project-22':
        modalTitle.innerHTML = projectTitle[21].innerHTML
        modalDescription.innerHTML = projectDescription[21].innerHTML
        break
    }
  })
})

closeModalBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    //close a modal
    projectModal.classList.remove('appear')

    // can scroll the page
    document.body.style.overflow = 'auto'
    //body darken
    document.querySelector('.darkElement').style.opacity = '0'
    //remove the grid of images
    modalContent.innerHTML = ''
  })
})

var projectSlider = function () {
  var slider = document.querySelector('.project-slider')
  var sliderWidth = slider.offsetWidth
  var slideList = slider.querySelector('.project-slider-ul')
  var count = 1
  var items = document.querySelectorAll('.project-slider-image').length
  var buttonLeft = slider.querySelector('.project-slider-button-left')
  var buttonRight = slider.querySelector('.project-slider-button-right')

  window.addEventListener('resize', function () {
    sliderWidth = slider.offsetWidth
  })

  // on click of the left button call the function prevSlide
  buttonLeft.addEventListener('click', function () {
    prevSlide()
  })
  // on click of the right button call the function nextSlide
  buttonRight.addEventListener('click', function () {
    nextSlide()
  })

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = '-' + sliderWidth * count + 'px'
      count++
    } else if (count === items) {
      slideList.style.left = '0px'
      count = 1
    }
  }

  var prevSlide = function () {
    if (count > 1) {
      slideList.style.left = '-' + sliderWidth * (count - 2) + 'px'
      count--
    } else if (count === 1) {
      slideList.style.left = '-' + sliderWidth * (items - 1) + 'px'
      count = items
    }
  }

  setInterval(function () {
    nextSlide()
  }, 10000)
}

document.querySelectorAll('.slider-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    projectSlider()
  })
})
