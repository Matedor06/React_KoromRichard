import { useState } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
    const [input1, setInput1] = useState<number>(0);
    const [input2, setInput2] = useState<number>(0);
    const [operation, setOperation] = useState<string>('');
    const [result, setResult] = useState<number | string>('');

    const calculate = () => {
        let calculatedResult: number;

        switch (operation) {
            case '+':
                calculatedResult = input1 + input2;
                break;
            case '-':
                calculatedResult = input1 - input2;
                break;
            case '*':
                calculatedResult = input1 * input2;
                break;
            case '/':
                calculatedResult = input2 !== 0 ? input1 / input2 : 0;
                if (input2 === 0) {
                    setResult('Cannot divide by zero');
                    return;
                }
                break;
            default:
                calculatedResult = 0;
        }

        setResult(calculatedResult);
    };

    return (
        <>
 
            <p>
                <Link to={'/Szam'}>ide katt</Link>
            </p>
        </>
    );
};

export default App;
