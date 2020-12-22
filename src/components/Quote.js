import React, { Component } from 'react'
import axios from "axios";
import './Quote.css';

export default class Quote extends Component {

    constructor(props) {
        super(props)
        this.generateNewQuote = this.generateNewQuote.bind(this);
    }
    state = {
        
    }

    generateNewQuote() {
        axios.get('https://api.quotable.io/random').then(
            res => {
                this.setState(res.data);
                console.log(this.state);
            }
        ).catch(err => console.log(err))
    }

    componentDidMount() {
        axios.get('https://api.quotable.io/random').then(
            res => {
                this.setState(res.data);
                console.log(this.state);
            }
        ).catch(err => console.log(err))
    }
    render() {
        return (
            <div id="quote-box">
                <p id="text">
                    {this.state.content}
                </p>
                <h3 id="author">
                    - {this.state.author}
                </h3>
                <div className="buttons">
                <button id="new-quote" onClick={this.generateNewQuote}>New Quote</button>
                <a href={`https://twitter.com/intent/tweet?text= ${this.state.content} - ${this.state.author}`} id="tweet-quote">
                    Tweet
                </a>
                </div>
            </div>
        )
    }
}

