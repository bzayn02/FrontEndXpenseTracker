import React from 'react';
import TopNav from './Nav';

const MainLayout = ({ children }) => {
    return (
        <div>
            {/* Header */}
            <TopNav className="bg-stone-400" />

            {/* Body */}
            <div className="m-auto p-12 min-h-[85vh]  bg-zinc-100">
                <div className="max-w-xl m-auto">
                    <div>{children}</div>
                </div>
            </div>

            {/* Footer */}
            <footer className=" text-gray-300 text-center bg-slate-600 w-full p-4 bottom-0">
                Created by Bijay N.
            </footer>
        </div>
    );
};

export default MainLayout;
