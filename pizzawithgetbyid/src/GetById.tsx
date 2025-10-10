import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Pizza } from "./types/Pizza"
import apiClient from "./api/apiClient";
import { BACKEND_URL } from "./api/apiClient";

function GetById() {
    const { id } = useParams<{ id: string }>();
    const [pizza, setPizza] = useState<Pizza | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            setError(null);
            apiClient
                .get(`/pizzak/${id}`)
                .then((response) => {
                    setPizza(response.data);
                })                .catch(() => {
                    setError("Pizza not found");
                });
        }
    }, [id]);


    if (!pizza) {
        return (
            <div className="pizza-detail-error">
                <h2>"Pizza not found"</h2>
            </div>
        );
    }

    return (
        <div>
            <h1>{pizza.nev}</h1>
            <img src={BACKEND_URL + "/kepek/" + pizza.imageUrl} width={300} />
            <p>{pizza.leiras}</p>
            <p className="price">{pizza.ar} Ft</p>
        </div>
    );
}

export default GetById;