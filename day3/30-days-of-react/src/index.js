import React from 'react';
import { createRoot } from 'react-dom/client';

// JSX element , header
const header = (
    <header>
        <h1>Welcome to 30 Days of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Tountoun Abel AYANOU</p>
        <small>Oct 12, 2022</small>
    </header>
)

// JSX element, main
const main = (
    <main>
        <p>Prerequisites to get started react.js:</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </main>
);

// JSX element, footer
const footer = (
    <footer>
        <p>Copyright 2022</p>
    </footer>
)

// JSX element, app, a container or a parent
const app = (
    <div>
        {header}
        {main}
        {footer}
    </div>
)
const rootElement = createRoot(document.getElementById('root'));

rootElement.render(app);