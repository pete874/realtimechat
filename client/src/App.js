import React from 'react';

import { Routes, Route, Router } from 'react-router-dom';

import Join from './components/Join.js';
import Chat from './components/Chat.js';

function App() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Join />} />
            <Route path='/chat' element={<Chat />} />
        </Routes>
       </>

    )
}

export default App;