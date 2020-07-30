import React from 'react';
import Clock from './Clock';

function App() {
    return (
        <div className='App'>
            <Clock
                city='new-york'
                prettyName='New York'
            />
            <Clock
                city='los-angeles'
                prettyName='Los Angeles'
            />
        </div>
    );
}

export default App;
