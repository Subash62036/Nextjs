import React from 'react';

export interface DropdownProps {
  label?: string,
  options: dropdownInterface[],
  dropdownid: string
}

interface dropdownInterface {
  key: string,
  value: string,
}

export const Dropdown = ({ label, options, dropdownid }: DropdownProps):JSX.Element => (
  <div className="mt-4">
    <label htmlFor={dropdownid} className="block text-gray-700">
      {label}
    </label>
    <select id={dropdownid} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
      {(options).map((key) => (
        <option key={key.value} value={key.value}>
          {key.value}
        </option>
      ))}
    </select>
  </div>
);
