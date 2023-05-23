function Card({imgSrc,title}){
  return(
    <>
        <div className="card  mb-5 mx-3" style={{width: "18rem"}}>
          <img className="card-img-top" src={imgSrc} alt={title} />
          <div className="card-body">
          <h4 className="text-center">{title}</h4>
          </div>
        </div>
    </>
    );
}

export default Card;