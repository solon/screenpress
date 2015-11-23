import Book from './Book';
import React, { Component, PropTypes } from 'react';

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className="books">
        { this.props.books.map((book) => <Book key={book.id} book={book}/>) }
      </div>
    );
  }
};
