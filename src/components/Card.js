import './Card.css'

function Card({card, handleChoice}) {
    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className="card">
                <img className="front" src = {card.src} alt="image of front"/>
                <img className="back"  onClick={handleClick} />

        </div>
          
    
    );
}

export default Card;
