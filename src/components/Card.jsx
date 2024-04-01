function Card({card, handleClick}){
    return (
        <div className="card" onClick={() => {handleClick(card.id)}}>
            <img src={card.sprites.front_default}/> 
            <div className="card-text">
                <p>{card.name}</p>
            </div>
        </div>
    )
}

export default Card