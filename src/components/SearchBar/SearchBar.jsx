import React, { Component } from "react";
import css from './SearchBar.module.css'

export class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSubmit = (event) => {
  event.preventDefault();
  const searchValue = event.target.elements.search.value;
  this.props.onSubmit(searchValue);
};


  render() {
    return (
      
      <header className="searchВar">
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input className={css.input}
            type="text" name="search"
            autoComplete="off"
            autoFocus={true}
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  
  }
}
