let page = 1

export const renderUser = {
  render: () => {
    const moviesList = document.querySelector('.main')
    const bNext = moviesList.querySelector('#btn_next')
    const bBack = moviesList.querySelector('#btn_back')
    const user = JSON.parse(window.localStorage.getItem('localUser'))
    const apiKey = user.apiKey
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
    getData(url, moviesList)
    bNext.addEventListener('click', actionNext)
    bBack.addEventListener('click', actionBack)

    function actionNext () {
      url += `&page=${page + 1}`
      page += 1
      getData(url, moviesList)
    }
    function actionBack () {
      if (page !== 1) {
        url += `&page=${page - 1}`
        page -= 1
        getData(url, moviesList)
      }
    }
  }
}

function createData (data, moviesList) {
  let html = ''
  data.results.forEach(item => {
    html += `<dt>${item.title}</dt>
    <dd>${item.overview}</dd>
    <dd>ID=${item.id}</dd>
    <input type="button" class="buttonMore" id=${item.id} value="Mas">
    `
    moviesList.querySelector('.list').innerHTML = html
  })
}
function getData (url, moviesList) {
  fetch(url).then(resp => {
    console.log(resp)
    if (resp.status < 200 || resp.status >= 300) {
      throw new Error('HTTP Error ' + resp.status)
    }
    return resp.json()
  })
    .then(data => createData(data, moviesList))
    .catch(error => alert(error.message))
}
