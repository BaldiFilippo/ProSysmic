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
              <li class="project-slider-image"><img src="/img/eni3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eni4.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eni5.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eni6.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eni2.jpg" alt="" /></li>


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
              <li class="project-slider-image"><img src="/img/smith1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/smith2.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/smith3.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/smith4.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/smith5.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/smith6.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/smith7.jpg" alt="" /></li>
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
              <li class="project-slider-image"><img src="/img/donati1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/donati2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/donati3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/doanti4.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/donati5.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/donati6.jpg" alt="" /></li> 

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
              <li class="project-slider-image"><img src="/img/foma1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/foma2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/foma3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/foma4.jpg" alt="" /></li>
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
              <li class="project-slider-image"><img src="/img/eusider1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eusider2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eusider4.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eusider5.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eusider3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eusider6.jpg" alt="" /></li>
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

              <li class="project-slider-image"><img src="/img/a2a5.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/a2a.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/a2a3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/a2a4.jpg" alt="" /></li>
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
              <li class="project-slider-image"><img src="/img/aruba1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/aruba2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/aruba3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/aruba4.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/aruba5.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/aruba6.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/aruba7.jpg" alt="" /></li>

           
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
              <li class="project-slider-image"><img src="/img/warcom.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/warcom1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/warcom2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/warcom3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/warcom4.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/warcom5.jpg" alt="" /></li>

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
              <li class="project-slider-image"><img src="/img/1.jpeg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fidora.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fidora1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fidora2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fidora3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fidora10.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fidora11.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fidora12.png" alt="" /></li>




            </ul>
          </section>
        `
        break
      case 'project-10':
        modalTitle.innerHTML = projectTitle[9].innerHTML
        modalDescription.innerHTML = projectDescription[9].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/fasb.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fasb2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fasb3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fasb5.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fasb4.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/fasb6.jpg" alt="" /></li>
            </ul>
          </section>
        `
        break
      case 'project-11':
        modalTitle.innerHTML = projectTitle[10].innerHTML
        modalDescription.innerHTML = projectDescription[10].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/a2a2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/nuvolera1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/nuvolera2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/nuvolera3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/a2a5.jpg" alt="" /></li>

            </ul>
          </section>
        `

        break
      case 'project-12':
        modalTitle.innerHTML = projectTitle[11].innerHTML
        modalDescription.innerHTML = projectDescription[11].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/4.jpg" alt="" /></li>

              <li class="project-slider-image"><img src="/img/logiman2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/logiman3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/logiman4.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/logiman5.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/logiman6.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/logiman7.jpg" alt="" /></li>


              
            </ul>
            `

        break
      case 'project-13':
        modalTitle.innerHTML = projectTitle[12].innerHTML
        modalDescription.innerHTML = projectDescription[12].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/vezzola.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/vezzola2.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/vezzola3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/vezzola4.jpg" alt="" /></li>
              
            </ul>
          </section>
        `

        break
      case 'project-14':
        modalTitle.innerHTML = projectTitle[13].innerHTML
        modalDescription.innerHTML = projectDescription[13].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/agrisolf1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/agrisolf2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/agrisolf3.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/agrisolf4.jpg" alt="" /></li>
              
            </ul>
          </section>
        `
        break
      case 'project-15':
        modalTitle.innerHTML = projectTitle[14].innerHTML
        modalDescription.innerHTML = projectDescription[14].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/benaco1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/benaco2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/benaco3.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/benaco4.jpg" alt="" /></li>

              
            </ul>
          </section>
        `
        break
      case 'project-16':
        modalTitle.innerHTML = projectTitle[15].innerHTML
        modalDescription.innerHTML = projectDescription[15].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/bs1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/bs2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/bs3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/bs4.jpg" alt="" /></li>
          
              
              
            </ul>
          </section>
        `
        break
      case 'project-17':
        modalTitle.innerHTML = projectTitle[16].innerHTML
        modalDescription.innerHTML = projectDescription[16].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/riboli1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/riboli2.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/riboli3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/riboli4.jpg" alt="" /></li>
            </ul>
          </section>
        `
        break
      case 'project-18':
        modalTitle.innerHTML = projectTitle[17].innerHTML
        modalDescription.innerHTML = projectDescription[17].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/serioli.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/serioli2.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/serioli1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/serioli3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/serioli4.jpg" alt="" /></li>

            </ul>
          </section>
        `
        break
      case 'project-19':
        modalTitle.innerHTML = projectTitle[18].innerHTML
        modalDescription.innerHTML = projectDescription[18].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/volpi.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/volpi2.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/volpi3.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/volpi4.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/volpi5.png" alt="" /></li>
            </ul>
          </section>
        `
        break
      case 'project-20':
        modalTitle.innerHTML = projectTitle[19].innerHTML
        modalDescription.innerHTML = projectDescription[19].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">

              <li class="project-slider-image"><img src="/img/zatti1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/zatti2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/zatti3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/zatti4.jpg" alt="" /></li>  



            </ul>
          </section>
        `
        break
      case 'project-21':
        modalTitle.innerHTML = projectTitle[20].innerHTML
        modalDescription.innerHTML = projectDescription[20].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/steel1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/steel2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/steel3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/steel4.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/steel5.jpg" alt="" /></li>
              
            </ul>
          </section>
        `
        break
      case 'project-22':
        modalTitle.innerHTML = projectTitle[21].innerHTML
        modalDescription.innerHTML = projectDescription[21].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            
             <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/belleri1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/belleri2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/belleri3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/belleri4.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/belleri5.jpg" alt="" /></li>
            </ul>
          </section>
        `
        break
      case 'project-23':
        modalTitle.innerHTML = projectTitle[22].innerHTML
        modalDescription.innerHTML = projectDescription[22].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/ascc-01-min.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/ascc-02-min.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/ascc-03-min.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/ascc-04-min.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/ascc-05-min.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/ascc-07-min.jpg" alt="" /></li>
            </ul>
          </section>
        `
        break
      case 'project-24':
        modalTitle.innerHTML = projectTitle[23].innerHTML
        modalDescription.innerHTML = projectDescription[23].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/celav01.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/celav02.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/celav03.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/celav04.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/celav05.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/celav06.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/celav07.jpg" alt="" /></li>
             
            </ul>
          </section>
        `
        break
      case 'project-25':
        modalTitle.innerHTML = projectTitle[24].innerHTML
        modalDescription.innerHTML = projectDescription[24].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/feltri2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/feltri3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/feltri4.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/feltri5.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/feltri6.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/feltri7.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/feltri8.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/feltri9.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/feltri10.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/feltri11.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/feltri12.jpg" alt="" /></li>
             
              
            
             
            </ul>
          </section>
        `
        break
      case 'project-26':
        modalTitle.innerHTML = projectTitle[25].innerHTML
        modalDescription.innerHTML = projectDescription[25].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/eurocar1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eurocar2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eurocar3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eurocar4.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eurocar5.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/eurocar6.jpg" alt="" /></li>
            </ul>
          </section>
        `
        break
      case 'project-27':
        modalTitle.innerHTML = projectTitle[26].innerHTML
        modalDescription.innerHTML = projectDescription[26].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/italgraniti1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/italgraniti2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/italgraniti7.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/italgraniti4.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/italgraniti5.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/italgraniti6.jpg" alt="" /></li>

             
            </ul>
          </section>
        `
        break
      case 'project-28':
        modalTitle.innerHTML = projectTitle[27].innerHTML
        modalDescription.innerHTML = projectDescription[27].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/mafeco5.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/mafeco1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/mafeco2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/mafeco3.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/mafeco4.jpg" alt="" /></li>
           

             
            </ul>
          </section>
        `
        break
      case 'project-29':
        modalTitle.innerHTML = projectTitle[28].innerHTML
        modalDescription.innerHTML = projectDescription[28].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/sre1.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/sre2.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/sre3.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/sre4.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/sre5.png" alt="" /></li>

          
           

             
            </ul>
          </section>
        `
        break
      case 'project-30':
        modalTitle.innerHTML = projectTitle[29].innerHTML
        modalDescription.innerHTML = projectDescription[29].innerHTML
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/mirage1.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/mirage2.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/mirage4.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/mirage6.jpg" alt="" /></li>
              <li class="project-slider-image"><img src="/img/mirage8.jpg" alt="" /></li>
 
            </ul>
          </section>
        `
        break
      case 'project-bim-1':
        modalTitle.innerHTML = 'AEC CONTRUZIONI'
        modalDescription.innerHTML = ''
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/bim1.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/bim2.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/bim3.png" alt="" /></li>
            </ul>
          </section>
        `
        break
      case 'project-bim-2':
        modalTitle.innerHTML = 'LAUDI SRL'
        modalDescription.innerHTML = ''
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/bim7.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/bim8.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/bim9.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/bim10.png" alt="" /></li>

            </ul>
          </section>
        `
        break
      case 'project-bim-3':
        modalTitle.innerHTML = 'EUROSPIN'
        modalDescription.innerHTML = ''
        modalContent.innerHTML = `
          <section class="project-slider animation">
          <button class="project-slider-button-left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="project-slider-button-right">
            <i class="fas fa-chevron-right"></i>
          </button>

            <ul class="project-slider-ul">
              <li class="project-slider-image"><img src="/img/bim4.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/bim5.png" alt="" /></li>
              <li class="project-slider-image"><img src="/img/bim6.png" alt="" /></li>

            </ul>
          </section>
        `
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
  console.log(slider)

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
