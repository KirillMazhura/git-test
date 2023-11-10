const cartButton = document.querySelector("#cart-button")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".modal-close")
const buttonAuth = document.querySelector('.button-auth')
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')
const logInFOrm = document.querySelector('#logInForm')
const logInInput = document.querySelector('#login')
let login = localStorage.getItem('gloDelivery');
const userName = document.querySelector('.user-name')
const buttonOut = document.querySelector('.button-out')

cartButton.addEventListener('click', toggleModal)
closeModal.addEventListener('click', toggleModal)

function toggleModal () {
    modal.classList.toggle("is-open")
 }
function toggleModalAuth() {
   modalAuth.classList.toggle('is-open')
}
function authorized() {
   function logOut() {
      login = null
      buttonAuth.style.display = ''
      userName.style.display = ''
      buttonOut.style.display = ''
      buttonOut.removeEventListener('click', logOut)
      localStorage.removeItem('gloDelivery')
      checkAuth()
   }
   console.log('autorized')
   userName.textContent = login
   buttonAuth.style.display = 'none'
   userName.style.display = 'inline'
   buttonOut.style.display = 'block'
   buttonOut.addEventListener('click', logOut)
}
function notAuthorized() {
   console.log('notAuthorized')
   function logIn(event) {
      event.preventDefault()
      login = logInInput.value
      console.log(login)

      localStorage.setItem('gloDelivery', login)

      toggleModalAuth()
      buttonAuth.removeEventListener('click', toggleModalAuth)
      closeAuth.removeEventListener('click', toggleModalAuth)
      logInForm.removeEventListener('submit', logIn)
      logInForm.reset();
      checkAuth()
   }
   buttonAuth.addEventListener('click', toggleModalAuth)
   closeAuth.addEventListener('click', toggleModalAuth)
   logInForm.addEventListener('submit', logIn)
}
function checkAuth() {
   if(login) {
      authorized()
   } else {
      notAuthorized()
   }
}
checkAuth()

 new WOW().init();
