import { format } from 'date-fns'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalStateContext from '../global/GlobalStateContext'
import { goToPost } from "../routes/coordinator"


const PostCard = (props) => {
    const navigate = useNavigate()

    const { setters } = useContext(GlobalStateContext)

    const { setPost } = setters

    const {id, userId, title, body, createdAt, voteSum, commentCount} =props.post

    const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy")

    const goToComments = () => {
        setPost(props.post)


        goToPost(navigate, id)
    }

    return (
        <article>
            <h3>{title}</h3>
            <span><b>Autor: </b>{userId}</span>
            <p>Criado em {date}</p>

            <img src={"https://picsum.photos/200/300?random=" + id} alt="imagem aleatória do post" />
            <p><b>Descrição: </b>{body}</p>

            <p>Votos: {voteSum ? voteSum: 0}</p>
            <button>Votar em "não gostei</button>
            <br />
            <button>Votar em Gostei"</button>

            <p>Comentários: {commentCount ? commentCount: 0}</p>
            
            {props.isFeed && <button onClick={goToComments}>Ver comentários</button>}
            <hr />
        </article>
    )

}

export default PostCard 