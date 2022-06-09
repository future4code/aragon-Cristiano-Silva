//coordinator.js responsavel por agrupar as funções de rota

export const goToFeed =(navigate) =>{//pagina inicial
    navigate("/")
}

export const goToLogin =(navigate) =>{// pagina de login
    navigate("/login")
}

export const goToSignup=(navigate) =>{// pagina de cadastro
    navigate("/signup")
}

export const goToPost = (navigate, postId) =>{// pagina de detales do post
    navigate(`/post/${postId}`)
}

export const goBack = (navigate) =>{
    navigate(navigate -1)
}