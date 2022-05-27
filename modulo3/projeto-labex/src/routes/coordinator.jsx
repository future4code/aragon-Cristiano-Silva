export const  goToHome = (navigate) =>{
    navigate("/")
}

export const goToAdmin = (navigate) =>{
    navigate("/admin")
}

export const goToTripDetailsPage = (navigate, tripId) => {
    navigate(`/admin/${tripId}/details`)
}