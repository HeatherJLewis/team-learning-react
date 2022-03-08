import React, { useState, useEffect } from 'react';

function App() {
    const [colour, setColour] = useState('');
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.addEventListener('colourChange', (event) => {
            setColour(event.detail);
        });

        return () => {
            document.removeEventListener('colourChange');
        }
    }, []);

    console.log('RENDER');

    return (
        <div style={{
            backgroundColor: colour,
            width: '200px',
            height: '200px',
            borderRadius: '50%'
        }} onClick={() => setCounter(counter + 1)}>
            <h1>{counter}</h1>
        </div>
    )
}

export default App;