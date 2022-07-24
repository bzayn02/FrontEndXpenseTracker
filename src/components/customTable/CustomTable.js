import React from 'react';

export const CustomTable = ({ displayExpenses, handleOnDelete }) => {
    const total = displayExpenses?.reduce(
        (expense, currentValue) => expense + currentValue.amount,
        0
    );

    return (
        <div className="mt-3">
            <ul className="bg-blue-200 p-3 font-light rounded-md ">
                {!displayExpenses?.length ? (
                    <span className="text-xl text-center">
                        No expense to show
                    </span>
                ) : (
                    displayExpenses.map((expense, i) => (
                        <li
                            key={i}
                            className="font-bold flex justify-between border-gray-600 border-b-2"
                        >
                            <span className="flex items-center justify-center">
                                {expense.name}
                            </span>
                            <span>
                                ${expense.amount}
                                {'       '}
                                <button
                                    type="submit"
                                    onClick={() => handleOnDelete(expense._id)}
                                    className="p-1 m-1 border-2 border-stone-900 rounded-md hover:text-white hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </span>
                        </li>
                    ))
                )}
                <li className="p-1 font-bold flex justify-between border-gray-600">
                    <span className="flex items-center justify-center">
                        Total
                    </span>
                    <span>
                        $ {total}
                        {'       '}
                    </span>
                </li>
            </ul>
        </div>
    );
};
