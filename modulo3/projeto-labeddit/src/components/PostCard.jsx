import { format } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalStateContext from '../global/GlobalStateContext'
import { goToPost } from "../routes/coordinator"
import { requestChangePostVote, requestCreatePostVote, requestDeletePostVote } from '../services/requests'
import styled from 'styled-components'

const Button = styled.button`
    width: 10vw;
    text-align:center;
`



const PostCard = (props) => {
    const navigate = useNavigate()

    const { setters, getters } = useContext(GlobalStateContext)

    const { setPost } = setters

    const [ isDownVoted, setIsDownVoted]= useState(false)

    const [isUpVoted, setIsUpVoted] = useState(false)
    
    const { getPosts } = getters

    const {id, userId, title, body, createdAt, voteSum, commentCount, userVote} =props.post

    const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy")

    useEffect(() =>{
        if(userVote){
            userVote === 1 ? setIsUpVoted(true) : setIsDownVoted(true)
        }
    },[userVote])

    const goToComments = () => {
        setPost(props.post)


        goToPost(navigate, id)
    }

    const chooseVote = (typeVote) =>{
        if (typeVote === "up"){
            if(isDownVoted) {
                requestChangePostVote(id,1, getPosts)

                setIsUpVoted(true)
                setIsDownVoted(false)
            }else {
                requestCreatePostVote(id, 1, getPosts)

                setIsUpVoted(true)
            }
        }else {
            if (isUpVoted) {
                requestChangePostVote(id, -1, getPosts)

                setIsDownVoted(true)
                setIsUpVoted(false)
            }else {
                requestCreatePostVote(id, -1, getPosts)

                setIsDownVoted(true)
            }
        }
    }

    const removeVote = (typeVote) =>{
        requestDeletePostVote(id, getPosts)

        typeVote === "up" ? setIsUpVoted(false) : setIsDownVoted(false)
    }

    const showVoteButtons = props.isFeed && (
        <>
            {userVote && isDownVoted ?
            <Button onClick={() => removeVote("down")}> Remover voto "Não Gostei"</Button>    
            : <Button onClick={() => chooseVote ("down")}>
                {isUpVoted ? `Mudar voto para "Não Gostei"` : `Votar em "Não Gostei"`}
            </Button>    
        }
        <br />
            {userVote && isUpVoted ?
                <Button onClick={() => removeVote("up")}> Remover voto " Gostei"</Button>    
                : <Button onClick={() => chooseVote ("up")}>
                    {isDownVoted ? `Mudar voto para " Gostei"` : `Votar em " Gostei"`}
                </Button>    
        }   
        
        </>
    )

    return (
        <article>
            <h3>{title}</h3>
            <span><b>Autor: </b>{userId}</span>
            <p>Criado em {date}</p>

            <img src={"https://picsum.photos/200/300?random=" + id} alt="imagem aleatória do post" />
            <p><b>Descrição: </b>{body}</p>

            <p>Votos: {voteSum ? voteSum: 0}</p>
                {showVoteButtons}

            <p>Comentários: {commentCount ? commentCount: 0}</p>
            
            {props.isFeed && <Button onClick={goToComments}>Ver comentários</Button>}
            <hr />
        </article>
    )

}

export default PostCard 