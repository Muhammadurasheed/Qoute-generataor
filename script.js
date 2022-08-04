// Getting Quotes from Api;
    let quotesData = [];

//  Generate random number;
    function generateRandomFig() {
        return Math.floor(Math.random() * quotesData.length)
    }
    generateRandomFig();
//  Generate random quotes from Api
    const getQuote = async function () {
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        quotesData = await response.json();
        const randomQuotes = quotesData[generateRandomFig()];
        console.log(randomQuotes)
        
    } catch(error) {
        // getQuote();
        console.log('Whoops! something went wrong.', error)
    }
}

getQuote()
