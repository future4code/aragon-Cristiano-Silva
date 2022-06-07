import { useState } from "react"

// custom hook useForm utilizado para atualizar de forma continua campo de valores
// inseridos em inputs de um dado form, podendo reseta-los também.
export const useForm = (initialState) => {
    const [form, setForm] =useState(initialState)

    //atualiza cada propriedade da variável form.    
    const onChange =(e)=>{
        const { name,value } = e.target

        setForm({...form, [name]: value})
    }

    //funcao que reseta todos os valores de inputs para o valor inicial
    const clear =() =>{
        setForm(initialState)
    }

    //retorna um objeto com as propriedades form, onChange e clear
  return (
    {form, onChange,clear}
  )
}

export default useForm