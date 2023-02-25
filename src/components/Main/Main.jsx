import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Form from './Form'; 
import Home from './Home'; 
import ListNews from './ListNews'; 

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addArticle = (newArticle) => {
    this.setState({ news: [...this.state.news, newArticle] });
  }

  handleSubmit(newArticle) {
    const { news } = this.state;

    this.setState({
      news: [...news, newArticle]
    });

    this.addArticle(newArticle);
  }

  render() {
    return (
      <main className={"main"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form onSubmit={this.handleSubmit} addArticle={this.addArticle} />} />
          <Route path="/list" element={<ListNews news={this.state.news} />} />
        </Routes>
      </main>
    );
  }
}

export default Main;

