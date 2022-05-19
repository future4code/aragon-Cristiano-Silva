import {useEffect, useState} from "react"
import axios from "axios"
import { API_CLIENT, BASE_URL } from "../constants/url"


function Profile(){

    const [profile, setProfile] =useState({})

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

    const novoPerfil = (perfilId, curtiu ) => {
        const url = ` ${BASE_URL}/${API_CLIENT}/choose-person`

        const body = { id: perfilId,  choice: curtiu }
        axios
        .post(url,body)
            .then((res) => {
                console.log(res.data)
                getProfile(res.data)
            })
            .catch((err) =>{
                console.log(err.message)
            })
    } 

    const resetProfiles = () => {
        const url = `${BASE_URL}/${API_CLIENT}/clear`;

        axios.put(url)
            .then(() => {
                alert("Perfis resetados com sucesso!");
                getProfile();
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const profileCard = profile && (
        <figure>
            <img src={profile.photo}
                 alt={profile["photo_alt"]}
                 height={"240px"}
            />
            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>
            <button onClick={() => {novoPerfil(profile.id, false) }}>Dislike</button>
            <button onClick={() => {novoPerfil(profile.id, true)}}>Like</button>
        </figure>
    )


    return(
        <>
            <h2>Perfis</h2>
            {profileCard}
            <button onClick={() => resetProfiles()}>Resetar Perfis</button>
        </>
        
    )
}
export default Profile