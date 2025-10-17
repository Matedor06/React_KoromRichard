import { useState } from "react"
const NewPizza = () => {
    const [name, setName] = useState('')
    const [leiras, setLeiras] = useState('')
    const [ar, setAr] = useState(0)
    const [imageUrl, setImageUrl] = useState('')    

    return <>
    <h1>Új Pizza</h1>
    <table>
        <tr>
            <td>Név:</td>
            <td><input type="text" onChange={(e) => setName(e.target.value)} /></td>
        </tr>
        <tr>
            <td>Leírás:</td>
            <td><input type="text" onChange={(e) => setLeiras(e.target.value)} /></td>
        </tr>
        <tr>
            <td>Ár:</td>
            <td><input type="number" onChange={(e) => setAr(Number(e.target.value))} /></td>
        </tr>
        <tr>
            <td>Kép URL:</td>
            <td><input type="text" onChange={(e) => setImageUrl(e.target.value)} /></td>
        </tr>
    </table>
    </>

}

export default NewPizza