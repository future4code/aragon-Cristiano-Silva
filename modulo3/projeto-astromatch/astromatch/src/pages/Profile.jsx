import {useEffect, useState} from "react"
import axios from "axios"
import { API_CLIENT, BASE_URL } from "../constants/url"
import styled from "styled-components"
import {BsHandThumbsUp, BsHandThumbsDown} from "react-icons/bs"

const ButtonVermelho = styled.button `
    background-color: red;
    color: white;
    border-radius: 50px;
    padding: 10px;
    width: 50px;
    height: 50px;

    &:hover{
        cursor: pointer;
        transition: .3s ease-in-out;
        background-color: #8d2121;
        color: white;
    }

`

const ButtonVerde = styled.button `
    background-color: green;
    color: white;
    border-radius: 50px;
    padding: 10px;
    width: 50px;
    margin-left: 15px;
    height: 50px;

    &:hover{
        cursor: pointer;
        transition: .3s ease-in-out;
        background-color: #2b9e2b;
        color: white;
    }

`



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
                if(body.choice && res.data.isMatch){
                    alert("Deu Match")
                }
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

    const profileCard = profile ? (
        <figure>
            <img src={profile.photo}
                 alt={profile["photo_alt"]}
                 height={"240px"}
                 width={"250px"}
            />
            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>
            <ButtonVermelho onClick={() => {novoPerfil(profile.id, false) }}><BsHandThumbsDown/></ButtonVermelho>
            <ButtonVerde onClick={() => {novoPerfil(profile.id, true)}}> <BsHandThumbsUp/> </ButtonVerde>
        </figure>
    ) : (
        <>
            <h4>Acabaram os matches! Clique em "Resetar Perfis" para reiniciar</h4>
            <button onClick={() => resetProfiles()}>Resetar Perfis</button>
        </>

    )


    return(
        <>
            <h2>Perfis</h2>
            {profileCard}
            
        </>
        
    )
}
export default Profile