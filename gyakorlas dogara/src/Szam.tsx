import { useEffect, useState } from 'react';

function Szam() {
    const [szam1, setSzam1] = useState<number>(0);
    const [szam2, setSzam2] = useState<number>(0);
    const [eredmeny, setEredmeny] = useState<number>();
    const [muvelet, setMuvelet] = useState<string>('+');

    useEffect(() => {
        switch (muvelet) {
            case '+':
                setEredmeny(szam1 + szam2);
                break;
            case '-':
                setEredmeny(szam1 - szam2);
                break;
            case '*':
                setEredmeny(szam1 * szam2);
                break;
            case '/':
                setEredmeny(szam1 / szam2);
                break;
        }
        
    }, [szam1, szam2, muvelet]);

    return (
        <div>
            <input type="number" onChange={(e) => setSzam1(Number(e.target.value))} />
            <select onChange={(e) => setMuvelet(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="number" onChange={(e) => setSzam2(Number(e.target.value))} />
            <p>
                {szam1} {muvelet} {szam2} = {eredmeny}
            </p>
        </div>
    );
}

export default Szam;
