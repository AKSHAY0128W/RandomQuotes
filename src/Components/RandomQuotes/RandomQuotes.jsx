import React ,{ useState } from 'react'
import './RandomQuotes.css'
import Twitter from '../Assets/Twitter.png'
import reload from '../Assets/reload.png'

const RandomQuotes = () => {
    let quotes = [];
    async function loadquotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();

    }
    const [quote, setQuote] = useState({
        text: 'Education is the most powerful weapon which you can use to change the world.',
        author: 'Nelson Mandela',
    })

    const random = () => {
        let select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select);
    }

    const tweet = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
    };
    loadquotes();
    return (
    <div className='Container'>
        <div className="quote">{quote.text}</div>
        <div className="line"></div>
        <div className="bottom">
            <div className="author">- {quote.author.split(',')[0]}</div>
            <div className="icons">
        <img src={reload} onClick={()=>{random()}} alt="" />
        <img src={Twitter} onClick={()=>{tweet()}} alt="" />
            </div>
        </div>
    </div>
  )
}

export default RandomQuotes
