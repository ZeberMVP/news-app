import React, { Component } from "react";
import Card from './Card';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';

class ListNews extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: [],
      newHeadline: ""
    }
  }

  componentDidMount() {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sports&api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const firstFiveArticles = data.response.docs.slice(0, 5).map(article => ({
          headline: article.headline.main,
          abstract: article.abstract,
          author: article.byline.original,
          url: article.web_url
        }));
        this.setState({ news: firstFiveArticles });
      })
      .catch(error => console.error(error));
  }

  deleteArticle = (i) => {
    const remainingArticles = this.state.articles.filter((article, j) => i !== j);
    this.setState({ articles: remainingArticles })
  }

  printCards = () => {
    return (
      <section>
        {this.state.news.map(article => (
          <Card data={article} key={uuidv4()} />
        ))}
      </section>
    );
  }

  addArticle = () => {
    const promptHeadline = prompt('Headline of the article');
    const promptAbstract = prompt('Abstract of the article');
    const promptAuthor = prompt('Author/s of the article');
    const promptUrl = prompt('Url of the article');

    const newArticle = {
      headline: promptHeadline,
      abstract: promptAbstract,
      author: promptAuthor,
      url: promptUrl
    };

    this.setState({ news: [...this.state.news, newArticle] });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const headline = event.target.headline.value;
    const abstract = event.target.abstract.value;
    const author = event.target.author.value;
    const url = event.target.url.value;

    const newArticle = {
      headline,
      abstract,
      author,
      url
    };

    // Store new article
    this.setState({ news: [...this.state.news, newArticle] });
  }


  handleChange = (event) => this.setState({ newHeadline: event.target.value })

  render() {
    return <section>

      <article className="form-add-article">
        <h2>Add articles</h2>
        <form onSubmit={this.handleSubmit}>
            <TextField
              required
              id="headline"
              label="Required"
              defaultValue="Headline"
              onChange={this.handleChange}
            />
            <TextField
              required
              id="abstract"
              label="Required"
              defaultValue="Abstract"
            />
            <TextField
              required
              id="author"
              label="Required"
              defaultValue="Author"
            />
            <TextField
              required
              id="url"
              label="Required"
              defaultValue="Url"
            />
          <input type="submit" value="Add" />
        </form>
        {this.state.newHeadline ? <p>New article: {this.state.newHeadline}</p> : ""}
      </article>

      <article className="button-set">
        <h2>Options</h2>
        <button onClick={this.addEvent}>Add Event</button>
      </article>

      <article className="article-container">
        <h2>Our articles</h2>
        {this.printCards()}
      </article>

    </section>;
  }
}

export default ListNews; 
