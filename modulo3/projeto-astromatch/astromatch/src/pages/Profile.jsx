import {useEffect, useState} from "react"
import axios from "axios"
import { API_CLIENT, BASE_URL } from "../constants/url"


function Profile(){

    const [profile, setProfile] =useState(undefined)

    useEffect(() => {
        getProfile()
    },[])

    const getProfile =() =>{
        const url = ` ${BASE_URL}/${API_CLIENT}/person`;

        axios
        .get(url)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err.message)
        })

    }

    const profileCard = profile && (
        <figure>
            <img src={profile.photo}
                 alt={profile["photo_alt"]}
                 height={"240px"}
            />
            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>
            <button onClick={() =>getProfile()}>Próximo perfil</button>
        </figure>
    )


    return(
        <>
            <h2>Perfis</h2>
            {profileCard}
        </>
        
    )
}
export default Profile