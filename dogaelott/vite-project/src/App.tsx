import { useEffect, useState } from "react";
import "./App.css";
import apiClient, { BACKEND_URL } from "./api/apiClient";
import type { Pizza } from "./types/Pizza";

function App() {
const [pizzak, setPizzak] = useState<Pizza[]>([]);

useEffect(() => {
  apiClient.get('/pizzak').then((response) => setPizzak(response.data)).catch((error) => alert(error))
},[])

return (
    <>
      {pizzak.map((p) =>(
        <p>
        {p.nev}
        </p>
      ))}
    </>
);
}

export default App;