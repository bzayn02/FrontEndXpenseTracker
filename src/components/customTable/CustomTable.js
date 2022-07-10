import React from 'react';

export const CustomTable = () => {
    return (
        <div className="mt-3">
            <ul className="bg-sky-300 p-2 font-light">
                <li className=" flex justify-between border-gray-600 border-b-2">
                    <span>Course</span>
                    <span>$1999</span>
                </li>
                <li className=" flex justify-between border-gray-600 border-b-2">
                    <span>Course</span>
                    <span>$1999</span>
                </li>
                <li className=" flex justify-between border-gray-600 border-b-2">
                    <span>Course</span>
                    <span>$1999</span>
                </li>
                <li className=" flex justify-between border-gray-600 border-b-2">
                    <span>Course</span>
                    <span>$1999</span>
                </li>
                <li className="font-bold flex justify-between border-gray-600 border-b-2">
                    <span>Total</span>
                    <span>$Sum</span>
                </li>
            </ul>
        </div>
    );
};
