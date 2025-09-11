const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchVal = e.target.elements.search.value;
    if (!searchVal) return console.log(searchVal);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className="form-input search-input"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
