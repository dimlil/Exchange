let exchange = document.getElementById('exchange').value;

document.getElementById('exchange').addEventListener('change', () => {
    exchange = document.getElementById('exchange').value;
    getExchange();
});

async function getExchange() {
    const result = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
        .then((response) => response.json())
        .then((data) => { return data.usd });
    getNeededCurrencies(result);
}

function getNeededCurrencies(obj) {
    Object.entries(obj).forEach(entry => {
        const [key, value] = entry;
        if (key === "usd" || key === "eur" || key === "aud" || key === "cad" || key === "chf" || key === "nzd" || key === "bgn") {
            if (key !== exchange.toLowerCase()) {
                console.log(key, value);
            }
        }
    });
}

getExchange();