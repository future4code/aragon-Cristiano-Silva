import { goToAdmin } from "../routes/coordinator"
import { BASE_URL, API_CLIENT } from "../constants/urls"
import axios from "axios"



export const requestLogin = (email, password, navigate) => {
    const body ={
        email: email,
        password: password
    }

    axios
    .post(`${BASE_URL}/${API_CLIENT}/login`, body)
    .then((res) => {
        localStorage.setItem("token",res.data.token)
        alert("Login realizado com sucesso!")
        goToAdmin(navigate)
    })
    .catch((err) => {
        alert("Um erro ocorreu! Tente Novamente")
        console.log(err.message)
    })
}


export const deleteTrip = (tripId, getTripsData) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    axios
    .delete(`${BASE_URL}/${API_CLIENT}/trips/${tripId}`,header)
    .then(() => {
        alert("Viagem removida com sucesso!")
        getTripsData()
    })
    .catch((err) => {
        alert(err.message)
    })
}
