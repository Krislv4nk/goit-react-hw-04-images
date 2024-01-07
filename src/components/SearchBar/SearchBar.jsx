import React, { useState } from "react";
import css from './SearchBar.module.css';


export const SearchBar = ( { onSubmit }) => {
const [searchValue, setValue] = useState('');
  
  const handleChange = (event) => {
    setValue( event.target.value );
  };

  const handleSubmit = (event) => {
  event.preventDefault();
  onSubmit(searchValue);
    setValue('');
};



    return (
      
      <header className="searchВar">
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input className={css.input}
            type="text" name="search"
            autoComplete="off"
            autoFocus={true}
            placeholder="Search images and photos"
            value={searchValue}
            onChange={handleChange}
          />
        </form>
      </header>
    );
  
  }
