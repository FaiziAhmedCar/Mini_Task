import React from 'react';

const SortControls = ({ sortKey, setSortKey, sortAsc, setSortAsc }) => {
  return (
    <div className="flex items-center gap-4">
      <select
        className="border p-2 rounded"
        value={sortKey}
        onChange={(e) => setSortKey(e.target.value)}
      >
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>

      <button
        className="border px-4 py-2 bg-blue-100 rounded hover:bg-blue-200"
        onClick={() => setSortAsc(!sortAsc)}
      >
        {sortAsc ? 'ASC' : 'DESC'}
      </button>
    </div>
  );
};

export default SortControls;
