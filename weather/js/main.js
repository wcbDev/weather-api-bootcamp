const api_key = 'e192de5b329a1ce2533b6b552cfd96e7'

const getWeather = (e) => {
  e.preventDefault()
  const city = document.getElementById('city').value
  const state = document.getElementById('state').value
  const country = document.getElementById('country').value

  fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=${api_key}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    const lon = data[0].lon
    const lat = data[0].lat   

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.getElementById('displayCity').innerHTML = data.name 
      document.getElementById('displayWeather').innerHTML = data.main.temp

  })
    .catch(err => {
        console.log(`error ${err}`)
    })
  })
}


document.querySelector('#button').addEventListener('click', getWeather)