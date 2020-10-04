export const renderFooter = {
  render: (page) => {
    let foot
    switch (page) {
      case 'user.html':
        foot = ` <div><p>Aquí puedes encontrar todas las películas</p></div>
                    `
        break
      case 'login.html':
        foot = `
                  <div><a href="./signin.html">Click para resgístrate</a></div>
               `
        break
      case 'signin.html':
        foot = `
                  
                `
        break
      default:
        foot = `
                      <div><a href="./index.html">Contacto</a></div>
                      <div><a href="./signin.html">FAQ</a></div>
                      <div><a href="./login.html">Quiénes somos</a></div>
                    `
        break
    }
    return foot
  }

}
