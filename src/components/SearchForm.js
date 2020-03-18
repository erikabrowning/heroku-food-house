import "./SearchForm.css";
import React, { useState } from "react";
const SearchForm = ({ setSearch, initialPlaceholder }) => {
  const [query, setQuery] = useState(initialPlaceholder);
  // this method triggers when we change the input on line 18
  const onChange = event => setQuery(event.target.value);
  // this method triggers when we submit the form.
  const onSubmit = event => {
    event.preventDefault();
    setSearch(query);
  };
  return (
    <form className="container search-form" onSubmit={onSubmit}>
      <input type="text" value={query} onChange={onChange} />
    </form>
  );
};
export default SearchForm;
