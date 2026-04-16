import {useState } from "react"
import apiClient, { } from "../api/apiClient"
import { toast } from "react-toastify"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import type { User } from "../types/User";
import Navigation from "../navigation/nav";


function Login() {

    const navigate = useNavigate()

  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });


  const submit = () => {
    apiClient.post("/login", user).then(() => {localStorage.setItem("user", JSON.stringify(user)) ,toast.success("susces"), navigate("/")})
  }

  return (
    <>
    <Navigation></Navigation>
        <h1>Név</h1>
        <input type="text" onChange={(e) => setUser({...user, username:e.target.value})} />
        <h2>Leírás</h2>
        <input type="password" onChange={(e) => setUser({...user, password:e.target.value})} />
        <Button onClick={() => submit()}>Bejelentkezés</Button>
        

    </>
  )
}

export default Login
