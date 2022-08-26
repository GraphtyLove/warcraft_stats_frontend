import React from 'react';

const SelectionInput = ({ name, options, value, setter }) => {
    return (
        <label className="flex flex-col items-center mx-5">
            <span className=" w-40  block text-sm font-medium text-slate-700">{name}</span>
            <select
                name={name}
                value={value}
                onChange={(e) => setter(e.target.value)}
                id={name}
                className="
                  mt-1 block w-40 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                "
            >
                {options.map( option => <option key={option} value={option}>{option}</option> )}
            </select>
        </label>
    );
};

export default SelectionInput;