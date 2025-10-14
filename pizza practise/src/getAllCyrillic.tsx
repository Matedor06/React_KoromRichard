import { useEffect, useState } from "react";
import "./getAll.css";
import type { Pizza } from "./types/Pizza";
import apiClient, { BACKEND_URL } from "./api/apiClient";

// Function to convert Latin text to Cyrillic
function toCyrillic(text: string): string {
  const cyrillicMap: Record<string, string> = {
    // Lowercase letters
    a: "а",
    b: "б",
    c: "ц",
    d: "д",
    e: "е",
    f: "ф",
    g: "г",
    h: "х",
    i: "и",
    j: "ј",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    p: "п",
    q: "ку",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    v: "в",
    w: "в",
    x: "кс",
    y: "ы",
    z: "з",

    // Uppercase letters
    A: "А",
    B: "Б",
    C: "Ц",
    D: "Д",
    E: "Е",
    F: "Ф",
    G: "Г",
    H: "Х",
    I: "И",
    J: "Ј",
    K: "К",
    L: "Л",
    M: "М",
    N: "Н",
    O: "О",
    P: "П",
    Q: "КУ",
    R: "Р",
    S: "С",
    T: "Т",
    U: "У",
    V: "В",
    W: "В",
    X: "КС",
    Y: "Ы",
    Z: "З",

    // Hungarian specific characters
    á: "а́",
    é: "е́",
    í: "и́",
    ó: "о́",
    ö: "ё",
    ő: "ё",
    ú: "у́",
    ü: "ю",
    ű: "ю",
    Á: "А́",
    É: "Е́",
    Í: "И́",
    Ó: "О́",
    Ö: "Ё",
    Ő: "Ё",
    Ú: "У́",
    Ü: "Ю",
    Ű: "Ю",
  };

  return text
    .split("")
    .map((char) => cyrillicMap[char] || char)
    .join("");
}

function getCyrillic() {
  const [pizzak, setPizzak] = useState<Pizza[]>([]);
  useEffect(() => {
    apiClient
      .get<Pizza[]>("/pizzak")
      .then((response) => {
        setPizzak(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  return (
    <>
      <h1>{toCyrillic("Pizzák")}</h1>
      <div>
        {pizzak.map((pizza) => (
          <div key={pizza.id}>
            <h2>{toCyrillic(pizza.nev)}</h2>
            <img
              src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`}
              alt={toCyrillic(pizza.nev)}
              width={200}
            />
            <p>{toCyrillic(pizza.leiras)}</p>
            <p
              style={{
                color: "red",
                fontWeight: "bolder",
                textDecoration: "underline",
              }}
            >
              {toCyrillic("Ár")}: {pizza.ar} {toCyrillic("Ft")}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default getCyrillic;
