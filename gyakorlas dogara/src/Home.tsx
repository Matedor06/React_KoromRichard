import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Link to={'/Szam'}>Számológép</Link>
            <br />
            <Link to={'/Aru'}>Aru</Link>
        </>
    );
}

export default Home;
