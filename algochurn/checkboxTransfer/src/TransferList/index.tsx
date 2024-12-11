import React, { useState } from 'react';
import { data } from '../TransferList/data';

const LIST_MAPPER = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
};

const DIRECTION = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
};

export const TransferList = () => {
  const [items, setItems] = useState(data);

  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);

  const onChange = (id, checked, direction) => {
    let iteratableItems =
      direction === LIST_MAPPER.LEFT ? leftItems : rightItems;

    let newItems = iteratableItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: checked,
        };
      } else {
        return item;
      }
    });
    if (direction === LIST_MAPPER.LEFT) {
      setLeftItems(newItems);
    } else {
      setRightItems(newItems);
    }
  };

  const onClick = (direction) => {
    if (direction === DIRECTION.RIGHT) {
      moveToRight();
    } else {
      moveToLeft();
    }
  };

  const moveToRight = () => {
    let filtered = leftItems.filter((item) => item.checked);
    let remaining = leftItems.filter((item) => !item.checked);
    let unchecked = filtered.map((item) => {
      return {
        ...item,
        checked: false,
      };
    });

    let final = [...rightItems, ...unchecked];
    setRightItems(final);
    setLeftItems(remaining);
  };

  const moveToLeft = () => {
    let filtered = rightItems.filter((item) => item.checked);
    let remaining = rightItems.filter((item) => !item.checked);
    let unchecked = filtered.map((item) => {
      return {
        ...item,
        checked: false,
      };
    });

    let final = [...leftItems, ...unchecked];
    setLeftItems(final);
    setRightItems(remaining);
  };

  return (
    <div className="w-3/4 h-96 bg-gray-50 mt-10 rounded-md flex space-x-4 p-4">
      <Container
        items={leftItems}
        onChange={(id, checked) => onChange(id, checked, LIST_MAPPER.LEFT)}
      />
      <Controls onClick={onClick} />
      <Container
        items={rightItems}
        onChange={(id, checked) => onChange(id, checked, LIST_MAPPER.RIGHT)}
      />
    </div>
  );
};

const Container = ({ items, onChange }) => {
  return (
    <div className="h-full flex-shrink-0 w-1/3 border border-neutral-200 p-4 rounded-lg bg-white shadow-xl">
      {items.map((item, idx) => (
        <Checkbox
          {...item}
          onChange={(checked) => onChange(item.id, checked)}
        />
      ))}
    </div>
  );
};

const Checkbox = ({ title, checked, onChange }) => {
  return (
    <div className="block mb-6">
      <label>
        <span
          className={`cursor-pointer hover:bg-gray-200 select-none border p-2 rounded-lg w-full block text-center ${
            checked
              ? 'bg-black text-white border-black hover:bg-gray-600'
              : 'text-black'
          }`}
        >
          {title}
        </span>
        <input
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          type="checkbox"
          hidden
        />
      </label>
    </div>
  );
};
const Controls = ({ onClick }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-4 ">
      <RightButton onClick={() => onClick(DIRECTION.RIGHT)} />
      <LeftButton onClick={() => onClick(DIRECTION.LEFT)} />
    </div>
  );
};

const LeftButton = (props) => {
  return (
    <button
      {...props}
      className="flex items-center hover:bg-gray-200 justify-center h-7 w-7 rounded-full border border-neutral-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="black"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </button>
  );
};

const RightButton = (props) => {
  return (
    <button
      {...props}
      className="flex items-center hover:bg-gray-200 justify-center h-7 w-7 rounded-full border border-neutral-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="black"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  );
};
