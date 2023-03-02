let body = document.querySelector('body');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let button = document.querySelector('button');
const array = [
    {
        quote: `"The only true fear is the fear of the unknown."`, person: '- Hisoka',
        image: "url('img/Hisoka.jpeg') no-repeat center center/ cover"
    },
    {
        quote: `"Believe in yourself. Not in the you who believes in me. Not the me who believes in you. Believe in the you who believes in yourself."`, 
        person: '- Kamina',
        image: "url('img/Kamina.jpeg') no-repeat center center/ cover"
        },
    {
        quote: `"The only thing we're allowed to do is believe. We can't change anything."`,
        person: '- Yui',
        image: "url('img/yui.jpeg') no-repeat center center/ cover"
    },
    {
        quote: `"If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be."`,
        person: '- Naruto Uzumaki',
        image: "url('img/Naruto.jpeg') no-repeat center center/ cover"
    },
    {
        quote: `"To be strong is not just about physical abilities. It's about accepting and loving yourself for who you are."`,
        person: '- Kaneki Ken',
        image: "url('img/Kaneki.jpeg') no-repeat center center/ cover"
    },
    {
        quote: `"Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder."`,
        person: '- Gildarts Clive',
        image: "url('img/GildartsClive.jpg') no-repeat center center/ cover"
    },
    {
        quote: `"It's not about how hard you hit. It's about how hard you can get hit and keep moving forward."`,
        person: '- Saitama',
        image: "url('img/Saitama.jpeg') no-repeat center center/ cover"
    },
    {
        quote: `"If you can't find a reason to fight, then you shouldn't be fighting."`,
        person: '- Akame',
        image: "url('img/akame.jpeg') no-repeat center center/ cover"
    },
    {
        quote: `"There are no regrets in life. Just lessons."`,
        person: '- Jinbei Shishido',
        image: "url('img/jinebei.jpeg') no-repeat center center/ cover"
    },
    {
        quote: `"A lesson without pain is meaningless. For you cannot gain anything without sacrificing something else in return."`,
        person: '- Edward Elric',
        image: "url('img/download.jpeg') no-repeat center center/ cover"
    },
];

button.addEventListener("click", function(){
    let random = Math.floor(Math.random() * array.length);
    quote.innerText = array[random].quote;
    person.innerText = array[random].person;
    body.style.background = array[random].image;
});