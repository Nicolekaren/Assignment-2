import './Card.css'

function Card({card}) {

    return (
        <div className="card">
            <div>
                <img className ="front" src = {card.src} alt="image of front of card"/>
                <div 
                    style={{height:'100px', width:'100px', backgroundColor:'#4E4459', borderStyle:'solid', borderColor:'white'}} >
                </div>
              </div>
        </div>
    
    );
}

export default Card;