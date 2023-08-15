import { useState } from 'react';
import PropTypes from 'prop-types';

export const FormSearch = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    let inputValueNormalize = inputValue.trim().toLowerCase();
    if (!inputValueNormalize) return;
    if (!onSubmit(inputValueNormalize)) {
      return;
    }
    form.reset();
    setInputValue('');
  };

  const handleChangeInput = e => {
    return setInputValue(e.target.value);
  };

  return (
    <header className={Searchbar}>
      <form className={SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={SearchFormButton}>
          <span className={SearchFormButton_label}>Search</span>
        </button>
        <input
          className={SearchFormInput}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChangeInput}
          required
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
