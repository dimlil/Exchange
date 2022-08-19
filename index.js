let exchange = document.getElementById('exchange').value;

document.getElementById('exchange').addEventListener('change', () => {
    exchange = document.getElementById('exchange').value;
    console.log(exchange);
})

console.log(exchange);

async function getExchange() {
    const result = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json')
        .then((response) => response.json())
        .then((data) => { return data });
    console.log(result);
}

getExchange();