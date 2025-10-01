import { useEffect, useState } from 'react';

function Aru() {

    const [szam, setSzam] = useState(1);
    const [szazalek, setSzazalek] = useState(1);
    const [result, setResult] = useState<number>();

    useEffect(() => {
        setResult(szam * (100 - szazalek) / 100);
    }, [szam, szazalek]
    )
    return (
        <div>
            <input type="number" onChange={(e) => setSzam(Number(e.target.value))} />
            <input type="number" onChange={(e) => setSzazalek(Number(e.target.value))} />

            <p>{result}</p>

        </div>
    );
}

export default Aru;
