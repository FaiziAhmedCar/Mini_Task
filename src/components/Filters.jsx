import React from 'react';

const priceRanges = [
  { label: 'All', value: 'all' },
  { label: 'Under ₹500', value: '0-500' },
  { label: '₹500 - ₹1000', value: '500-1000' },
  { label: '₹1000+', value: '1000+' },
];

const Filters = ({
  category,
  setCategory,
  priceRange,
  setPriceRange,
  inStockOnly,
  setInStockOnly,
  categories,
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      {/* Category Dropdown */}
      <select
        className="border p-2 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      {/* Price Range */}
      <select
        className="border p-2 rounded"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      >
        {priceRanges.map((range) => (
          <option key={range.value} value={range.value}>
            {range.label}
          </option>
        ))}
      </select>

      {/* In Stock Toggle */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
        In Stock Only
      </label>
    </div>
  );
};

export default Filters;
