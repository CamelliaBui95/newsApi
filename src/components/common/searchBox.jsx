const SearchBox = ({ value, onChange }) => {
    return (
      <form className="form-inline">
        <input
          type="text"
          name="query"
          placeholder="Search..."
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          id="query"
          className="form-control mr-sm-2"
        />
      </form>
    );
}
 
export default SearchBox;