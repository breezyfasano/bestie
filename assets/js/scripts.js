

let changeQuote = (arr, element) => {
    let randomQuote = arr[Math.floor(Math.random() * arr.length)];
    element.textContent = randomQuote;
}

window.addEventListener('load', function (event) {
    // Home page quotes
    const quotes = ["fuck this job *goes to work*", "YOWAIMO", "time for a little treat", "i'm surprised there are people stupider than me", "wake up early? take 10 damage", "do it for serentia", "don't forget - you're a material gowrl", "anyone that hurts you can kick rocks", "night out with the girls *takes out Asuka, Rei, and Mari*", "when we have a lil coffee, life is daijoubu", "do it for claude", "time to put on the ol' 9 to 5 cat ears"];
    const text = document.querySelector('.quotes');
    changeQuote(quotes, text);
});
