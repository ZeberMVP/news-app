import React, { Component } from "react";
import TextField from '@mui/material/TextField';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headline: "",
      abstract: "",
      author: "",
      url: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  
    const { headline, abstract, author, url } = this.state;
  
    const newArticle = {
      headline,
      abstract,
      author,
      url,
    };
  
    this.props.onSubmit(newArticle);
  
    this.setState({
      headline: "",
      abstract: "",
      author: "",
      url: "",
    });
  
    this.props.addArticle(newArticle);
  };
  

  handleChange = (event) => {
    const { id, value } = event.target;

    this.setState({
      [id]: value,
    });
  };

  render() {
    const { headline, abstract, author, url } = this.state;

    return (
      <article className="form-add-article">
        <h2>Add articles</h2>
        <form onSubmit={this.handleSubmit}>
          <TextField
            required
            id="headline"
            label="Required"
            value={headline}
            onChange={this.handleChange}
          />
          <TextField
            required
            id="abstract"
            label="Required"
            value={abstract}
            onChange={this.handleChange}
          />
          <TextField
            required
            id="author"
            label="Required"
            value={author}
            onChange={this.handleChange}
          />
          <TextField
            required
            id="url"
            label="Required"
            value={url}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add" />
        </form>
      </article>
    );
  }
}

export default Form;
