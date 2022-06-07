import Header from "../components/Header"
import useProtectedPage from "../hooks/useProtectedPage"

const Feed = () => {
  // Hook que verifica se a tela é protegida, se não for força exibição de login.
  useProtectedPage() 

  return (
    <main>
      {/* renderiza componente Header passando a props isProtected, que identifica se a página é protetida 
      true || false */}
      <Header 
        isProtected={true}
      />
      <hr />
      <section>
        <h2>Crie um novo Post</h2>
      </section>
      <section>
        <h2>Lista de Posts</h2>
      </section>
    </main>
  )  
}

export default Feed