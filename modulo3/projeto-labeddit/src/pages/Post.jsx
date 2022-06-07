import Header from "../components/Header"
import useProtectedPage from "../hooks/useProtectedPage"


const Post = () => {
  useProtectedPage()//custom hook verifica se esta tela esta protegida.


  return (
    <main>
      <Header 
        isProtected={true}
      />
      <hr />
      <section>
        <h2>Informações do Post</h2>
      </section>
      <hr />
      <section>
        <h2>Escreva seu comentário</h2>
      </section>
      <hr />
      <section>
        <h2>Lista de Comentários</h2>
      </section>
    </main>
    
  )
}

export default Post