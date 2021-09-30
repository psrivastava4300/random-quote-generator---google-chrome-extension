const index = Math.floor(Math.random()*1643);
fetch('https://type.fit/api/quotes')
    .then(data => data.json())
    .then(quoteData => {
        const quoteText = quoteData[index].text;
        const quoteElement = document.getElementById('quote');
        quoteElement.innerHTML = quoteText;
    })