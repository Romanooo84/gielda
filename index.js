
dana = document.querySelector('.dane')

const fetchStockData = () =>
  console.log('start2')
  fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=YPYGsi2Npvnieiy03z8hwPaA7U5rMtDt`)
    .then(response => response.json())
    .then(data => {
        dana.textContent=data.results[0].v
        console.log(data);
        console.log('cokolwiek')
      return data; // Dodane zwracanie obietnicy z przetworzonymi danymi
    })
    .catch(err => {
      console.error(err);
      throw err; // Rzucenie błędu, aby można było go obsłużyć gdzie indziej, jeśli trzeba
    });
