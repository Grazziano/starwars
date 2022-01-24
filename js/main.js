const results = document.querySelector('#results')

async function asyncFetch(value) {
  // console.log(value);
  const res = await fetch(`https://swapi.dev/api/${value}/`)
  const data = await res.json()
  // console.log(data);
  displayResults(data, value)
}

function displayResults(data, value) {
  let output = ''
  // console.log(data)
  if (value === 'films') {
    data.results.forEach((element) => {
      output += `
      <div class="card p-3 m-3" style="opacity:.8">
        <h4 class="card-title text-center">${element.title}</h4>
        <div class="card-content">
          <span style="text-decoration:underline">Producer</span>: ${element.producer}<br>
          <span style="text-decoration:underline">Director</span>: ${element.director}<br>
          <span style="text-decoration:underline">Release Date</span>: ${element.release_date}<br>
          <p class="text-center">${element.opening_crawl}</p>
        </div>
      </div>
      `
    })
  }
  if (value === 'people') {
    data.results.forEach((element) => {
      output += `
      <div class="card p-3 m-3" style="opacity:.8">
        <h4 class="card-title text-center">${element.name}</h4>
        <div class="card-content">
          <span style="text-decoration:underline">Height</span>: ${element.height}<br>
          <span style="text-decoration:underline">Birth Year</span>: ${element.burth_year}<br>
          <span style="text-decoration:underline">Skin Color</span>: ${element.skin_color}<br>
        </div>
      </div>
      `
    })
  }
  if (value === 'vehicles') {
    data.results.forEach((element) => {
      output += `
      <div class="card p-3 m-3" style="opacity:.8">
        <h4 class="card-title text-center">${element.name}</h4>
        <div class="card-content">
          <span style="text-decoration:underline">Capacity</span>: ${element.cargo_capacity} kg<br>
          <span style="text-decoration:underline">Model</span>: ${element.model}<br>
          <span style="text-decoration:underline">Manufacturer</span>: ${element.manufacturer}<br>
          <span style="text-decoration:underline">Vehicle Class</span>: ${element.vehicle_class}<br>
        </div>
      </div>
      `
    })
  }
  results.innerHTML = output
}

// event listner for buttons
document.querySelector('#buttons').addEventListener('click', (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase())
})
