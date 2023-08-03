import React, { useEffect } from 'react';

const Strength = ({ text }) => {

    const [condition, setCondition] = React.useState('');
    const [status, setStats] = React.useState({
        status: '',
        color: 'white'
    });

    React.useEffect(() => {
        const hasUpperCase = /[A-Z]/.test(text);
        const hasLowerCase = /[a-z]/.test(text);
        const hasSymbols = /[$#_]/.test(text);
        const hasNumber = /[0-9]/.test(text);

        let message = ''
        if (!hasLowerCase || !hasUpperCase || !hasSymbols || text.length < 8 || !hasNumber) {
            message = (
                <>
                    <span>password must contain:</span>
                    {!hasLowerCase && <li>lower case letter a-z</li>}
                    {!hasUpperCase && <li>Upper letter A-Z</li>}
                    {!hasSymbols && <li>special character $ # _</li>}
                    {text.length < 8 && <li>must have atlease 8 characters</li>}
                    {!hasNumber && <li>must numbers</li>}
                </>
            )
        }
        setCondition(message)

    }, [text]);

    useEffect(() => {
        let currStatus = {}
        if (text.length > 0 && text.length < 3) {
            currStatus = {
                status: 'weak',
                color: 'Red'
            }
        } else if (text.length >= 3 && text.length <= 4) {
            currStatus = {
                status: 'Moderate',
                color: 'Orange'
            }
        } else if (text.length > 4) {
            currStatus = {
                status: 'Strong',
                color: 'Green'
            }
        }
        setStats(currStatus)
    }, [text]);


    return (
        <>
            <p style={{ color: status.color }}>{status.status}</p>
            <div>{condition}</div>
        </>
    )
}

export default Strength