import { useState } from 'react';
import { Link } from 'react-router-dom';

const Szam = () => {
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
            <h1>Számológép</h1>

            <div>
                <input
                    type="number"
                    placeholder="First number"
                    onChange={(e) => {
                        setInput1(Number(e.target.value));
                    }}
                />

                <select onChange={(e) => setOperation(e.target.value)} value={operation}>
                    <option value="">Select operation</option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">×</option>
                    <option value="/">÷</option>
                </select>

                <input
                    type="number"
                    placeholder="Second number"
                    onChange={(e) => {
                        setInput2(Number(e.target.value));
                    }}
                />

                <button onClick={calculate}>Calculate</button>
            </div>

            <p>
                {input1} {operation} {input2} = {result}
            </p>

        </>
    );
};

export default Szam;
