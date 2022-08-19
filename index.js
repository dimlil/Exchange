console.log('hey');

async function getExchange() {
    const result = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json')
            .then((response) => response.json())
            .then((data) => { return data });
    console.log(result);
}

getExchange();