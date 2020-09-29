import React from "react";

function Search({ count, setCount }) {
  const handleRerender = (event) => {
    setCount(event.target.value);
  };

  return (
    <>
      <form>
        <input type="search" value={count} onChange={handleRerender} />
      </form>
      <div>{count.length}</div>
    </>
  );
}

export default Search;
