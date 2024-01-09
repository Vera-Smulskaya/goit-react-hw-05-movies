import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query');
  console.log('queryValue', queryValue);

  const onFormSubmit = event => {
    event.preventDefault();
    const valueSearch = event.currentTarget.elements.searchKey.value;
    setSearchParams({ query: valueSearch });
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          <input
            type="text"
            name="searchKey"
            required
            placeholder="what movie are you looking for?"
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
