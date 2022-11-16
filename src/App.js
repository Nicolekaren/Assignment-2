import './App.css';
import Card from './components/Card';
import { useState, useEffect} from "react";


const cardObjects =[
  {
    name: "Card1",
    'src': '/images/Bird.png'
  },
  {
    name: "Card2",
    'src': '/images/Cat.png'
  },
  {
    name: "Card3",
    'src': '/images/Flamingo.png'
  },
  {
    name: "Card4",
    'src':'/images/Hamster.png'
  },
  {
    name: "Card ",
    'src': '/images/Owl.png'
  }
];

function App() {
  const [cards, setCards]=useState([])
  const [cardOne, setCardOne]= useState(null) 
  const [cardTwo, setCardTwo]= useState(null) 

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
                handleChoice={handleChoice}>
          </Card>
        ))}
      </div>
     
    </div>
  );
}

export default App;