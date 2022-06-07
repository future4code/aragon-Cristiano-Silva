import format from "react"


const PostCard = (props) => {
    const {id, userId, title, body, createdAt, voteSum, commentCount} =props.Post

    const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy")

    return (
        <article>
            <h3>{title}</h3>
            <span><b>Autor: </b>{userId}</span>
            <p>Criado em {date}</p>

            <img src={"https://picsum.photos/200/300?random=" + id} alt="imagem aleatória do post" />
            <p><b>Descrição: </b>{body}</p>

            <p>Votos: {voteSum ? voteSum: 0}</p>
            <button>VOtar em "não gostei</button>
            <br />
            <button>Votar em Gostei"</button>

            <p>Comentários: {commentCount ? commentCount: 0}</p>
            <button>Ver comentários</button>
            <hr />

        </article>
    )

}

export default PostCard