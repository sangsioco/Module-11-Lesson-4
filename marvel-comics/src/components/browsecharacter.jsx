import React from 'react';
import { Link } from 'react-router-dom';

const BrowseCharacters = () => {
    return (
        <div>
            <h2>Browse Characters</h2>
            <Link to="/characters/1">Character 1</Link>
            <br />
            <Link to="/characters/2">Character 2</Link>
        </div>
    );
};

export default BrowseCharacters;
