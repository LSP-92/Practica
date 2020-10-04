import { renderHeader } from './templates/header.js'
import { renderForm } from './templates/form.js'
import { renderFooter } from './templates/footer.js'
import { renderUser } from './templates/user.js'

function main () {
  // Renderizado de paginas
  const location = window.location.pathname.lastIndexOf('/') + 1
  const page = window.location.pathname.slice(location)

  document.querySelector('.menu').innerHTML = renderHeader.render(page)
  document.querySelector('.descriptFooter').innerHTML = renderFooter.render(page)
  if (page === 'login.html') {
    document.querySelector('.form').innerHTML = renderForm.render(page)
    renderForm.validateLogin(document.querySelector('.form'))
  }
  if (page === 'signin.html') {
    document.querySelector('.form').innerHTML = renderForm.render(page)
    renderForm.validateSign(document.querySelector('.form'))
  }

  if (page === 'user.html') {
    renderUser.render()
  }
}

document.addEventListener('DOMContentLoaded', main)
