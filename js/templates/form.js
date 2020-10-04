import { typeForm } from './typeForm.js'
import { provincia } from '../provincias.js'

export const renderForm = {
  render: (page) => {
    let form
    switch (page) {
      case 'login.html':
        form = typeForm.logIn
        break
      case 'signin.html':
        form = typeForm.signIn
        break
    }
    return form
  },
  validateSign: function (element) {
    const dataForm = element.lastElementChild
    const radio = dataForm.querySelector('.radio')
    const genero = [...dataForm.querySelectorAll('[name=gen]')]
    const name = dataForm.querySelector('#name')
    const surname1 = dataForm.querySelector('#surname1')
    const surname2 = dataForm.querySelector('#surname2')
    const country = dataForm.querySelector('#pais')
    const region = dataForm.querySelector('#prov')
    const mail = dataForm.querySelector('#mail')
    const phone = dataForm.querySelector('#phone')
    const pass = dataForm.querySelector('#pass')
    const repass = dataForm.querySelector('#repass')
    const apiKey = dataForm.querySelector('#apikey')
    const condition = dataForm.querySelector('#Iacept')

    country.addEventListener('change', prov)
    dataForm.addEventListener('submit', sendData)
    country.addEventListener('change', () => {
      country.nextElementSibling
        .classList.add('nodisplay')
    })
    region.addEventListener('change', () => {
      region.nextElementSibling
        .classList.add('nodisplay')
    })

    condition.addEventListener('change', () => {
      condition.parentElement.nextElementSibling
        .classList.add('nodisplay')
    })

    radio.addEventListener('change', () => {
      radio.nextElementSibling
        .classList.add('nodisplay')
    })

    function prov () {
      if (country.value === 'spain') {
        region.classList.remove('nodisplay')
        itemProv('#prov')
      } else {
        if (!region.classList.contains('nodisplay')) {
          region.classList.add('nodisplay')
        }
      }
    }

    function itemProv (id) {
      let html = '<option selected="false" disabled="disabled">Provincia</option>'
      provincia.forEach(item => {
        html += `<option value="${item}">${item}</option>`
      })
      dataForm.querySelector(id).innerHTML = html
    }

    function sendData (ev) {
      const signData = {}
      ev.preventDefault()

      if (country.value === 'Pais') {
        const err = country.nextElementSibling
        err.classList.remove('nodisplay')
        err.classList.add('errorMessage')
      }
      if (country.value === 'spain') {
        if (region.value === 'Provincia') {
          const err = region.nextElementSibling
          err.classList.remove('nodisplay')
          err.classList.add('errorMessage')
        }
      }

      if (!dataForm.checkValidity()) {
        [...dataForm].forEach(item => {
          errorEvent(item)
        })
        return
      }

      if (pass.value !== repass.value) {
        alert('Las Contraseñas no coiciden')
      }
      signData.genero = genero.filter(item => item.checked)[0].value
      signData.name = name.value
      signData.surname1 = surname1.value
      signData.surname2 = surname2.value
      signData.mail = mail.value
      signData.phone = phone.value
      signData.apiKey = apiKey.value
      signData.country = country.value
      signData.region = region.value || ''
      signData.pass = pass.value
      signData.condition = condition.checked
      window.localStorage.setItem('localUser', JSON.stringify(signData))
      window.location = 'login.html'
    }
  },
  validateLogin: function (element) {
    const dataForm = element.lastElementChild
    const mail = dataForm.querySelector('#mail')
    const pass = dataForm.querySelector('#pass')

    dataForm.addEventListener('submit', validateData)
    function validateData (ev) {
      ev.preventDefault()
      if (!dataForm.checkValidity()) {
        [...dataForm].forEach(item => {
          errorEvent(item)
        })
      }
      const userReg = JSON.parse(window.localStorage.getItem('localUser'))

      dataForm.addEventListener('change', () => {
        dataForm.querySelector('#errLogin')
          .classList.add('nodisplay')
      })
      userCheck(userReg, pass, mail)
      function userCheck (user, pass, mail) {
        const userUpper = user.mail
        const mailUpper = mail.value
        const passUser = user.pass
        const passLogin = pass.value
        if (userUpper.toUpperCase() === mailUpper.toUpperCase() && passUser === passLogin) {
          window.sessionStorage.setItem('currentUser', JSON.stringify(mailUpper.toUpperCase()))
          window.location = 'user.html'
        } else {
          dataForm.querySelector('#errLogin').classList.remove('nodisplay')
        }
      }
    }
  }
}

function errorEvent (element) {
  if (!element.checkValidity()) {
    if (element.placeholder) {
      element.placeholder = `${element.placeholder}`
      element.classList.add('errrPlaceholder')
    }
    if (!element.placeholder) {
      const err = element.parentElement.nextElementSibling
      err.classList.remove('nodisplay')
      err.classList.add('errorMessage')
    }
  }
}
