export default function CardVideo(props){

   /* const titulo = "Titulo do video" */

    function reproduzVideo(){
    alert("O video está sendo reproduzido")
  }
  
    return (
        <div className="box-pagina-principal media1" onClick={reproduzVideo}>
        <img src={`https://picsum.photos/400/400?a=1=${props.imagem}`} alt="" />
        <h4>{props.titulo}</h4>
    </div>
    )
}