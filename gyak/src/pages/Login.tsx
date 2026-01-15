import { useState } from 'react'
import type { User } from '../types/User'
import { Button } from 'react-bootstrap';
import apiClient from '../api/apiClient';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigator = useNavigate()
  const [user, setUser] = useState<User>({username: "",password:""})

  const submit = () => {
    apiClient
      .post("/login", user)
      .then(() => {
        localStorage.setItem("credentials", JSON.stringify(user));
        toast.success("Sikeres bejelentkezés");
        navigator("/");
      })
      .catch(() => toast.error("Sikertelen bejelentkezés!"));
  };

return (
    <>
      <input
        type="text"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <br />
      <input
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <Button variant="primary" onClick={submit}>
        Bejelentkezés
      </Button>
    </>
  );
}

export default Login
