import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components';
import { SearchForm, SearchFormInput } from './FormSearch.styled';

export const FormSearch = ({ setSearchParams }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // const form = e.currentTarget;
    let inputValueNormalize = inputValue.trim();
    if (!inputValueNormalize) return;
    setSearchParams({ query: inputValueNormalize });
    // if (!setSearchParams({ query: inputValueNormalize })) {
    //   return;
    // }
    // form.reset();
    // setInputValue('');
  };

  const handleChangeInput = e => {
    return setInputValue(e.target.value);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handleChangeInput}
        required
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

FormSearch.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};
