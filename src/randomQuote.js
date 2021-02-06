import React, { Component } from "react";

class GetQuote extends Component {
  render() {
    return (
      <div className="quoteContainer card">
        <h2>Random Quote Machine</h2>
        <div className="card">
          <div className="card-body" id="quote-box">
            <h4 className="card-title quote-text" id="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sagittis consequat sagittis. Aliquam interdum efficitur tortor,
              eget porta mi viverra efficitur.
            </h4>
            <p className="card-text author" id="author">
              -Author
            </p>
            <div className="d-flex justify-content-around">
              <a
                className="btn btn-primary btn-lg"
                href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <button
                className="btn btn-success btn-lg"
                type="button"
                id="new-quote"
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetQuote;
