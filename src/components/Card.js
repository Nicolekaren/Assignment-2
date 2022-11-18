import './Card.css'

function Card({card, handleChoice, flipped}) {

    const handleClick = () => {
            handleChoice(card)

    }

    if(flipped===true){
        return(
            <div className="card">
            <div className= "flipped">
                <img className ="front" src = {card.src} alt="image of front"/>
                <img className="back"  onClick={handleClick} />
                </div>
            </div>

        );
    }
    else{
        return (
        <div className="card">
            <div>
                <img className ="front" src = {card.src} alt="image of front"/>
                <img className="back"  onClick={handleClick} />
                </div>
            </div>   
    
    
    );
    }
}

export default Card;

