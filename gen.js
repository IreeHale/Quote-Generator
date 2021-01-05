//Get a Quote From API
async function getQoute() {
    const apiUrl = 'http://api.forismatic.com/api/1.0/method=getQoute&lang=en&format=json';
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('whoops, no quote', error);
    }
}

//On Load
getQuote();