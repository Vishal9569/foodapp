import React from 'react';

const Navbar = ({ searchTerm, setSearchTerm }) => {
    return (
        <nav className="nav">
            <div>
                <h3>{new Date().toUTCString().slice(0, 16)}</h3>
            </div>
            <h1>Delicious Food</h1>
            <div>
                <input
                    type="search"
                    name="search"
                    placeholder="Search here"
                    autoComplete="off"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </nav>
    );
}

export default Navbar;
