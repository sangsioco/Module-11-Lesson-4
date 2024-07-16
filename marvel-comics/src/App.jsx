import React from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import Home from './components/home';
import BrowseCharacters from './components/browsecharacter';
import CharacterDetails from './components/characterdetail';
import Comics from './components/comics';
import NotFound from './components/notfound';

const App = () => {
    return (
        <div>
            <nav>
                <NavLink to="/" end>Home</NavLink> | 
                <NavLink to="/characters">Browse Characters</NavLink> | 
                <NavLink to="/comics">Comics</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<BrowseCharacters />} />
                <Route path="/characters/:id" element={<CharacterDetails />} />
                <Route path="/comics" element={<Comics />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
