import React, { Component } from "react";
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import { MagnifyingGlass } from 'react-loader-spinner';

class ListNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      newHeadline: "",
      isLoading: true
    };
  }

  addArticle = (article) => {
    this.setState((prevState) => ({ news: [...prevState.news, article] }));
  };

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
        const allArticles = [...firstFiveArticles, ...this.props.news];
        this.setState({ news: allArticles, isLoading: false });
      })
      .catch(error => console.error(error));
  }

  removeArticle = (i) => {
    const remainingArticles = this.state.news.filter((article, j) => i !== j);
    this.setState({ news: remainingArticles })
  }

  printCards = () => {
    return (
      <section>
        {this.state.news.map((article, i) => (
          <Card
            data={article}
            key={uuidv4()}
            remove={() => this.removeArticle(i)}
          />
        ))}
      </section>
    );
  }

  render() {
    return (
      <article className="article-container">
        <h2>Our articles</h2>
        {this.state.isLoading ? (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor='#c0efff'
            color='#e15b64'
          />
        ) : (
          this.printCards()
        )}
      </article>
    );
  }
}

export default ListNews;
