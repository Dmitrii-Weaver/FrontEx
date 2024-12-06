import React, { useEffect, useState } from 'react';
import { items as defaultItems } from './items';
import './style.css';

export default function MultipleFilters() {
  const [items, setItems] = useState(defaultItems);
  let filters = ['Bags', 'Watches', 'Sports', 'Sunglasses'];
  const [selectedFilters, setSelectedFilters] = useState<any>([]);
  const [itemsToShow, setItemsToShow] = useState(defaultItems);

  const handleFilterSelect = (f) => {
    if (selectedFilters.includes(f)) {
      setSelectedFilters(selectedFilters.filter((el: any) => el !== f));
      console.log(selectedFilters);
    } else if (!selectedFilters.includes(f)) {
      setSelectedFilters([...selectedFilters, f]);
      console.log(selectedFilters);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Algochurn Filters</h2>
      <div className="buttons-container">
        {filters.map((el, idx) => (
          <button
            onClick={() => handleFilterSelect(el)}
            className={`button`}
            key={`filters-${idx}`}
          >
            {el}
          </button>
        ))}
      </div>
      <div className="items-container">
        {selectedFilters.length == 0
          ? items.map((item, idx) => (
              <div key={`items-${idx}`} className="item">
                <p>{item.name}</p>
                <p className="category">{item.category}</p>
              </div>
            ))
          : items
              .filter((item: any) => selectedFilters.includes(item.category))
              .map((item, idx) => (
                <div key={`items-${idx}`} className="item">
                  <p>{item.name}</p>
                  <p className="category">{item.category}</p>
                </div>
              ))}
        {}
      </div>
    </div>
  );
}
