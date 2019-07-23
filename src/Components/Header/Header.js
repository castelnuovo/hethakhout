import React from 'react';

const Header = props => {
    return (
        <div>
            <h1>Header</h1>
            <h2>Name: {props.name}</h2>
        </div>
    );
};

export default Header;
