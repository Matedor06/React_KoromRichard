
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'


const Home = () => {

  useEffect(() =>{
  toast.info("HElló")
  toast.warning("Ajaj")
  toast.error("hiba")
  toast.success("sikeres")
},)

  return (
    <>
      <h1>Pizza Menedzsment Rendszer</h1>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>
            <Link to="/pizzas" style={{ textDecoration: 'none', fontSize: '18px' }}>
              📋 Összes Pizza Megtekintése
            </Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/add-pizza" style={{ textDecoration: 'none', fontSize: '18px' }}>
              ➕ Új Pizza Hozzáadása
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
