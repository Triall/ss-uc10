import React, {useMemo, useState} from "react";
import './App.css';
import validateString from "./validation";

function App() {
    const [string, setString] = useState('');
    const [maxLength, setMaxLength] = useState(1);

    const isValid = useMemo(() => validateString(string, maxLength), [string, maxLength]);

    return (
        <div className="App">
            <div>
                <label>
                    Enter the string<br/>
                    <input value={string} onChange={e => setString(e.target.value)}/>
                </label>
            </div>

            <div>
                <label>
                    Enter max string length<br/>
                    <input type="number" value={maxLength} onChange={e => setMaxLength(e.target.value || Infinity)}/>
                </label>
            </div>

            <p className={isValid ? 'valid' : 'invalid'}>String is {isValid ? 'valid' : 'invalid'}</p>
        </div>
    );
}

export default App;
