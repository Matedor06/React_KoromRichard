import { useEffect, useState } from "react"
import type { Car } from "../Types/Car"
import apiClient, { baseURL } from "../Api/apiClient"
import { Button,  Table } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
function Cart() {

const [cars, setCars] = useState<Array<Car>>([])

const [kosar, setKosar] = useState<Array<number>>(JSON.parse(localStorage.getItem("kosar") ?? "[]"));
 
useEffect(() => {
    apiClient.get("/autok").then((res) => setCars(res.data))
},[])


useEffect(()=> {
    localStorage.setItem("kosar" , JSON.stringify(kosar))
},[kosar]);

const removeItem = (index:number) => {
  setKosar(kosar.filter((v,i)=> i !== index))
}

  return (
    <>
       <h1>Kosár Tartalma:</h1>
       {kosar.length>0 ? (
        <>
          <Table>
            <thead>
              <th>Márka</th>
              <th>Modell</th>
              <th>Ár</th>
              <th>Törlés</th>
            </thead>
            <tbody>
              {kosar.map((id, index) => {
                const car = cars.find((c) => c.id == id)
                return(
                  <tr>
                    <td>{car?.marka}</td>
                    <td>{car?.modell}</td>
                    <td>{car?.ar}</td>
                    <td><Button onClick={() => removeItem(index)}>Törlés</Button></td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <h2>Összeg: {kosar.reduce((acc,id) => {
            const car = cars.find((c) => c.id == id)
            return acc + (car?.ar ?? 0)

          },0)}</h2>
          <Button onClick={()=> setKosar([])} >Összes Törlése</Button>
        </>



       ):(<></>)}
    </>
  )
}

export default Cart
