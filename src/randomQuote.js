import React, { Component } from "react";
import quoteArr from "./quote";

class GetQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.getRandomIndex = this.getRandomIndex.bind(this);
  }
  componentDidMount() {
    this.setState({
      quote: quoteArr[this.getRandomIndex()].quote,
      author: quoteArr[this.getRandomIndex()].author,
    });
  }
  getRandomIndex() {
    let quoteArrLength = quoteArr.length;
    return Math.floor(Math.random() * quoteArrLength);
  }

  handleClick() {
    this.setState({
      quote: quoteArr[this.getRandomIndex()].quote,
      author: quoteArr[this.getRandomIndex()].author,
    });
  }
  render() {
    const twitterLink = `https://twitter.com/intent/tweet?text=${this.state.quote}%0D%0A%0D%0A-${this.state.author}`;
    return (
      <div className="card">
        <div className="card-header">Random Quote Machine</div>
        <div className="card-body" id="quote-box">
          <h4 className="card-title" id="text">
            {this.state.quote}
          </h4>
          <p className="card-text" id="author">
            {this.state.author}
          </p>
          <div className="d-flex">
            <button
              id="new-quote"
              type="button"
              className="btn btn-success btn-block"
              onClick={this.handleClick}
            >
              New Quote
            </button>
            <a
              href={twitterLink}
              rel="noreferrer"
              target="_blank"
              id="tweet-quote"
              className="btn btn-primary btn-block"
              role="button"
            >
              Tweet Quote
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GetQuote;
