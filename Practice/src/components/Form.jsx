import { useState } from 'react';
import Strength from './Strength';

function Form() {
    const [text, setText] = useState('');
    const [hide, setHide] = useState(false);
    let mask = '';

    for (let i = 0; i < text.length; i++) {
        mask += '*';
    }

    return (
        <>
            <input type={hide ? 'password' : 'text'} name="" id="" onChange={(e) => setText(e.target.value)} value={text} />
            <button onClick={() => setHide(prevState => !prevState)}>{hide ? 'Show' : 'Hide'}</button>
            <button onClick={() => setText('')}>Clear All</button>
            <Strength text={text} />
        </>
    )
}

export default Form