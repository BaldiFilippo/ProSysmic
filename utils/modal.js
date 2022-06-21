// project modal

const projectModal = document.querySelector('.modal')
const appearModalBtn = document.querySelectorAll('.project-button')
const closeModalBtn = document.querySelectorAll('.modal-close-btn')
const projectTitle = document.querySelectorAll('.project-title')
const projectDescription = document.querySelectorAll('.project-text')
const modalTitle = document.querySelector('.modal-title')
const modalDescription = document.querySelector('.modal-text')
const modalContent = document.querySelector('.modal-content')

appearModalBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    //appear a modal
    projectModal.classList.add('appear')

    // change the mofal content according to the button clicked
    switch (e.target.dataset.id) {
      case 'project-1':
        modalTitle.innerHTML = projectTitle[0].innerHTML
        modalDescription.innerHTML = projectDescription[0].innerHTML
        break
      case 'project-2':
        modalTitle.innerHTML = projectTitle[1].innerHTML
        modalDescription.innerHTML = projectDescription[1].innerHTML
        break
      case 'project-3':
        modalTitle.innerHTML = projectTitle[2].innerHTML
        modalDescription.innerHTML = projectDescription[2].innerHTML
        break
      case 'project-4':
        modalTitle.innerHTML = projectTitle[3].innerHTML
        modalDescription.innerHTML = projectDescription[3].innerHTML
        break
      case 'project-5':
        modalTitle.innerHTML = projectTitle[4].innerHTML
        modalDescription.innerHTML = projectDescription[4].innerHTML
        break
      case 'project-6':
        modalTitle.innerHTML = projectTitle[5].innerHTML
        modalDescription.innerHTML = projectDescription[5].innerHTML
        break
      case 'project-7':
        modalTitle.innerHTML = projectTitle[6].innerHTML
        modalDescription.innerHTML = projectDescription[6].innerHTML
        break
      case 'project-8':
        modalTitle.innerHTML = projectTitle[7].innerHTML
        modalDescription.innerHTML = projectDescription[7].innerHTML
        break
      case 'project-9':
        modalTitle.innerHTML = projectTitle[8].innerHTML
        modalDescription.innerHTML = projectDescription[8].innerHTML
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
    modal.classList.remove('appear')
  })
})
