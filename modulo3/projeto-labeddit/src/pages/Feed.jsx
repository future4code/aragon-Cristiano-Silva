import { useContext, useEffect } from "react"
import Header from "../components/Header"
import useForm from "../hooks/useForm"
import useProtectedPage from "../hooks/useProtectedPage"
import { requestCreatePost } from "../services/requests"
import PostCard from "../components/PostCard"
import GlobalStateContext from "../global/GlobalStateContext"
import styled from "styled-components"

const Section = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: solid 1px;
    width: 50%;
    height: 50%;
    margin: auto;
    border-radius: 5px;
    
    &:hover{
      
      cursor: pointer;
      transition: .6s ease-in-out;
      transform: scale(1.2);      
    }
    @media (max-width:850px) {
        display: flex;
        flex-direction: column;
        width: 23rem;
        margin-bottom: 2rem;
        margin-top: 2rem;
       
    }
    

    form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50%;
    width: 50%;

    @media (max-width:850px) {
        display: flex;
        flex-direction: column;
        width: 23rem;
      
    }
    }

    article{
        width: 25%;
        height: 150px;
        display: inline;
        margin: 5px;
    }

    section{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
    

`
const Button = styled.button`
    width: 10vw;

    @media (max-width:850px) {
       width: 16vw;
       height: 5vh;
    }

`
const Section1 = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr;

    @media (max-width:850px) {
      display: grid;
      grid-template-columns: 1fr 1fr  ;
      grid-template-rows: 1fr 1fr;
      }
`
const Section2 = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`


const Feed = () => {
  // Hook que verifica se a tela é protegida, se não for força exibição de login.
  useProtectedPage() 

  const {form, onChange, clear} = useForm({title: "", body:""}) 
  const {states, setters, getters } = useContext(GlobalStateContext);

  const {posts, page, isLoading} = states

  const { setPage } = setters

  const {getPosts} = getters

    useEffect(() => {
      getPosts(page);
  }, []);

  const createPost = (e) =>{
    e.preventDefault()

    requestCreatePost(form, clear, getPosts)
  }

  const changePage = (sum) =>{
    const nextPage = page + sum

    setPage(nextPage)
    getPosts(nextPage)
  }

  const showPosts = posts.length && posts.map((post) =>{
    return (
      <PostCard
        key={post.id}
        post={post}

        isFeed={true}
      />
    )
  })

  return (
    <main>
      {/* renderiza componente Header passando a props isProtected, que identifica se a página é protetida 
      true || false */}
      <Header 
        isProtected={true}
      />
      {/* <hr /> */}
      <Section>
        <h2>Crie um novo Post</h2>
        <form onSubmit={createPost}>
          <label htmlFor={"title"}>Título:</label>
          <input
          id={"title"}
          name={"title"}
          value={form.title}
          onChange={onChange}
          pattern={"^.{5s}$"}
          title={"O nome deve ter no mínimo 5 caracteres "}
          required
          />
          <br />
          <label htmlFor={"body"}>Texto do post:</label>
          <input
          id={"body"}
          type={"text"}
          name={"body"}
          value={form.body}
          onChange={onChange}
          pattern={"^.{5s}$"}
          title={"O nome deve ter no mínimo 5 caracteres "}
          required
          />
          <br />
          <button type={"submit"}>Criar Post</button>
        </form>
      </Section>
     {/*  <hr /> */}
     <Section2>
      <h2>Lista de Posts</h2>
          <nav>
           {/*  <h2>Selecione uma página</h2> */}
            {page !==1 &&
              <Button onClick={() => changePage(-1)}> Voltar página</Button>
            }
            <span>Página {page}</span>
            {posts.length &&
              <Button onClick={() => changePage(1)}>Próxima página</Button>
            }
          </nav>
          {/* <hr /> */}
     </Section2>
    
      <Section1>
      
        {isLoading ? <p>Carregando...</p> : showPosts}

        
      </Section1>
    </main>
  )  
}

export default Feed