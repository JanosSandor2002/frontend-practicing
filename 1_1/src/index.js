import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <div className='container' id='id'>
            <h1>Hello world</h1>
            <p>let us start react learning from now on</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
