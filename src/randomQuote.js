import React, { Component } from "react";
import quoteArr from "./quote";

class GetQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quoteArr[randomIndex].quote,
      author: quoteArr[randomIndex].author,
    };
    this.handleClick = this.handleClick.bind(this);
    this.getRandomIndex = this.getRandomIndex.bind(this);
  }

  handleClick() {
    const randomIndex = this.getRandomIndex();
    this.setState({
      quote: quoteArr[randomIndex].quote,
      author: quoteArr[randomIndex].author,
    });
  }
  getRandomIndex() {
    let quoteArrLength = quoteArr.length;
    return Math.floor(Math.random() * quoteArrLength);
  }
  render() {
    return (
      <div id="quote-box">
        <div id="text">{this.state.quote}</div>
        <div id="author">{this.state.author}</div>
        <button id="new-quote" onClick={this.handleClick}>
          New Quote
        </button>
        <a
          href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
          rel="noreferrer"
          target="_blank"
          id="tweet-quote"
        >
          Tweet Quote
        </a>
      </div>
    );
  }
}

export default GetQuote;
