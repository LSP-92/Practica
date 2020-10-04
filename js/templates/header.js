export const renderHeader = {
  render: (page) => {
    let headerMenu
    switch (page) {
      case 'user.html':
        headerMenu = `
                      <li><a href="./index.html">Inicio</a></li>
                    `
        break
      case 'login.html':
        headerMenu = `
                      <li><a href="./index.html">Inicio</a></li>
                    `
        break
      case 'signin.html':
        headerMenu = `
                      <li><a href="./index.html">Inicio</a></li>
                      <li><a href="./login.html">LogIn</a></li>
                     `
        break
      default:
        headerMenu = `
                      <li><a href="./index.html">Inicio</a></li>
                      <li><a href="./login.html">LogIn</a></li>
                      <li><a href="./signin.html">Resgístrate</a></li>
                    `
        break
    }
    return `<ul> ${headerMenu} </ul>`
  }

}
