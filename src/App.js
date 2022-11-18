import './App.css';
import Card from './components/Card';
import { useState, useEffect} from "react";


const cardObjects =[
  {
    'src': '/images/Bird.png',
    matched: false
  },
  {
    'src': '/images/Cat.png',
    matched: false
  },
  {
    'src': '/images/Flamingo.png',
    matched: false
  },
  {
    'src':'/images/Hamster.png',
    matched: false
  },
  {
    'src': '/images/Owl.png',
    matched: false
  }
];

function App() {
  const [cards, setCards]=useState([])
  const [cardOne, setCardOne]= useState(null) 
  const [cardTwo, setCardTwo]= useState(null) 
  const [disabled, setDisabled]= useState(false)

  const shuffleCards = ()=> {
    const shuffledCards=[...cardObjects, ...cardObjects]
      .sort(() => Math.random() - 0.5)
      .map( (cardobj)=>({ ...cardobj, id: Math.random()}) ) 
      setCardOne()
      setCardTwo()
      setCards(shuffledCards)
  }

  const handleChoice = (card) => {
      if (cardOne==null){
          setCardOne(card)
      }
      else{
        setCardTwo (card)
      }
  }

  useEffect( () => {
    if (cardOne && cardTwo){
      setDisabled(true)
        if(cardOne.src === cardTwo.src){
          setCards( prevState => {
            return prevState.map(card => {
                if (card.src ===cardOne.src) {
                  return {...card, matched:true}
                }
                else {
                  return card
                }
          })
        })
          resetChoices()
        }
        else{
          setTimeout(()=> resetChoices(), 800)
        }
    }
      
  }, [cardOne, cardTwo])
  

  const resetChoices = ()=> {
    setCardOne()
    setCardTwo()
    setDisabled(false)
  }

  useEffect(()=> {
    shuffleCards()},[]
  )

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="container">        
        {cards.map(card=>(
          <Card key= {card.id} 
                card={card} 
                handleChoice={handleChoice}
                flipped = {card===cardOne || card ===cardTwo || card.matched===true}
                disabled={disabled}>
          </Card>
        ))}
      </div>
     
    </div>
  );
}

export default App;
